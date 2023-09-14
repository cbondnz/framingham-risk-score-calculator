"use client";
import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
}

const Welcome: FC<ButtonProps> = ({ onClick }) => {
  return (
    <section>
      <h1>
        Coronary <br />
        Heart Disease <br />
        <span>Calculator</span>
      </h1>
      <p>Use this calculator to estimate the risk of developing coronary heart disease for a person over the next 10 years.</p>
      <div id="get-started-wrapper">
        <p className="paragraph-dark">The questionnaire consists of 5 questions and will take approximately 2 minutes to answer. If you are ready, click on the Get Started button below.</p>
        <input id="btn-getStarted" type="button" value="Get Started" onClick={onClick} />
      </div>
      <p>
        This calculator uses the Farmingham Risk Score equation to calculate the risk. Please see the article{" "}
        <a href="https://en.wikipedia.org/wiki/Framingham_Risk_Score" target="_blank">
          https://en.wikipedia.org/wiki/Framingham_Risk_Score
        </a>{" "}
        for details on how this score is calculated.
      </p>
    </section>
  );
};

export default Welcome;
