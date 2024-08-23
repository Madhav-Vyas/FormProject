import React from 'react'
import useData from '../context/dataprovider'

const Selection = () => {
    const { skill,
        skillHandler } = useData()
    console.log(skill);
    return (
        <div>
            Skills :  <select onChange={(e) => skillHandler(e.target.value)} className='border'>
                <option value={"html"}>HTML</option>
                <option value={"css"}>CSS</option>
                <option value={"js"}>JS</option>
                <option value={"react.js"}>React.js</option>
                <option value={"tailwindcss"}>Tailwind CSS</option>
                <option value={"bootstrap"}>Bootstrap</option>
                <option value={"node.js"}>Node.js</option>
                <option value={"express.js"}>Express.js</option>
                <option value={"mongodb"}>MongoDb</option>
                <option value={"java"}>Java</option>

            </select>
        </div>
    )
}

export default Selection