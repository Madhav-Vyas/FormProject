import React, { useEffect, useState } from 'react'
import data from '../../formConfig.json';
import useData from '../../context/dataprovider';
const NeighbourDetails1 = () => {
    const [locData, setLocData] = useState({});
    const { neighBour, neighBourYes, neighBourFname,
        neighbourFnameHandler } = useData();


    useEffect(() => {

        setLocData(data.sections[1]?.questions[7] || {});
    }, []);
    const regPattern = locData?.rule_set?.rules[2]?.values[0]?.value || "^[a-zA-Z]+[a-zA-Z ]*$";
    const nameLength = locData?.rule_set?.rules[1]?.values[0]?.value;
    console.log(regPattern, nameLength);
    return (
        <>
            {
                neighBourYes && <div>

                    <label for="firstName">Neighbour's First Name : </label>
                    <input type="text" pattern={regPattern} maxLength={nameLength} onChange={(e) => neighbourFnameHandler(e.target.value)} value={neighBourFname} className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
            }
        </>
    )
}

export default NeighbourDetails1