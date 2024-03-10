import React from "react";

const DateDropdown = () => {
    return (
    <div>
        <label htmlFor="day">Birthdate</label>
        <select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {renderOptions(1, 31)}
        </select>

        <label htmlFor="month">Month:</label>
        <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
            {renderOptions(1, 12)}
        </select>

        <label htmlFor="year">Year:</label>
        <select id="year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {renderOptions(1900, new Date().getFullYear())}
        </select>
    </div>
    )
}

export default DateDropdown;