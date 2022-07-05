import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch } from "react-redux";

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

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, restaurantName, checkboxValue },
    });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: "lightgray",
                borderRadius: 0,
              }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
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
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: food.image }}
        style={{
          width: undefined,
          height: undefined,
          flex: 1,
          borderRadius: 8,
        }}
      />
    </View>
  );
};
