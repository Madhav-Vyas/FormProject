import React, { useEffect, useState } from 'react';
import data from '../../formConfig.json';
import useData from '../../context/dataprovider';

const PhoneNum = () => {
    const { phoneNum,
        phoneNumHandler } = useData();
    const [locData, setLocData] = useState({});
    const [err, setErr] = useState("");

    useEffect(() => {
        // Set locData once when the component mounts
        setLocData(data.sections[1].questions[0]);
    }, []);

    const onChangeHandler = (e) => {
        const val = e.target.value;

        // Check if the input value length is not 10 digits
        if (val.length !== 10) {
            setErr(locData.rule_set?.rules[1]?.values[0]?.error || "Invalid phone number");
        } else {
            setErr(""); // Clear error if valid
        }
        phoneNumHandler(val)
    }

    return (
        <div>
            <label htmlFor="phone">Mobile number :</label>
            <input
                type="text"
                id="phone"
                pattern={locData.rule_set?.rules[1]?.values[0]?.value || "\\d{10}"}
                onChange={onChangeHandler}
                value={phoneNum}
                className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {err && <div style={{ color: 'red' }}>{err}</div>}
        </div>
    );
}

export default PhoneNum;
