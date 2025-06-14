import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Features = () => {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20, gap: 10 }}
      horizontal={true}
    >
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
      <View style={styles.box1}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 10,
  },
});
export default Features;
