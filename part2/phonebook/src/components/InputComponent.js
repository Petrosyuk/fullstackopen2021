import React from "react-dom";

export const Filter = ({ inputText, inputValueState, onChangeHandler }) => {
  return (
    <div>
      {" "}
      {inputText} <input value={inputValueState} onChange={onChangeHandler} />{" "}
    </div>
  );
};
