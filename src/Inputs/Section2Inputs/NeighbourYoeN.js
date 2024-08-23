import React, { useState, useEffect } from 'react';
import data from '../../formConfig.json';
import useData from '../../context/dataprovider';

const NeighbourYoeN = () => {
    const [locData, setLocData] = useState({});
    const { neighBour, neighbourHandler, neighBourYes,
        neighBourYesHandler } = useData();

    useEffect(() => {

        setLocData(data.sections[1]?.questions[6] || {});
    }, []);


    const options = locData.options || [];

    if (options.length === 0) {
        return <div>Loading...</div>;
    }
    console.log(neighBour);
    return (
        <div>
            <label htmlFor="neighbour">Neighbour: </label>
            <input
                type="radio"
                id="neighbour-yes"
                name="neighbour"
                value={options[0]?.system_identifier}
                checked={neighBour === options[0]?.system_identifier}
                onChange={(e) => {
                    neighbourHandler(e.target.value);
                    neighBourYesHandler(true);
                }}
                className='mx-2'
            />
            <label htmlFor="neighbour-yes">Yes</label>
            <input
                type="radio"
                id="neighbour-no"
                name="neighbour"
                value={options[1]?.system_identifier}
                checked={neighBour === options[1]?.system_identifier}
                onChange={(e) => {
                    neighbourHandler(e.target.value);
                    neighBourYesHandler(false)
                }}
                className='mx-2'

            />
            <label htmlFor="neighbour-no">No</label>
        </div>
    );
};

export default NeighbourYoeN;
