import React from "react";

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
