import React from "react";
import { View, Text, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from "../components/RestaurantItem";
import SafeArea from "../components/SafeArea";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeArea>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
