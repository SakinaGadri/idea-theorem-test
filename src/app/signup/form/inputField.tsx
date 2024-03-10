import React from "react";

const InputField = ({ name="", type = "text" }) => {
    const fieldName = name.split(" ").join("-");
    return (
        <label htmlFor={fieldName} className={`mb-10 text-[16px]`}>
            {name}
            <input
                type={type}
                name={fieldName}
                id={fieldName}
                className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                placeholder={`${name} *`}
                required
            />
        </label>

    )
}

export default InputField;