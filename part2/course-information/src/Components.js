import React from "react";

export const Header = (props) => {
  // console.log(props)
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};
export const Content = (props) => {
  //   console.log(props);
  return (
    <div>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </div>
  );
};
export const Total = (props) => {
  const counter = props.parts.reduce((prev, curr) => curr.exercises + prev, 0);
  return <p>Number of exercises {counter}</p>;
};
