import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    clearCart: (state, action) => {
      state.item.length = 0;
    },
    removeItem: (state, action) => {
      const itemToDelete = action.payload;
      const indexToRemove = state.item.findIndex((item) => {
        return item.card.info.id === itemToDelete.card?.info?.id;
      });
    
      if (indexToRemove !== -1) {
        state.item.splice(indexToRemove, 1);
      }
    },
    
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
