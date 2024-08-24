import React, { useEffect, useState } from 'react'
import useData from '../context/dataprovider'

import { ssnData } from '../Data/Data';
const SSN = () => {
    const [localData, setLocaldata] = useState([]);

    const [err, setErr] = useState('');
    const { ssn, ssnHandler,
        ssnerr,
        ssnErrHandler, } = useData();

    //console.log();

    useEffect(() => {
        setLocaldata(ssnData);
    }, [])

    console.log(localData);

    const handleInputChange = (e) => {
        const value = e.target.value;

        if (value.length < localData.rule_set.rules[0].values[0].value) {
            setErr('SSN must be 9 digits long');
            ssnErrHandler(true);

        } else {
            setErr('');
            ssnErrHandler(false);
        }

        // Always update the state
        ssnHandler(value);
    };

    return (
        <div>
            <label for="ssn" className="block text-sm font-medium text-gray-700 mb-1" />SSN
            <input type="text" className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" name='ssn' id='31' pattern='\d{9}' value={ssn} onChange={handleInputChange} />
            <div>{err}</div>
        </div>
    )
}

export default SSN