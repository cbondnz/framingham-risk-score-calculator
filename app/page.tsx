"use client";
import React, { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Gender from "@/components/Gender";
import NavButtons from "@/components/NavButtons";
import Age from "@/components/Age";
import Smoker from "@/components/Smoker";
import Cholesterol from "@/components/Cholesterol";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState(20);
  const [smoker, setSmoker] = useState("");
  const [totalChol, setTotalChol] = useState<string>("");
  const [hdlChol, setHDLChol] = useState<string>("");
  const [errorState, setErrorState] = useState<boolean>(false);

  useEffect(() => {
    console.log(gender);
    console.log(totalChol);
  }, [totalChol]);

  // Checks which step and if a form value has been entered
  // @returns - boolean true if form field is selected else false
  const checkSelected = () => {
    let result = false;
    switch (activeStep) {
      case 1:
        result = true;
        break;
      case 2:
        gender != "" && (result = true);
        break;
      case 3:
        result = true;
        break;
      case 4:
        smoker != "" && (result = true);
        break;
      case 5:
        if (hdlChol != "" && totalChol != "") {
          result = true;
        }
        break;
      default:
        break;
    }

    return result;
  };

  // Clicking the "Get Started" button on the home screen moves to the first form page
  const handleClickGettingStarted = () => {
    setActiveStep(2);
  };

  // Check if end state is not reached and increment the step by 1
  const handleClickNext = () => {
    if (checkSelected()) {
      if (activeStep != 7) {
        setActiveStep(activeStep + 1);
      }
    } else {
      setErrorState(true);
    }
  };

  // Check if start state is not reached and decrement the step by 1
  const handleClickPrevious = () => {
    if (activeStep != 1) {
      setActiveStep(activeStep - 1);
    }
  };

  // Resets scorings and go back to home page (step 1)
  const handleClickStartOver = () => {
    // TODO reset scorings
    setActiveStep(1);
  };

  // Sets the gender based on the value received from the form inputs
  const handleSetGender = (selectedValue: string) => {
    setErrorState(false);
    setGender(selectedValue);
  };

  // Sets the gender based on the value received from the form inputs
  const handleSetAge = (selectedValue: number) => {
    setErrorState(false);
    setAge(selectedValue);
  };

  // Sets the smoker based on the value received from the form inputs
  const handleSetSmoker = (selectedValue: string) => {
    setErrorState(false);
    setSmoker(selectedValue);
  };

  // Sets the total cholesterol based on the value received from the form inputs
  const handleSetTotalChol = (selectedValue: string) => {
    setErrorState(false);
    setTotalChol(selectedValue);
  };

  // Sets the total cholesterol based on the value received from the form inputs
  const handleSetHDLChol = (selectedValue: string) => {
    setErrorState(false);
    setHDLChol(selectedValue);
  };

  return (
    <main>
      {activeStep == 1 && <Welcome onClick={handleClickGettingStarted} />}
      {activeStep == 2 && <Gender onGender={handleSetGender} showError={errorState} gender={gender} />}
      {activeStep == 3 && <Age onAge={handleSetAge} showError={errorState} age={age} />}
      {activeStep == 4 && <Smoker onSmoker={handleSetSmoker} showError={errorState} smoker={smoker} />}
      {activeStep == 5 && <Cholesterol onHDLChol={handleSetHDLChol} onTotalChol={handleSetTotalChol} showError={errorState} totalChol={totalChol} hdlChol={hdlChol} />}
      {activeStep != 1 && <NavButtons onClickNext={handleClickNext} onClickPrevious={handleClickPrevious} onClickStartOver={handleClickStartOver} />}
    </main>
  );
}
