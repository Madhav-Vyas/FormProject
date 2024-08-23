import React from 'react'

const Success = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Success!
                </h1>
                <p className="text-gray-600 mb-6">
                    Thanks for providing your details. Your submission was successful!
                </p>
                <a href="/" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out">
                    Go to Homepage
                </a>
            </div>
        </div>

    )
}

export default Success