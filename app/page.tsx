"use client";
import React, { useState } from "react";
import Welcome from "@/components/Welcome";
import Gender from "@/components/Gender";

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleClickGettingStarted = () => {
    setActiveStep(2);
  };

  return <main>{activeStep == 1 ? <Welcome onClick={handleClickGettingStarted} /> : <Gender />}</main>;
}
