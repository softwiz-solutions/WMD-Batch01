"use client";

import {
  customIncrement,
  decrement,
  increment,
  setValue,
} from "@/lib/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "./buttons/MainButton";
import Todo from "./Todo";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("🚀 ~ Counter ~ counter:", counter);

  const handleRest = () => {
    console.log("working");
    dispatch(setValue());
  };
  const handleIncrement = () => {
    console.log("working");
    dispatch(increment());
  };
  const handleDecrement = () => {
    console.log("working");
    dispatch(decrement());
  };
  const handleCustomIncrement = () => {
    console.log("working demo");
    dispatch(customIncrement(123));
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <MainButton title="Reset" onClick={handleRest} />
      <MainButton title="Increment" onClick={handleIncrement} />
      <MainButton title="Decrement" onClick={handleDecrement} />
      <MainButton title="Custom Increment" onClick={handleCustomIncrement} />
    </div>
  );
};

export default Counter;
