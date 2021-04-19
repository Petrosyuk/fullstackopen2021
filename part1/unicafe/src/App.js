import React, { useState } from "react";
import { Button, Statistics } from "./Components";

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
