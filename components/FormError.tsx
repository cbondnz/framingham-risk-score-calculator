import React from "react";

interface Props {
  text: string;
  showError: boolean;
}

export default function FormError({ text, showError }: Props) {
  return <h2 className={showError ? "visible" : "invisible"}>{text}</h2>;
}
