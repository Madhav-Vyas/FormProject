import React, { useState } from 'react'
import PhoneNum from '../Inputs/Section2Inputs/PhoneNum';
import Address from '../Inputs/Section2Inputs/Address';
import Address2 from '../Inputs/Section2Inputs/Address2';
import Zipcode from '../Inputs/Section2Inputs/Zipcode';
import NeighbourYoeN from '../Inputs/Section2Inputs/NeighbourYoeN';
import NeighbourDetail2 from '../Inputs/Section2Inputs/NeighbourDetail2';
import NeighbourDetails1 from '../Inputs/Section2Inputs/NeighbourDetails1';
import useData from '../context/dataprovider';
import Selection from '../Inputs/Selection';
import { useNavigate } from 'react-router-dom';
const ContactInfo = () => {
    const navigate = useNavigate();
    const [yes, setYes] = useState(false);
    const [err, setErr] = useState("")
    const { neighBourYes, phoneNum, address, address2, myZipCode, neighBour, neighBourFname, neighBourEmail, skill, } = useData();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!phoneNum || !address || !address2 || !myZipCode || !skill) {
            setErr("Fill all the fields")
            return;
        };

        navigate('/form/success');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
                {/* Error Message */}
                {err && (
                    <div className="text-red-600 font-bold text-lg mb-4">
                        *{err}
                    </div>
                )}

                {/* Form Header */}
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Contact Information
                </h1>

                {/* Form */}
                <form onSubmit={onSubmitHandler}>
                    <div className="space-y-6">

                        {/* Form Fields */}
                        <div className="mt-3">
                            <PhoneNum />
                        </div>

                        <div className="mt-3">
                            <Address />
                        </div>

                        <div className="mt-3">
                            <Address2 />
                        </div>

                        <div className="mt-3">
                            <Zipcode />
                        </div>

                        <div className="mt-3">
                            <NeighbourYoeN />
                        </div>

                        {/* Conditional Fields */}
                        {neighBourYes && (
                            <>
                                <div className="mt-3">
                                    <NeighbourDetails1 />
                                </div>
                                <div className="mt-3">
                                    <NeighbourDetail2 />
                                </div>
                            </>
                        )}

                        {/* Selection Component */}
                        <div className="mt-3">
                            <Selection />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className={`w-full px-6 py-3 font-semibold text-black rounded-lg shadow-md focus:outline-none transition duration-200 ease-in-out 
                                        'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 
                                    `}

                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ContactInfo