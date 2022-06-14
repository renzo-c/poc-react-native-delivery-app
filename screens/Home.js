import React from "react";
import { View, Text } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SafeArea from "../components/SafeArea";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeArea>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeArea>
  );
};

export default Home;
