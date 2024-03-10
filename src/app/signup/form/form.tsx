"use client";

import React, { useState } from "react";
import InputField from "./inputField";
import BasicButton from "./basicButton";

const Form = () => {
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");


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
                <InputField name="Full Name" type="text" />
                <InputField name="Contact Number" type="tel" />
                <label htmlFor="birthdate" className="text-[16px]">Birthdate</label>
                <div className="flex justify-center gap-x-2.5">
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="day"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}>
                        {dayPlaceholder}
                        {renderOptions(1, 31)}
                    </select>
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="month"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}>
                        {monthPlaceholder}
                        {renderOptions(1, 12)}

                    </select>
                    <select
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        id="year"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}>
                        {yearPlaceholder}
                        {renderOptions(1900, new Date().getFullYear())}
                    </select>
                </div>

                <InputField name="Email" type="email" />
                <InputField name="Password" type="password" />
                <InputField name="Confirm Password" type="password" />
            </div>
            <div className="mt-6 mr-[100px] flex items-center justify-center gap-x-2.5">
                <BasicButton additionalStyle="text-[#127C95] border-solid border-[1px] border-[#127C95]" text="Cancel" />
                <BasicButton additionalStyle="text-white bg-[#127C95]" text="Submit" />
            </div>
        </form>
    );
};

export default Form;