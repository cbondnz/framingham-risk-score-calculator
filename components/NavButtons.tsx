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
    <section className="mt-16">
      <input id="btn-previous" type="button" value="Previous" onClick={onClickPrevious} className="xl:text-xl bg-secondary p-3 px-8 border-none rounded-half text-white sm:text-md font-semibold transition-all duration-500 hover:bg-secondaryHover hover:cursor-pointer mx-1 my-2" />
      <input id="btn-next" disabled={activeStep == 7 ? true : false} type="button" value={activeStep == 6 || activeStep == 7 ? "Calculate" : "Next"} onClick={onClickNext} className="xl:text-xl disabled:bg-lightGray bg-secondary p-3 px-8 border-none rounded-half text-white sm:text-md font-semibold transition-all duration-500 hover:bg-secondaryHover hover:cursor-pointer mx-1 my-2" />
      <input id="btn-startOver" type="button" value="Start Over" onClick={onClickStartOver} className="xl:text-xl bg-secondary p-3 px-8 border-none rounded-half text-white sm:text-md font-semibold transition-all duration-500 hover:bg-secondaryHover hover:cursor-pointer mx-1 my-2" />
    </section>
  );
};

export default NavButtons;
