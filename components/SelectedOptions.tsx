import React, { FC } from "react";

interface ChildComponentProps {
  gender: string;
  age: number;
  smoker: string;
  totalChol: string;
  hdlChol: string;
  treated: string;
  bloodPressure: string;
  risk: string;
}

const SelectedOptions: FC<ChildComponentProps> = ({ gender, age, smoker, totalChol, hdlChol, treated, bloodPressure, risk }) => {
  return (
    <aside className="hidden w-1/3 bg-white rounded-full p-6 border-2 border-primary shadow-box sm:flex flex-col sm:p-3 lg:p-6 lg:w-2/5">
      <h3 className="text-2xl font-semibold sm:text-lg text-center lg:text-2xl xl:text-4xl xl:mb-5">Selected Options</h3>
      <ul className="p-0 list-inside list-none">
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Gender: <span id="stat-gender">{gender != "" && gender}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Age: <span id="stat-age">{age != 0 && gender != "" && age}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Smoker: <span id="stat-smoker">{smoker != "" && smoker}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Total Cholesterol: <span id="stat-ctotal">{totalChol != "" && totalChol + "mg/dL"}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          HDL Cholesterol: <span id="stat-chdl">{hdlChol != "" && hdlChol + "mg/dL"}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Blood Pressure Type: <span id="stat-bloodType">{treated == "true" ? "Treated" : "Untreated"}</span>
        </li>
        <li className="mb-8 text-md before:text-red before:mr-2 before:content-['\2665'] sm:text-xs sm:mb-6 lg:text-base lg:mb-8 md:mb-8 xl:text-2xl xl:mb-10">
          Blood Pressure: <span id="stat-blood">{bloodPressure != "" && bloodPressure + "mmHg"}</span>
        </li>
      </ul>
      <div id="risk">
        <hr />
        <h3 className="text-2xl font-semibold sm:text-lg text-center xl:text-4xl xl:mt-5">
          10 year risk: <span id="stat-risk">{risk != "" ? (risk == "-1" ? "<1%" : risk + "%") : null}</span>
        </h3>
      </div>
    </aside>
  );
};

export default SelectedOptions;
