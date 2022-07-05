import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";

export default function getStore() {
  const store = configureStore({
    reducer: {
      cartReducer,
    },
  });
  return store;
}
