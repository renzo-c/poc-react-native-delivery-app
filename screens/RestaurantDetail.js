import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import SafeArea from "../components/home/SafeArea";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

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

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeArea>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </SafeArea>
  );
}
