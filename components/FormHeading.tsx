import React from "react";

interface Props {
  heading: string;
}

export default function FormHeading({ heading }: Props) {
  return <h1 className="leading-4 font-black">{heading}</h1>;
}
