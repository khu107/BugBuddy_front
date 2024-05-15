import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    basket: basketSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
