import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";

interface ChildComponentProps {
  onSmoker: (selectedValue: string) => void;
  showError: boolean;
  smoker: string;
}

const Smoker: FC<ChildComponentProps> = ({ onSmoker, showError, smoker }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSmoker(event.target.value);
  };

  return (
    <section>
      <FormHeading heading="Do you smoke cigarettes?" />
      <FormError text="Please select your smoker status using the radio buttons" showError={showError} />
      <label htmlFor="non-smoker" className="text-3xl leading-loose font-semibold grid grid-cols-radio gap-2 sm:text-2xl mb-5 xl:text-3xl xl:mb-10">
        <input type="radio" id="non-smoker" name="smoker" value="false" onChange={handleSelect} checked={smoker == "false" ? true : false} />
        Non-smoker
      </label>
      <label htmlFor="smoker" className="text-3xl leading-loose font-semibold grid grid-cols-radio gap-2 sm:text-2xl xl:text-3xl">
        <input type="radio" id="smoker" name="smoker" value="true" onChange={handleSelect} checked={smoker == "true" ? true : false} />
        Smoker
      </label>
    </section>
  );
};

export default Smoker;
