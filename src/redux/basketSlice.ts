// modalSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  loginModalOpen: boolean;
  // cartModalOpen: boolean;
}

const initialState: ModalState = {
  loginModalOpen: false,
  // cartModalOpen: false,
};

const modalSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    openLoginModal(state) {
      state.loginModalOpen = true;
    },
    closeLoginModal(state) {
      state.loginModalOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions;

export default modalSlice.reducer;
