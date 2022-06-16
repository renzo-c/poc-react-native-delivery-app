import React from "react";
import { View, Text } from "react-native";
import Categories from "../components/Categories";
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
      <Categories />
    </SafeArea>
  );
};

export default Home;
