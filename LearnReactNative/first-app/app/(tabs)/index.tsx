import Counter from "@/components/Counter";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.heading}>Hello</Text>
      <Counter title="Hello Card"/>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "red",
    color:"white"
  },
});
