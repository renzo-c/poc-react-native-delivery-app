import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    id: "123123",
    name: "Kiribati Restaurants",
    image_url:
      "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.1,
  },
  {
    id: "657567",
    name: "Chicken Grill",
    image_url:
      "https://images.pexels.com/photos/4552046/pexels-photo-4552046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 700,
    rating: 4.2,
  },
];

export default function RestaurantItem({restaurantsData}) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantsData.map((restaurant) => (
        <View
          key={restaurant.id}
          style={{ marginTop: 10, padding: 15, borderStartColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <>
      <View>
        <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
      </View>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
