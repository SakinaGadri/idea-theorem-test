import React from "react";

const InputField = ({ fieldName="", type = "text" }) => {
    return (
        <label htmlFor={fieldName} className={`mb-10 text-[16px]`}>
            {fieldName}
            <input
                type={type}
                name={fieldName}
                id={fieldName}
                className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 placeholder-after:content-['*'] placeholder-after:ml-0.5 placeholder-after:text-red-500"
                placeholder={`${fieldName} *`}
                required
            />
        </label>

    )
}

export default InputField;