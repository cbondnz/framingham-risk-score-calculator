import React, { FC } from "react";
import FormHeading from "./FormHeading";
import FormError from "./FormError";
import PieChart from "./PieChart";

interface ChildComponentProps {
  score: string;
  riskPct: string;
  riskPctSymbol: string;
}

const Results: FC<ChildComponentProps> = ({ score, riskPct, riskPctSymbol }) => {
  return (
    <section>
      <h2>Output</h2>
      <h3 id="risk-statement">Based on the answers provided to the questionnaire, the risk of developing cardiovascular disease in the next 10 years is {score}</h3>
      <PieChart riskPct={riskPct} riskPctSymbol={riskPctSymbol} />
    </section>
  );
};

export default Results;
