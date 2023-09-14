"use client";
import React, { useState, useEffect } from "react";
import Welcome from "@/components/Welcome";
import Gender from "@/components/Gender";
import NavButtons from "@/components/NavButtons";
import Age from "@/components/Age";
import Smoker from "@/components/Smoker";
import Cholesterol from "@/components/Cholesterol";
import BloodPressure from "@/components/BloodPressure";
import Results from "@/components/Results";

interface ScoringData {
  [gender: string]: {
    ageScore: Array<[number, number, number]>;
    tChol: Array<{
      age: [number, number];
      tCholScore: Array<[number, number, number]>;
    }>;
    smokerScore: Array<[number, number, number, number]>;
    hdlScore: Array<[number, number, number]>;
    bpScore: Array<[number, number, number, number]>;
    risk: Array<[number, number, number]>;
  };
}

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number>(20);
  const [smoker, setSmoker] = useState<string>("");
  const [totalChol, setTotalChol] = useState<string>("");
  const [hdlChol, setHDLChol] = useState<string>("");
  const [treated, setTreated] = useState<string>("");
  const [bloodPressure, setBloodPressure] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [riskPct, setRiskPct] = useState<string>("");
  const [riskPctSymbol, setRiskPctSymbol] = useState<string>("");
  const [errorState, setErrorState] = useState<boolean>(false);

  const scoring: ScoringData = {
    female: {
      // lower age, upper age, score
      ageScore: [
        [20, 34, -7],
        [35, 39, -3],
        [40, 44, 0],
        [45, 49, 3],
        [50, 54, 6],
        [55, 59, 8],
        [60, 64, 10],
        [65, 69, 12],
        [70, 74, 14],
        [75, 79, 16],
      ],
      // lower age, upper age -> lower mg/dL, upper mg/dL, score
      tChol: [
        {
          age: [20, 39],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 4],
            [200, 239, 8],
            [249, 279, 11],
            [280, Infinity, 13],
          ],
        },
        {
          age: [40, 49],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 3],
            [200, 239, 6],
            [249, 279, 8],
            [280, Infinity, 10],
          ],
        },
        {
          age: [50, 59],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 2],
            [200, 239, 4],
            [249, 279, 5],
            [280, Infinity, 7],
          ],
        },
        {
          age: [60, 69],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 1],
            [200, 239, 2],
            [249, 279, 3],
            [280, Infinity, 4],
          ],
        },
        {
          age: [70, 79],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 1],
            [200, 239, 1],
            [249, 279, 2],
            [280, Infinity, 2],
          ],
        },
      ],
      // lower age, upper age, smoker score, non-smoker score
      smokerScore: [
        [20, 39, 9, 0],
        [40, 49, 7, 0],
        [50, 59, 4, 0],
        [60, 69, 2, 0],
        [70, 79, 1, 0],
      ],
      // lower mg/dL, uppper mg/dL, score
      hdlScore: [
        [60, Infinity, -1],
        [50, 59, 0],
        [40, 49, 1],
        [0, 39, 2],
      ],
      // lower mmHg, upper mmHg, treated score, untreated score
      bpScore: [
        [0, 119, 0, 0],
        [120, 129, 3, 1],
        [130, 139, 4, 2],
        [140, 159, 5, 3],
        [160, Infinity, 6, 4],
      ],
      // lower total score, upper total score, risk percentage
      risk: [
        [Number.NEGATIVE_INFINITY, 8, -1],
        [9, 12, 1],
        [13, 14, 2],
        [15, 15, 3],
        [16, 16, 4],
        [17, 17, 5],
        [18, 18, 6],
        [19, 19, 8],
        [20, 20, 11],
        [21, 21, 14],
        [22, 22, 17],
        [23, 23, 22],
        [24, 24, 27],
        [25, Infinity, 30],
      ],
    },
    male: {
      // lower age, upper age, score
      ageScore: [
        [20, 34, -9],
        [35, 39, -4],
        [40, 44, 0],
        [45, 49, 3],
        [50, 54, 6],
        [55, 59, 8],
        [60, 64, 10],
        [65, 69, 11],
        [70, 74, 12],
        [75, 79, 13],
      ],
      // lower age, upper age -> lower mg/dL, upper mg/dL, score
      tChol: [
        {
          age: [20, 39],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 4],
            [200, 239, 7],
            [249, 279, 9],
            [280, Infinity, 11],
          ],
        },
        {
          age: [40, 49],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 3],
            [200, 239, 5],
            [249, 279, 6],
            [280, Infinity, 8],
          ],
        },
        {
          age: [50, 59],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 2],
            [200, 239, 3],
            [249, 279, 4],
            [280, Infinity, 5],
          ],
        },
        {
          age: [60, 69],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 1],
            [200, 239, 1],
            [249, 279, 2],
            [280, Infinity, 3],
          ],
        },
        {
          age: [70, 79],
          tCholScore: [
            [0, 159, 0],
            [160, 199, 0],
            [200, 239, 0],
            [249, 279, 1],
            [280, Infinity, 1],
          ],
        },
      ],
      // lower age, upper age, smoker score, non-smoker score
      smokerScore: [
        [20, 39, 8, 0],
        [40, 49, 5, 0],
        [50, 59, 3, 0],
        [60, 69, 1, 0],
        [70, 79, 1, 0],
      ],
      // lower mg/dL, uppper mg/dL, score
      hdlScore: [
        [60, Infinity, -1],
        [50, 59, 0],
        [40, 49, 1],
        [0, 39, 2],
      ],
      // lower mmHg, upper mmHg, treated score, untreated score
      bpScore: [
        [0, 119, 0, 0],
        [120, 129, 1, 0],
        [130, 139, 2, 1],
        [140, 159, 2, 1],
        [160, Infinity, 3, 2],
      ],
      // lower total score, upper total score, risk percentage
      risk: [
        [Number.NEGATIVE_INFINITY, 0, -1],
        [1, 4, 1],
        [5, 6, 2],
        [7, 7, 3],
        [8, 8, 4],
        [9, 9, 5],
        [10, 10, 6],
        [11, 11, 8],
        [12, 12, 10],
        [13, 13, 12],
        [14, 14, 16],
        [15, 15, 20],
        [16, 16, 25],
        [17, Infinity, 30],
      ],
    },
  };

  useEffect(() => {
    if (activeStep == 7) {
      console.log(gender, age, smoker, totalChol, hdlChol, treated, bloodPressure);
      console.log("score: " + score, "riskPct: " + riskPct, "riskPctSymbol: " + riskPctSymbol, "errorState: " + errorState);
    }
    console.log(activeStep);
  }, [activeStep]);

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
      case 6:
        if (treated != "" && bloodPressure != "") {
          result = true;
        }
        break;
      case 7:
        result = true;
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
        if (activeStep == 6) {
          calcRisk();
        }
        setActiveStep(activeStep + 1);
      } else {
        setErrorState(true);
      }
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
    startOver();
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

  // Sets the total cholesterol based on the value received from the form inputs
  const handleSetTreated = (selectedValue: string) => {
    setErrorState(false);
    setTreated(selectedValue);
  };

  // Sets the total cholesterol based on the value received from the form inputs
  const handleSetBloodPressure = (selectedValue: string) => {
    setErrorState(false);
    setBloodPressure(selectedValue);
  };

  const calcAgeScore = () => {
    return getElement(scoring[gender].ageScore, 2, age);
  };

  const calcSmokerScore = () => {
    let smokerScoreResult: number | null;
    if (smoker == "true") {
      smokerScoreResult = getElement(scoring[gender].smokerScore, 2, age);
    } else {
      smokerScoreResult = getElement(scoring[gender].smokerScore, 3, age);
    }

    return smokerScoreResult;
  };

  const calcTotalCholScore = () => {
    let result;
    scoring[gender].tChol.find((element) => {
      if (age >= element.age[0] && age <= element.age[1]) {
        result = element.tCholScore.find((tChol) => {
          if (parseInt(totalChol) >= tChol[0] && parseInt(totalChol) <= tChol[1]) {
            return tChol;
          }
        });
      }
    });

    return result ? result[2] : null;
  };

  const calcHDLScore = () => {
    return getElement(scoring[gender].hdlScore, 2, parseInt(hdlChol));
  };

  const calcBloodPressureScore = () => {
    const bloodIndex = treated === "true" ? 2 : 3;
    return getElement(scoring[gender].bpScore, bloodIndex, parseInt(bloodPressure));
  };

  const calcRisk = () => {
    if (scoring[gender]) {
      const ageScore = calcAgeScore();
      const smokerScore = calcSmokerScore();
      const totalCholScore = calcTotalCholScore();
      const hdlScore = calcHDLScore();
      const bloodPressureScore = calcBloodPressureScore();

      if (ageScore !== null && smokerScore !== null && totalCholScore !== null && hdlScore != null && bloodPressureScore != null) {
        const totalScore = ageScore + smokerScore + totalCholScore + hdlScore + bloodPressureScore;

        const totalRisk = getElement(scoring[gender].risk, 2, totalScore)?.toString();
        setRiskPct(totalRisk != null ? totalRisk : "");

        const totalRiskInt = parseInt(totalRisk != null ? totalRisk : "");

        if (totalRiskInt == -1) {
          setScore("less than 1%");
          setRiskPctSymbol("< 1%");
        } else if (totalRiskInt == 30) {
          setScore("over 30%");
          setRiskPctSymbol("> 30%");
        } else {
          setScore(totalRisk + "%");
          setRiskPctSymbol(totalRisk + "%");
        }
      }
    }
  };

  const getElement = (array: Array<[number, number, number]> | Array<[number, number, number, number]>, index: number, value: number): number | null => {
    const result = array.find(([lower, upper]) => value >= lower && value <= upper);
    return result ? result[index] : null;
  };

  const startOver = () => {
    setGender("");
    setAge(20);
    setSmoker("");
    setTotalChol("");
    setHDLChol("");
    setTreated("");
    setBloodPressure("");
    setScore("");
    setRiskPct("");
    setRiskPctSymbol("");
  };

  return (
    <main>
      {activeStep == 1 && <Welcome onClick={handleClickGettingStarted} />}
      {activeStep == 2 && <Gender onGender={handleSetGender} showError={errorState} gender={gender} />}
      {activeStep == 3 && <Age onAge={handleSetAge} showError={errorState} age={age} />}
      {activeStep == 4 && <Smoker onSmoker={handleSetSmoker} showError={errorState} smoker={smoker} />}
      {activeStep == 5 && <Cholesterol onHDLChol={handleSetHDLChol} onTotalChol={handleSetTotalChol} showError={errorState} totalChol={totalChol} hdlChol={hdlChol} />}
      {activeStep == 6 && <BloodPressure onTreated={handleSetTreated} onBloodPressure={handleSetBloodPressure} showError={errorState} treated={treated} bloodPressure={bloodPressure} />}
      {activeStep == 7 && <Results score={score} riskPct={riskPct} riskPctSymbol={riskPctSymbol} />}
      {activeStep != 1 && <NavButtons onClickNext={handleClickNext} onClickPrevious={handleClickPrevious} onClickStartOver={handleClickStartOver} activeStep={activeStep} />}
    </main>
  );
}
