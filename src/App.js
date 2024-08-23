import { useState } from 'react';
import './App.css';
import useData from './context/dataprovider';
import data from './formConfig.json';
import Countries from './Inputs/Countries';
import DOB from './Inputs/DOB';
import Email from './Inputs/Email';
import File from './Inputs/File';
import Gender from './Inputs/Gender';
import Selection from './Inputs/Selection';
import SSN from './Inputs/SSN';
import TextInput from './Inputs/TextInput';
import PhoneNum from './Inputs/Section2Inputs/PhoneNum';
import Address from './Inputs/Section2Inputs/Address';
import Address2 from './Inputs/Section2Inputs/Address2';
import Zipcode from './Inputs/Section2Inputs/Zipcode';
import NeighbourYoeN from './Inputs/Section2Inputs/NeighbourYoeN';
import NeighbourDetails1 from './Inputs/Section2Inputs/NeighbourDetails1';
import NeighbourDetail2 from './Inputs/Section2Inputs/NeighbourDetail2';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicInfo from './Pages/BasicInfo';
import { Navigate } from 'react-router-dom';
import ContactInfo from './Pages/ContactInfo';
import Success from './Pages/Success';

function App() {
  console.log(data);

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/form/basicinformation" />} />
          <Route path="/form/basicinformation" element={<BasicInfo />} />
          <Route path="/form/contact" element={<ContactInfo />} />
          <Route path="/form/success" element={<Success />} />

        </Routes>
      </BrowserRouter>

























      {/* //7 checkbox */}






    </>
  );
}

export default App;
