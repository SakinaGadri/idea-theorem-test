import React from "react";

const InputField = ({ name, pattern, formData, onChange, validationMsg, type = "text" }) => {
    const fieldName = name.split(" ").join("-");
    const key = name.toLowerCase().split(" ").join("_");
    return (
        <label htmlFor={fieldName} className="text-[16px]">
            {name}
            <input
                type={type}
                name={fieldName}
                id={fieldName}
                className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                placeholder={`${name} *`}
                pattern={pattern}
                onChange={e => onChange({ ...formData, [key]: e.target.value })}
                required
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                {validationMsg}
            </span>
        </label>

    )
}

export default InputField;