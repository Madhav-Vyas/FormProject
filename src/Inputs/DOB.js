import React, { useState, useEffect } from 'react';
import data from "../formConfig.json";
import useData from '../context/dataprovider';

const DOB = () => {
    const [locData, setLocData] = useState({});
    const [err, setErr] = useState('');
    const { date, dateHandler } = useData();

    useEffect(() => {
        // Set locData based on the JSON configuration
        setLocData(data.sections[1]?.questions[1] || {});
    }, []);

    const handleInputChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - selectedDate.getFullYear();
        const monthDiff = currentDate.getMonth() - selectedDate.getMonth();

        // Adjust age if the current date is before the selected birthdate within the same year
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < selectedDate.getDate())) {
            age--;
        }

        const minAge = 18;
        const maxAge = 100;

        if (age < minAge || age > maxAge) {
            setErr(`Age should be between ${minAge} and ${maxAge} years.`);
        } else {
            setErr('');
        }

        dateHandler(e.target.value);
    };

    return (
        <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
                type="date"
                name="dob"
                value={date}
                onChange={handleInputChange}
                required={!locData.is_optional}
                className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {err && <div style={{ color: 'red' }}>Error: {err}</div>}
        </div>
    );
};

export default DOB;
