import useCounter from "@/hooks/useCounter";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Counter = ({ title }) => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <View>
      <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
      <Text style={{ color: "white", fontSize: 20 }}>{counter}</Text>
      <Button onPress={increment} title="Increemnt" />
      <Button onPress={decrement} title="Deceemnt" />
      <Button onPress={reset} title="Reset" />
    </View>
  );
};

export default Counter;
