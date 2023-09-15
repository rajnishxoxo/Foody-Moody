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
      const updatedItems = state.item.filter((item) => {
        return item.card.info.id !== itemToDelete.card?.info?.id;
      });
      state.item = updatedItems;

      
        // const itemToDelete = action.payload;
    
        // const updatedItems = state.item.filter((item) => {
        //   return item.card.info.id !== itemToDelete.card?.info?.id;
        // });
        // return {
        //     ...state,
        //     item: updatedItems,
        //   };

      
      },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
