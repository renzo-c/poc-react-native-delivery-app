import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderTabs = () => {
  return (
    <View style={styles.container}>
      <HeaderButton text="Delivery" btnColor="black" />
      <HeaderButton text="Pickup" btnColor="white" />
    </View>
  );
};

const HeaderButton = ({ text, btnColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: btnColor }]}>
      <Text
        style={[
          styles.textButton,
          { color: btnColor === "black" ? "white" : "black" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "900",
  },
});

export default HeaderTabs;
