import React, { useEffect, useState } from 'react';
import { NeighbourDetail1Data } from '../../Data/Data';
import useData from '../../context/dataprovider';

const NeighbourDetails1 = () => {
    const [locData, setLocData] = useState({});
    const { neighBourYes, neighBourFname, neighbourFnameHandler } = useData();

    useEffect(() => {
        setLocData(NeighbourDetail1Data);
    }, []);


    const regPattern = locData?.rule_set?.rules[2]?.values[0]?.value || "^[a-zA-Z]+[a-zA-Z ]*$";
    const nameLength = locData?.rule_set?.rules[1]?.values[0]?.value || 50; // Fallback to 50 if not defined

    console.log(regPattern, nameLength);

    return (
        <>
            {neighBourYes && (
                <div>
                    <label htmlFor="firstName">Neighbour's First Name: </label>
                    <input
                        type="text"
                        pattern={regPattern}
                        maxLength={nameLength}
                        onChange={(e) => neighbourFnameHandler(e.target.value)}
                        value={neighBourFname}
                        className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="text-red-500">

                        {neighBourFname && !new RegExp(regPattern).test(neighBourFname) && (
                            <span>Input doesn't match the required pattern</span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default NeighbourDetails1;
