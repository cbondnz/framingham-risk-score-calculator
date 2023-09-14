import React, { FC } from "react";
import FormHeading from "./FormHeading";

interface ChildComponentProps {
  onGender: (selectedValue: string) => void;
}

const Gender: FC<ChildComponentProps> = ({ onGender }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onGender(event.target.value);
  };

  return (
    <section>
      <FormHeading heading="What is your gender?" />
      <label>
        <input type="radio" id="male" name="gender" value="male" onChange={handleSelect} />
        Male
      </label>
      <label>
        <input type="radio" id="female" name="gender" value="female" onChange={handleSelect} />
        Female
      </label>
    </section>
  );
};

export default Gender;
