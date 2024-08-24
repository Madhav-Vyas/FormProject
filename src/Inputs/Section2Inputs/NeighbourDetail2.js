import React, { useState, useEffect } from 'react'
import useData from '../../context/dataprovider'
import { NeiDetail2Data } from '../../Data/Data';
const NeighbourDetail2 = () => {
    const [locData, setLocData] = useState({});

    const { neighBourYes, neighBourEmail,
        neighBourEmailHandler
    } = useData()

    useEffect(() => {

        setLocData(NeiDetail2Data);
    }, []);
    return (
        <>
            {
                neighBourYes && <div>

                    <label for="neighnourEmail">Neighbour's Email address : </label>
                    <input type={locData?.type?.name} value={neighBourEmail} onChange={(e) => neighBourEmailHandler(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-72 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
            }
        </>
    )
}

export default NeighbourDetail2