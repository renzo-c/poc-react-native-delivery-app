import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import SafeArea from "../components/home/SafeArea";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import firebase from "../db/firebase";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With butter lettuce, tomato, and sauce bechamel",
        price: "$13.50",
        image:
          "https://images.pexels.com/photos/4078163/pexels-photo-4078163.jpeg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeArea style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/animation.json")}
          autoPlay
          speed={1}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView style={{width: "100%"}}>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={1}
          />
        </ScrollView>
      </View>
    </SafeArea>
  );
}
