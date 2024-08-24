import React, { useState } from 'react'
import useData from '../context/dataprovider'

const TextInput = () => {
    const [err, setErr] = useState("");
    const { firstName,
        firstNameHandler, fnameErr,
        fnameErrHandler,
    } = useData()

    console.log(firstName);
    const onChangehandler = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length < 3) {
            fnameErrHandler(true);
            setErr("Name must be greater than or equal to 3 characters");
        } else {
            fnameErrHandler(false);
            setErr('');
        }
        firstNameHandler(inputValue);
    }
    return (
        <div>
            <label for="fname" className="block text-sm font-medium text-gray-700 mb-1" /> First name:
            <input type="text" value={firstName} className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={onChangehandler} />
            <div>{err}</div>
        </div>
    )
}

export default TextInput