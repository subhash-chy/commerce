import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../components/Products";

const initialState = <ProductType[]>[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        return [...state, action.payload];
      } else {
        state[index].quantity += action.payload.quantity;
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((product) => product.id === action.payload);
      state[index].quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (state[index].quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }
      state[index].quantity -= 1;
    },

    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
