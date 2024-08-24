import React from 'react'

import useData from '../../context/dataprovider';
import { useState, useEffect } from 'react';
import { Address2Data } from '../../Data/Data';
const Address2 = () => {
    const [locData, setLocData] = useState({});
    const { address2,
        addressHandler2 } = useData()

    useEffect(() => {
        setLocData(Address2Data);
    }, []);
    return (
        <div>
            <label for="address2" />
            City :  <input type="text" onChange={(e) => addressHandler2(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
    )
}

export default Address2