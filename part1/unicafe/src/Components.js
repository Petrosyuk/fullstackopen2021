import React from "react";

export const Button = ({ handleClick, buttonText }) => (
  <button onClick={handleClick}> {buttonText} </button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td> {text} </td>
    <td>{value}</td>
  </tr>
);

export const Statistics = ({ good, neutral, bad }) => {
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
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="average" value={(good + bad * -1) / allCount} />
          <Statistic text="positive" value={good / allCount + " %"} />
        </tbody>
      </table>
    </>
  );
};
