import React from "react";

interface Props {
  heading: string;
}

export default function FormHeading({ heading }: Props) {
  return <h1 className="text-4xl font-bold sm:text-3xl xl:text-6xl">{heading}</h1>;
}
