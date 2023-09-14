import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";

interface ChildComponentProps {
  onTotalChol: (selectedValue: string) => void;
  onHDLChol: (selectedValue: string) => void;
  showError: boolean;
  totalChol: string;
  hdlChol: string;
}

const Cholesterol: FC<ChildComponentProps> = ({ onTotalChol, onHDLChol, showError, totalChol, hdlChol }) => {
  const handleInputTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTotalChol(event.target.value);
  };

  const handleInputHDL = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHDLChol(event.target.value);
  };

  return (
    <section>
      <FormHeading heading="Please enter your cholesterol figures" />
      <FormError text="Please enter a value for total Cholesterol that is between 0 and 1000" showError={showError} />
      <label htmlFor="total">
        <input type="number" id="total" name="c-total" min="0" max="1000" onChange={handleInputTotal} value={totalChol || ""} />
        Total Cholesterol (mg/dL)
      </label>
      <label htmlFor="hdl">
        <input type="number" id="hdl" name="c-hdl" min="0" max="1000" onChange={handleInputHDL} value={hdlChol || ""} />
        HDL Cholesterol (mg/dL)
      </label>
    </section>
  );
};

export default Cholesterol;
