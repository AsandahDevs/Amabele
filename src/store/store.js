import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cart";

  const store = configureStore({
  reducer: {
   cart:cartSlice
  },
});

export default store