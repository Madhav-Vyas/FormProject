import React, { useState } from 'react'
import { useContext, createContext } from 'react'

export const dataContext = createContext();
export const Dataprovider = ({ children }) => {
    //input 1
    const [ssn, setSsn] = useState('');
    const [ssnerr, setssnErr] = useState("")
    const [country, setCountry] = useState('');
    const [file, setFile] = useState(null);
    const [skill, setSkill] = useState('');
    const [gender, setGender] = useState("");
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [myZipCode, setMyZipCode] = useState(0);
    const [neighBour, setNeighBour] = useState("");
    const [neighBourYes, setNeighBourYes] = useState(false);
    const [neighBourFname, setNeighbourFname] = useState("")
    const [neighBourEmail, setNeighbourEmail] = useState("")

    const neighBourEmailHandler = (val) => {
        setNeighbourEmail(val)
    }
    const neighbourFnameHandler = (val) => {
        setNeighbourFname(val);
    }
    const neighBourYesHandler = (val) => {
        setNeighBourYes(val)
    }

    const ssnHandler = (val) => {
        setSsn(val)
    }
    const ssnErrHandler = (val) => {
        setssnErr(val);
    }
    const countryHandler = (val) => {
        setCountry(val)
    }
    const fileHandler = (val) => {
        setFile(val)

    }
    const skillHandler = (val) => {
        setSkill(val)
    }

    const genderHandler = (val) => {
        setGender(val)
    }
    const firstNameHandler = (val) => {
        setFirstName(val)
    }
    const emailHandler = (val) => {
        setEmail(val)
    }

    const dateHandler = (val) => {
        setDate(val)
    }
    const phoneNumHandler = (val) => {
        setPhoneNum(val)
    }
    const addressHandler = (val) => {
        setAddress(val)
    }
    const addressHandler2 = (val) => {
        setAddress2(val)
    }
    const zipCodeHandler = (val) => {
        setMyZipCode(val);
    }

    const neighbourHandler = (val) => {
        setNeighBour(val)
    }
    const obj = {
        ssn,
        ssnHandler,
        ssnerr,
        ssnErrHandler,


        country,
        countryHandler,

        file,
        fileHandler,

        skill,
        skillHandler,

        gender,
        genderHandler,

        firstName,
        firstNameHandler,

        email,
        emailHandler,

        date,
        dateHandler,

        phoneNum,
        phoneNumHandler,

        address,
        addressHandler,

        address2,
        addressHandler2,

        myZipCode,
        zipCodeHandler,

        neighBour,
        neighbourHandler,
        neighBourYes,
        neighBourYesHandler,

        neighBourFname,
        neighbourFnameHandler,

        neighBourEmail,
        neighBourEmailHandler


    }
    return (
        <div>
            <dataContext.Provider value={obj}>
                {children}
            </dataContext.Provider>
        </div>

    )
}

export default function useData() {
    return useContext(dataContext)
}