import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, borderStartColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => {
  const imageURL =
    "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg";
  return (
    <>
      <View>
        <Image
          source={{ uri: imageURL }}
          style={{ width: "100%", height: 180 }}
        />
      </View>
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse Kitchen Thai Cuisine
      </Text>
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
      <Text>4.5</Text>
    </View>
  </View>
);
