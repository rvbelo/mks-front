import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/product/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      carts: cartReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
