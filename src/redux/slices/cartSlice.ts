import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../components/Products";

const initialState = <ProductType[]>[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      return [...state, action.payload];
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
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
