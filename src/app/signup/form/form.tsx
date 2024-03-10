"use client";

import React, { useState } from "react";
import InputField from "./inputField";
import BasicButton from "./basicButton";

const Form = () => {
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState(0);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isNameValid = () => {
        return name.length > 0;
    }

    const renderOptions = (start: number, end: number) => {
        const options = [];
        for (let i = start; i <= end; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const dayPlaceholder = <option value="" disabled>Day *</option>;
    const monthPlaceholder = <option value="" disabled>Month *</option>;
    const yearPlaceholder = <option value="" disabled>Year *</option>;

    return (
        <form>
            <div className="flex shadow-md bg-white rounded-md p-5 mx-[25%] flex-col max-w-lg gap-y-2">
                <InputField
                    name="Full Name"
                    type="text"
                    onChange={setName}
                    pattern="^.{5,}$"
                    validationMsg="Name needs to be at least five characters long" />

                <InputField
                    name="Contact Number"
                    type="tel"
                    onChange={setContactNumber}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    validationMsg="Please enter a valid phone number in the format xxx-xxx-xxxx.647-654-9876" />

                <label htmlFor="birthdate" className="text-[16px]">Birthdate</label>
                <div className="flex justify-center gap-x-2.5">
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="day"
                        required
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}>
                        {dayPlaceholder}
                        {renderOptions(1, 31)}
                    </select>
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="month"
                        required
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}>
                        {monthPlaceholder}
                        {renderOptions(1, 12)}
                    </select>
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="year"
                        required
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}>
                        {yearPlaceholder}
                        {renderOptions(1900, new Date().getFullYear()).reverse()}
                    </select>
                </div>


                <InputField
                    name="Email"
                    type="email"
                    onChange={setEmail}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    validationMsg="Sorry, this email address is not valid. Please try again." />
                <InputField
                    name="Password"
                    type="password"
                    onChange={setPassword}
                    pattern=".{7,}"
                    validationMsg="Password needs to be at least 7 characters. Please try again." />
                <InputField
                    name="Confirm Password"
                    type="password"
                    onChange={setConfirmPassword}
                    pattern=".{7,}"
                    validationMsg="Password needs to be at least 7 characters. Please try again." />
            </div>
            <div className="mt-6 mr-[100px] flex items-center justify-center gap-x-2.5">
                <BasicButton additionalStyle="text-[#127C95] border-solid border-[1px] border-[#127C95]" text="Cancel" />
                <BasicButton additionalStyle="text-white bg-[#127C95] hover:bg-opacity-60 group-invalid:pointer-events-none group-invalid:opacity-30" text="Submit" />
            </div>
        </form>
    );
};

export default Form;