import React from "react";

const BasicButton = ({ isLoading = false, additionalStyle = "", text = "" }) => {
    return (
        <button
            disabled={isLoading}
            type="submit"
            className={`rounded-md px-[32px] py-[10px] text-[16px] ${additionalStyle}`}
        >
            {isLoading ? 'Loading...' : text}
        </button>
    )
};

export default BasicButton;