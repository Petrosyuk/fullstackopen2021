import React from "react";
import { Header, Content, Total } from "./Components";
import { Counter, MultiDirectionalCounter } from "./StatefulComponents";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts} />
      <Counter />
      <MultiDirectionalCounter />
    </div>
  );
};

export default App;
