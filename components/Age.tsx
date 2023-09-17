"use client";
import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";

interface ChildComponentProps {
  onAge: (selectedValue: number) => void;
  showError: boolean;
  age: number;
}

const Age: FC<ChildComponentProps> = ({ onAge, showError, age }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAge(parseInt(event.target.value));
  };
  return (
    <section>
      <FormHeading heading="How old are you?" />
      <h3 className="my-5 italic xl:text-2xl">Note: The Framingham Risk Score is designed to assess cardiovascular risk for people in the age range of 20&#x2013;79. It is not possible to provide an accurate risk score assessment for ages outside of this range.</h3>
      <FormError text="Please enter your age using the slider" showError={showError} />
      <form className="text-2xl font-semibold flex gap-1 xl:text-3xl">
        <label htmlFor="age">
          <input type="range" id="age" name="age" min={20} max={79} value={age} onChange={handleChange} className="w-56 mr-5" />
          Age
        </label>
        <output id="output-age" htmlFor="age" name="result">
          {age}
        </output>
      </form>
    </section>
  );
};

export default Age;
