import React from "react";
import { Header, Content, Total } from "./Components";
import { Counter, MultiDirectionalCounter } from "./StatefulComponents";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      {course.parts.map((part) => (
        <Content key={part.od} parts={part} />
      ))}
      {/* <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts} />  */}
    </div>
  );
};

export default App;
