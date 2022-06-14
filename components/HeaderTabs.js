import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({ text, btnColor, activeTab, setActiveTab }) => {
  const isActive = activeTab === text;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isActive ? "black" : "white",
        },
      ]}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={[styles.textButton, { color: isActive ? "white" : "black" }]}
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
