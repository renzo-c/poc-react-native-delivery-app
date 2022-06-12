import React from "react";
import { View, Text } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SafeArea from "../components/SafeArea";

const Home = () => {
  return (
    <SafeArea>
      <HeaderTabs />
    </SafeArea>
  );
};

export default Home;
