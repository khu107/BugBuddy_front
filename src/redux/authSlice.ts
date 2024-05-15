// modalSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  openAuthModal: boolean;
}

const initialState: ModalState = {
  openAuthModal: false,
};

const modalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuthModal(state) {
      state.openAuthModal = true;
    },
    closeAuthModal(state) {
      state.openAuthModal = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = modalSlice.actions;

export default modalSlice.reducer;
