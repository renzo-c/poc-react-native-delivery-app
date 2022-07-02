import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image: "https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.20",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image: "https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.20",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image: "https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.20",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato, and sauce bechamel",
    price: "$13.50",
    image: "https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$19.20",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
  },
];

const styles = StyleSheet.create({
  menuItemsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const FoodImage = ({ food }) => {
  return (
    <View>
      <Image
        source={{ uri: food.image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );
};
