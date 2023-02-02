import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface ItemReduxProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

interface CartState {
  products: ItemReduxProps[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct: (state, action: PayloadAction<ItemReduxProps>) => {
      if (state.products.find((obj) => obj.id === action.payload.id)) {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: (product.quantity || 0) + 1 };
          } else {
            return product;
          }
        });
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => {
        return p.id != action.payload.id;
      });
    },

    decrementProduct: (state, action: PayloadAction<ItemReduxProps>) => {
      if (state.products.find((obj) => obj.id === action.payload.id)) { 
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            if (product.quantity === 1) {
              return product;
            } else {
              return { ...product, quantity: product.quantity - 1 }; //altara o item
            } 
          }
        });
      }
    },
  },
});

export const { addProduct, removeProduct, decrementProduct } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.carts;

export default cartSlice.reducer;
