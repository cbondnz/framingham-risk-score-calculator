"use client";
import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Welcome: FC<ButtonProps> = ({ onClick }) => {
  return (
    <section className="text-lg h-screen sm:bg-bg sm:bg-no-repeat sm:bg-right-top bg-half sm:text-base xl:bg-contain">
      <div className="sm:max-w-2xl sm:mx-auto sm:flex sm:flex-col sm:justify-center h-full md:max-w-2xl md:justify-start lg:max-w-4xl xl:max-w-7xl">
        <h1 className="font-black mt-0 text-4.5xl leading-none mb-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl md:mt-10">
          Coronary <br />
          Heart Disease <br />
          <span className="text-secondary">Calculator</span>
        </h1>
        <p className="sm:w-3/5 md:text-2xl md:font-medium md:w-5/6 lg:w-3/5 lg:text-xl xl:text-3xl xl:w-4/5">Use this calculator to estimate the risk of developing coronary heart disease for a person over the next 10 years.</p>
        <div className="p-5 bg-white rounded-3xl mt-5 sm:w-4/5 md:w-5/6 md:font-medium md:text-xl md:px-8 xl:text-3xl lg:w-4/5">
          <p className="paragraph-dark md:py-4">The questionnaire consists of 5 questions and will take approximately 2 minutes to answer. If you are ready, click on the Get Started button below.</p>
          <input id="btn-getStarted" type="button" value="Get Started" onClick={onClick} className="transition-all duration-500 hover:bg-bgAccentHover hover:cursor-pointer mt-5 bg-accent p-5 px-10 sm:p-4 sm:px-10 xl:text-2xl lg:text-xl border-none rounded-br-full rounded-bl-half rounded-tl-half text-white font-bold" />
        </div>
        <p className="text-sm italic hidden md:block mt-5 w-3/5 md:text-sm md:w-5/6 lg:w-3/5 lg:text-sm xl:w-4/5 xl:text-lg">
          This calculator uses the Farmingham Risk Score equation to calculate the risk. Please see the article{" "}
          <a href="https://en.wikipedia.org/wiki/Framingham_Risk_Score" target="_blank" className="text-link">
            https://en.wikipedia.org/wiki/Framingham_Risk_Score
          </a>{" "}
          for details on how this score is calculated.
        </p>
        <p className="text-sm italic md:hidden mt-5 sm:text-xs">
          This calculator uses the Farmingham Risk Score equation to calculate the risk. Please see the article{" "}
          <a href="https://en.wikipedia.org/wiki/Framingham_Risk_Score" target="_blank" className="text-link">
            en.wikipedia.org/Framingham_Risk_Score
          </a>{" "}
          for details on how this score is calculated.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
