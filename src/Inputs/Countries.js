import React, { useState } from 'react'
import useData from '../context/dataprovider';

const countries = [
    "United States",
    "China",
    "India",
    "Japan",
    "Germany",
    "France",
    "United Kingdom",
    "Brazil",
    "Russia",
    "Canada"
]
const Countries = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { countryHandler, country } = useData();
    const filtered = countries.filter((obj) => obj.toLowerCase().includes(searchTerm.toLowerCase()));

    // console.log(country);
    return (
        <div className="">
            {/* Text input */}
            <div> Client Countries :</div> <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search..."
            />

            {/* Filtered items */}
            {filtered.length > 0 && (
                <div className=" w-72 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
                    {filtered.map((obj, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSearchTerm(obj);
                                countryHandler(obj);
                            }}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-100 text-gray-900"
                        >
                            {obj}
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}

export default Countries