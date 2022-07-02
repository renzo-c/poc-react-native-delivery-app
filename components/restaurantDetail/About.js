import { Image, View, Text } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  price: "$$",
  reviews: "1500",
  rating: 1.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews})`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
  );
};

const RestaurantName = ({ name }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {name}
    </Text>
  );
};

const RestaurantDescription = ({ description }) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {description}
    </Text>
  );
};
