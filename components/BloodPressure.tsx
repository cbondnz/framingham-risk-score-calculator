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
      <label htmlFor="treated" className="text-3xl leading-loose font-semibold grid grid-cols-radio gap-2 sm:text-2xl mb-5 xl:text-4xl xl:mb-8">
        <input type="radio" id="treated" name="type" value="true" onChange={handleSelect} checked={treated == "true" ? true : false} />
        Treated
      </label>
      <label htmlFor="untreated" className="text-3xl leading-loose font-semibold grid grid-cols-radio gap-2 sm:text-2xl mb-5 xl:text-4xl xl:mb-8">
        <input type="radio" id="untreated" name="type" value="false" onChange={handleSelect} checked={treated == "false" ? true : false} />
        Untreated
      </label>
      <label htmlFor="bloodPressure" className="text-2xl font-semibold leading-tight grid grid-cols-text gap-1 mb-5 items-center">
        <input type="number" id="bloodPressure" name="bloodPressure" min="0" max="1000" onChange={handleInput} value={bloodPressure} className="p-4" />
        Systolic Blood Pressure (mmHg)
      </label>
    </section>
  );
};

export default BloodPressure;
