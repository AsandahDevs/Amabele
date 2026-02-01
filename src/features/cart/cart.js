import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id );
    },
    increaseQty: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
   },
   decreaseQty: (state,action) => {
    const item = state.find(item => item.id === action.payload.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
   }
   },
   clearCart: (_state,_action) => {
     return [];
   }
}
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;