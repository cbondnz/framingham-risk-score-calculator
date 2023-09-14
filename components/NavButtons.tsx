"use client";
import React, { FC } from "react";

interface ButtonProps {
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickStartOver: () => void;
  activeStep: number;
}

const NavButtons: FC<ButtonProps> = ({ onClickNext, onClickPrevious, onClickStartOver, activeStep }) => {
  return (
    <section>
      <input id="btn-previous" type="button" value="Previous" onClick={onClickPrevious} />
      <input id="btn-next" type="button" value={activeStep == 6 || activeStep == 7 ? "Calculate" : "Next"} onClick={onClickNext} />
      <input id="btn-startOver" type="button" value="Start Over" onClick={onClickStartOver} />
    </section>
  );
};

export default NavButtons;
