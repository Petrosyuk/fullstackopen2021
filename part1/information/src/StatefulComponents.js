import React, { useState } from "react";

export const Button = ({ handleClick, buttonText }) => (
  <>
    <button onClick={handleClick}>{buttonText}</button>
  </>
);

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  //   const decreaseByOne = () => setCounter(counter - 1);
  //   const setToZero = () => setCounter(0);

  const setToValue = (value) => () => {
    setCounter(value);
  };

  return (
    <>
      <p>The counter value is {counter}</p>
      <Button handleClick={() => increaseByOne()} buttonText={"plus"} />
      <Button handleClick={setToValue(counter - 1)} buttonText={"min"} />
      <Button handleClick={setToValue(0)} buttonText={"zero"} />
      <Button handleClick={setToValue(counter + 10)} buttonText="+10" />
      <Button handleClick={setToValue(counter + 100)} buttonText="+100" />
      <Button handleClick={setToValue(counter + 1000)} buttonText="+1000" />
    </>
  );
};

export const MultiDirectionalCounter = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    const newClick = { ...clicks, left: clicks.left + 1 };
    setClicks(newClick);
    setAll(allClicks.concat("L"));
  };

  const handleRightClick = () => {
    const newClick = { ...clicks, right: clicks.right + 1 };
    setClicks(newClick);
    setAll(allClicks.concat("R"));
  };

  return (
    <>
      <p>
        Left: {clicks.left} | Right: {clicks.right}
        <br />
        <History allClicks={allClicks} />
      </p>
      <Button handleClick={handleLeftClick} buttonText="left" />
      <Button handleClick={handleRightClick} buttonText="right" />
    </>
  );
};

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <>Please you the buttons below.</>;
  }
  return <>Button press history: {props.allClicks.join(" ")}</>;
};
