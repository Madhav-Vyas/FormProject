import React, { useState } from 'react'
import useData from '../context/dataprovider'

const File = () => {
    const { file, fileHandler, fileErr,
        fileErrHandler, } = useData();
    const [err, setErr] = useState("");
    const handleFileChange = (e) => {
        const value = e.target.files[0]
        if (!value) {
            setErr("Please select the required file")
            fileErrHandler(true);

        }
        fileHandler(value)
        fileErrHandler(false);
        setErr("");
    }
    return (
        <div>
            <label for="files" />
            Add Your Resume :  <input type='file' onChange={handleFileChange} />

            <div className='text-red-500'> {err}</div>
        </div>

    )
}

export default File