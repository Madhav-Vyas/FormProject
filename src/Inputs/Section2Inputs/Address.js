import React, { useEffect, useState } from 'react';
import data from '../../formConfig.json';
import useData from '../../context/dataprovider';

const Address = () => {
    const [locData, setLocData] = useState({});
    const { address, addressHandler } = useData();

    useEffect(() => {
        setLocData(data.sections[1]?.questions[1] || {});
    }, []);

    return (
        <div>
            Address 1:
            <input
                type="text"
                minLength={Number(locData?.rule_set?.rules[1]?.values[0]?.value) || 0}
                maxLength={Number(locData?.rule_set?.rules[1]?.values[1]?.value) || 30}
                value={address} // Assuming you want to use address state
                onChange={(e) => addressHandler(e.target.value)} // Assuming addressHandler updates address state
                className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
    );
};

export default Address;
