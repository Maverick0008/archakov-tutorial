import React, { useState } from "react";
import Address from "./components/Address";
import PersonalInfoForm from "./components/PersonalInfoForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import Result from "./components/Result";

const App = () => {
    const [formValues, setFormValues] = useState({})
    const history = useNavigate()

    const nextStep = (name) => {
        history(name)
    }
    console.log('Main Form', formValues)
  return (
    <>
      <Routes>
        <Route path="/" exact element={<PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />} />
        <Route path="/address" element={<Address setFormValues={setFormValues} nextStep={nextStep} />} />
        <Route path="/result" element={<Result formValues={formValues} />} />
      </Routes>
    </>
  );
};

export default App;
