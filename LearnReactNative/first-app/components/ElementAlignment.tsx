import React from "react";
import { Text, View } from "react-native";

const FixedDimensionsBasics = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 120 }}>Hello</Text>
      </View>
      {/* <View
        style={{
          flex: 2,
          backgroundColor: "purple",
        }}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: "blue",
        }}
      /> */}
    </View>
  );
};

export default FixedDimensionsBasics;
