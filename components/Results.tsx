import React, { FC } from "react";
import FormHeading from "./FormHeading";
import PieChart from "./PieChart";

interface ChildComponentProps {
  score: string;
  riskPct: string;
  riskPctSymbol: string;
}

const Results: FC<ChildComponentProps> = ({ score, riskPct, riskPctSymbol }) => {
  return (
    <section>
      <FormHeading heading="Results" />
      <h3 className="my-5 text-xl sm:text-base xl:text-2xl">Based on the answers provided to the questionnaire, the risk of developing cardiovascular disease in the next 10 years is {score}</h3>
      <PieChart riskPct={riskPct} riskPctSymbol={riskPctSymbol} />
    </section>
  );
};

export default Results;
