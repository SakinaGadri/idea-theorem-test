import React from "react";

const BasicButton = ({ additionalStyle="", text="" }) => {
    return (
        <button
            type="submit"
            className={`rounded-md px-[32px] py-[10px] text-[16px] ${additionalStyle}`}
        >
            {text}
        </button>
    )
}

export default BasicButton;