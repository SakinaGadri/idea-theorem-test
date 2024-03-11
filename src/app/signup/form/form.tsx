"use client";

import React, { useState, FormEvent } from "react";
import InputField from "./inputField";
import BasicButton from "./basicButton";
import Alert from "../alert/alert";

const API_URL = "https://fullstack-test-navy.vercel.app/api/users/create"

const Form = () => {
    const initFormData = {
        day: '',
        month: '',
        year: ''
    }
    const [formData, setFormData] = useState(initFormData);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);

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

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(false);
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'content-type': "application/json" }
            })

            if (!response.ok) {
                setError(true);
                throw new Error('Failed to submit the data. Please try again.')
            }
            response.json().then((data) => {                
                setMessage(data?.description);
                console.log(message);
            });
        } catch (error) {
            setError(true);
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex grow justify-center mx-[25%]">
            <form onSubmit={onSubmit}>
                <div className="flex shadow-md bg-white rounded-md p-5 flex-col max-w-lg justify-center">
                    <InputField
                        name="Full Name"
                        type="text"
                        onChange={setFormData}
                        formData={formData}
                        pattern="^.{5,}$"
                        validationMsg="Name needs to be at least five characters long" />

                    <InputField
                        name="Contact Number"
                        type="tel"
                        onChange={setFormData}
                        formData={formData}
                        pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                        validationMsg="Please enter a valid phone number in the format xxx-xxx-xxxx." />

                    <label htmlFor="birthdate" className="text-[16px]">Birthdate</label>
                    <div className="flex justify-center gap-x-2.5">
                        <select
                            className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            id="day"
                            required
                            value={formData['day']}
                            onChange={(e) => setFormData({ ...formData, day: e.target.value })}>
                            {dayPlaceholder}
                            {renderOptions(1, 31)}
                        </select>
                        <select
                            className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            id="month"
                            required
                            value={formData['month']}
                            onChange={(e) => setFormData({ ...formData, month: e.target.value })}>
                            {monthPlaceholder}
                            {renderOptions(1, 12)}
                        </select>
                        <select
                            className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            id="year"
                            required
                            value={formData['year']}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}>
                            {yearPlaceholder}
                            {renderOptions(1900, new Date().getFullYear()).reverse()}
                        </select>
                    </div>

                    <InputField
                        name="Email"
                        type="email"
                        onChange={setFormData}
                        formData={formData}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
                        validationMsg="Sorry, this email address is not valid. Please try again." />
                    <InputField
                        name="Password"
                        type="password"
                        onChange={setFormData}
                        formData={formData}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
                        validationMsg="Incorrect format. Please try again." />
                    <InputField
                        name="Confirm Password"
                        type="password"
                        onChange={setFormData}
                        formData={formData}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
                        validationMsg="Incorrect format. Please try again." />
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-2.5">
                    <BasicButton additionalStyle="text-[#127C95] border-solid border-[1px] border-[#127C95]" text="Cancel" />
                    <BasicButton
                        isLoading={isLoading}
                        additionalStyle="text-white bg-[#127C95] hover:bg-opacity-80 group-invalid:pointer-events-none group-invalid:opacity-30"
                        text="Submit" />
                </div>
            </form>
            {message && <Alert message={message} showFailure={error} />}
        </div>
    );
};

export default Form;