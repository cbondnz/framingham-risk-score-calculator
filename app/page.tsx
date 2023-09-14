"use client";
import React, { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Gender from "@/components/Gender";
import NavButtons from "@/components/NavButtons";

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [gender, setGender] = useState<string>("");
  const [errorState, setErrorState] = useState<boolean>(false);

  useEffect(() => {
    console.log(gender);
  }, [gender]);

  const checkSelected = () => {
    let result = false;
    switch (activeStep) {
      case 1:
        result = true;
        break;
      case 2:
        gender != "" && (result = true);
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

  const handleSetGender = (selectedValue: string) => {
    setErrorState(false);
    setGender(selectedValue);
  };

  return (
    <main>
      {activeStep == 1 && <Welcome onClick={handleClickGettingStarted} />}
      {activeStep == 2 && <Gender onGender={handleSetGender} showError={errorState} gender={gender} />}
      {activeStep != 1 && <NavButtons onClickNext={handleClickNext} onClickPrevious={handleClickPrevious} onClickStartOver={handleClickStartOver} />}
    </main>
  );
}
