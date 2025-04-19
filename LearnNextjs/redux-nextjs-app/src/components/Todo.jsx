import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const counter = useSelector((state) => state.counter.value);
  return <div>{counter}</div>;
};

export default Todo;
