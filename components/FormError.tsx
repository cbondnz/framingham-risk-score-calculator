import React from "react";

interface Props {
  text: string;
  showError: boolean;
}

export default function FormError({ text, showError }: Props) {
  return <h2 className={`${showError ? "visible" : "invisible"} my-5 text-error`}>{text}</h2>;
}
