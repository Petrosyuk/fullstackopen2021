import React from "react";

export const Total = (props) => {
  const counter = props.parts.reduce((prev, curr) => curr.exercises + prev, 0);
  return <p>Number of exercises {counter}</p>;
};
