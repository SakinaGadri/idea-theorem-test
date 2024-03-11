import React from "react";

const Alert = ({ message, showFailure = false }) => {
    return (
        showFailure ? (
            <div className="flex sm:max-h-[50px] max-h-[66px] ml-4 px-4 py-3 rounded relative bg-red-100 border border-red-400 text-red-700" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>{message}</span>
            </div>
        ) : (
            <div className="flex sm:max-h-[50px] max-h-[66px] ml-4 px-4 py-3 rounded relative bg-green-100 border border-green-400 text-green-700" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>{message}</span>
            </div>
        )
    );
}

export default Alert;