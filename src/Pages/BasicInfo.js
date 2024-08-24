import React, { useState, useEffect } from 'react';
import TextInput from '../Inputs/TextInput';
import Email from '../Inputs/Email';
import SSN from '../Inputs/SSN';
import DOB from '../Inputs/DOB';
import Gender from '../Inputs/Gender';
import Countries from '../Inputs/Countries';
import File from '../Inputs/File';
import { useNavigate } from 'react-router-dom';
import useData from '../context/dataprovider';

const BasicInfo = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const { ssn, country, file, skill, gender, firstName, email, date, neighBourYes, ssnerr, fnameErr, emailErr, doberr,
        conErr,


    } = useData();

    // Function to check if all required fields are filled
    const isFormComplete = () => {
        return ssn && date && country && gender && firstName.length > 2 && email;
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!isFormComplete()) {
            setErr("Please fill all the fields");
            return;
        }
        else if (fnameErr === true) {
            setErr("Please enter first name")
            return;
        }
        else if (emailErr === true) {
            setErr("Please enter E-mail")
            return;
        }
        else if (doberr === true) {
            setErr("Please enter DOB")
            return;
        }
        else if (conErr === true) {
            setErr("Please select Country")
            return;
        }
        else if (!file) {
            setErr("Please select the required file");
            return;
        }

        setErr("");
        navigate('/form/contact');
    };

    // Optional: You can use useEffect to monitor changes and set an error if needed
    useEffect(() => {
        if (!isFormComplete()) {
            setErr("Please fill all the fields");
        } else {
            setErr("");
        }
    }, [ssn, date, country, file, gender, firstName, email]);

    return (
        <>
            {err && <p className='font-bold text-red-600 text-lg ml-80'>{err}</p>}
            <form
                onSubmit={onSubmitHandler}
                className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-gray-800">User Information</h1>

                {/* Text Fields */}
                <div className="mb-4">
                    <TextInput />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <Email />
                </div>

                {/* SSN */}
                <div className="mb-4">
                    <SSN />
                </div>

                {/* DOB */}
                <div className="mb-4">
                    <DOB />
                </div>

                {/* Radio Buttons */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select your gender:</label>
                    <Gender />
                </div>

                {/* Country Search List */}
                <div className="mb-4">
                    <Countries />
                </div>

                {/* File Upload */}
                <div className="mb-4">

                    <File />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!isFormComplete()}
                    className={`w-full px-4 py-2 font-semibold text-white rounded-md shadow-md focus:outline-none ${isFormComplete()
                        ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                        : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    Submit
                </button>
            </form>

        </>
    );
};

export default BasicInfo;
