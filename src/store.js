import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartMessageReducer from "./slice/cartMessageSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cartMessage: cartMessageReducer,
  },
});
