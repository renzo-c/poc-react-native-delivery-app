import { Image, View, Text } from "react-native";
import React from "react";

const image =
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai • Comfort Food • $$ •(2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => {
  return (
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
  );
};

const RestaurantTitle = ({ title }) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {title}
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
