import React from "react";
import InputField from "./inputField";
import BasicButton from "./basicButton";

const Form = () => {
    return (
        <div className="flex place-items-center shadow-md bg-white rounded-md p-5 mx-[25%] flex-col max-w-lg ">
            <form>
                <InputField fieldName="Full Name" type="text" />
                <InputField fieldName="Contact Number" type="tel" />
                <InputField fieldName="Email" type="email" />
                <InputField fieldName="Password" type="password" />
                <InputField fieldName="Confirm Password" type="password" />

                <div className="mt-6 flex items-center justify-center gap-x-2.5">
                    <BasicButton additionalStyle="text-[#127C95] border-solid border-[1px] border-[#127C95]" text="Cancel" />
                    <BasicButton additionalStyle="text-white bg-[#127C95]" text="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Form;