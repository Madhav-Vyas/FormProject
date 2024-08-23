import React, { useEffect, useState } from 'react';
import useData from '../../context/dataprovider';
import data from '../../formConfig.json'; // Import the data if it's needed

const Zipcode = () => {
    const [locData, setLocData] = useState({});
    const { myZipCode, zipCodeHandler } = useData();
    const [err, setErr] = useState("");

    useEffect(() => {
        // Ensure locData is set correctly from the imported data
        setLocData(data.sections[1]?.questions[4] || {});
    }, []);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const regPattern = new RegExp(locData.rule_set?.rules[1]?.values[0]?.value || '');

        // Call the handler to update the context
        zipCodeHandler(value);

        // Validate the input against the regex pattern
        if (!regPattern.test(value)) {
            setErr(locData.rule_set?.rules[1]?.values[0]?.error || 'Invalid zip code');
        } else {
            setErr(''); // Clear the error if valid
        }
    };

    return (
        <div>
            <label htmlFor="zipcode">Zip Code:</label>
            <input
                type="text" // Change type to text to allow pattern validation
                id="zipcode"
                value={myZipCode}
                onChange={onChangeHandler}
                className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {err && <div style={{ color: 'red' }}>{err}</div>}
        </div>
    );
};

export default Zipcode;
