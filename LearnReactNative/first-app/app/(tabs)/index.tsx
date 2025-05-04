import Counter from "@/components/Counter";
import FixedDimensionsBasics from "@/components/ElementAlignment";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <Text style={styles.heading}>Hello</Text>
      {/* <Counter title="Hello Card"/> */}
      <FixedDimensionsBasics/>
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
