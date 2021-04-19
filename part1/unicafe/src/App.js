import React, { useState } from "react";

const Button = ({ handleClick, buttonText }) => (
  <button onClick={handleClick}> {buttonText} </button>
);

const Statistics = ({ good, neutral, bad }) => {
  const allCount = good + neutral + bad;

  if (allCount === 0) {
    return (
      <>
        <h1>statistics</h1>
        <br />
        No feedback given
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allCount}</p>
      <p>average {(good + bad * -1) / allCount}</p>
      <p>average {good / allCount} %</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} buttonText="good" />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        buttonText="neutral"
      />
      <Button handleClick={() => setBad(bad + 1)} buttonText="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
