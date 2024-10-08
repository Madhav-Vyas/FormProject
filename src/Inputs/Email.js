import React, { useState } from 'react'
import useData from '../context/dataprovider'

const Email = () => {
    const { email,
        emailHandler, emailErr,
        emailErrHandler } = useData();

    const [err, setErr] = useState("");

    console.log(email);

    const emailCheckHandler = (e) => {
        const newEmail = e.target.value;
        if (newEmail.includes("@gmail.com") || newEmail.includes("@yahoo.com") || newEmail.includes("@bing.com")) {
            emailErrHandler(false)
            setErr('');
        } else {
            setErr("Please enter a valid email");
            emailErrHandler(true)
        }
        emailHandler(newEmail); // Update the email state
    }
    return (
        <div>
            <div>
                <label for="email" className="block text-sm font-medium text-gray-700 mb-1" />Email-Address
                <input type='email' className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" value={email} onChange={emailCheckHandler} />
                <div className='text-red-500'>{err}</div>
            </div>
        </div>
    )
}

export default Email