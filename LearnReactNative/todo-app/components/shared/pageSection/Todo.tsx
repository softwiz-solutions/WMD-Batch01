import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Todo = () => {
  const [input, setInput] = useState("");
  console.log("user input:", input);
  return (
    <View>
      <Text>Todo</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        value={input}
        onChangeText={(e) => setInput(e)}
        placeholder="Add a new todo"
      />
    </View>
  );
};

export default Todo;
