import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";

interface ChildComponentProps {
  onTreated: (selectedValue: string) => void;
  onBloodPressure: (selectedValue: string) => void;
  showError: boolean;
  treated: string;
  bloodPressure: string;
}

const BloodPressure: FC<ChildComponentProps> = ({ onTreated, onBloodPressure, showError, treated, bloodPressure }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onBloodPressure(event.target.value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTreated(event.target.value);
  };

  return (
    <section>
      <FormHeading heading="Please enter your blood pressure and type of reading" />
      <FormError text="Please enter your blood pressure reading in the text box" showError={showError} />
      <label htmlFor="treated">
        <input type="radio" id="treated" name="type" value="true" onChange={handleSelect} checked={treated == "true" ? true : false} />
        Treated
      </label>
      <label htmlFor="untreated">
        <input type="radio" id="untreated" name="type" value="false" onChange={handleSelect} checked={treated == "false" ? true : false} />
        Untreated
      </label>
      <label htmlFor="bloodPressure">
        <input type="number" id="bloodPressure" name="bloodPressure" min="0" max="1000" onChange={handleInput} value={bloodPressure} />
        Systolic Blood Pressure (mmHg)
      </label>
    </section>
  );
};

export default BloodPressure;
