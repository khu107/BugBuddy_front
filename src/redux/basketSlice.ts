// modalSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface BasketState {
  basketOpen: boolean;
}

const initialState: BasketState = {
  basketOpen: false,
};

const modalSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketOpen(state) {
      state.basketOpen = true;
    },
    basketClose(state) {
      state.basketOpen = false;
    },
  },
});

export const { basketOpen, basketClose } = modalSlice.actions;

export default modalSlice.reducer;
