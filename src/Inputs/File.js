import React from 'react'
import useData from '../context/dataprovider'

const File = () => {
    const { file, fileHandler } = useData();
    const handleFileChange = (e) => {
        const value = e.target.files[0]
        if (value) {
            fileHandler(value)
        }
    }
    return (
        <div>
            <label for="files" />
            Add Your Resume :  <input type='file' onChange={handleFileChange} />

        </div>
    )
}

export default File