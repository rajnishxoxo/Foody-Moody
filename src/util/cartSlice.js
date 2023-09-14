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
        const cardToRemove = action.payload;
    
        const updatedItems = state.item.filter((item) => {
          return item.info && item.info.id !== cardToRemove.info.id;
        });
        return {
            ...state,
            item: updatedItems,
          };

      
      },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
