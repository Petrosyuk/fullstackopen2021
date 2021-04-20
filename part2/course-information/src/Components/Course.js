import React from "react";
import { Total } from "./Total";
import { Content } from "./Content";
import { Header } from "./Header";

export const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name} />
      {props.course.parts.map((part) => (
        <Content key={part.id} parts={part} />
      ))}
      <b>
        <Total parts={props.course.parts} />
      </b>
    </div>
  );
};

export default Course;
