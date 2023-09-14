"use client";
import React, { FC } from "react";

interface ButtonProps {
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClickStartOver: () => void;
}

const NavButtons: FC<ButtonProps> = ({ onClickNext, onClickPrevious, onClickStartOver }) => {
  return (
    <section>
      <input id="btn-previous" type="button" value="Previous" onClick={onClickPrevious} />
      <input id="btn-next" type="button" value="Next" onClick={onClickNext} />
      <input id="btn-startOver" type="button" value="Start Over" onClick={onClickStartOver} />
    </section>
  );
};

export default NavButtons;
