import React from 'react';
import useData from '../context/dataprovider';

const Gender = () => {
    const { gender, genderHandler } = useData();

    const onChangeHandler = (e) => {
        genderHandler(e.target.value);
    };

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="male" className="flex items-center space-x-2">
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={onChangeHandler}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Male</span>
            </label>
            <label htmlFor="female" className="flex items-center space-x-2">
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={onChangeHandler}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Female</span>
            </label>
            <label htmlFor="other" className="flex items-center space-x-2">
                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={onChangeHandler}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">Other</span>
            </label>
        </div>

    );
};

export default Gender;
