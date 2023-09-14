import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";

interface ChildComponentProps {
  onGender: (selectedValue: string) => void;
  showError: boolean;
  gender: string;
}

const Gender: FC<ChildComponentProps> = ({ onGender, showError, gender }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onGender(event.target.value);
  };

  return (
    <section>
      <FormHeading heading="What is your gender?" />
      <FormError text="Please select a gender using the radio buttons" showError={showError} />
      <label>
        <input type="radio" id="male" name="gender" value="male" onChange={handleSelect} checked={gender == "male" ? true : false} />
        Male
      </label>
      <label>
        <input type="radio" id="female" name="gender" value="female" onChange={handleSelect} checked={gender == "female" ? true : false} />
        Female
      </label>
    </section>
  );
};

export default Gender;
