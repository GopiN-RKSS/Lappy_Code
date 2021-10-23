import { configureStore } from "@reduxjs/toolkit";
import { authSlice, counterSlice } from "../reducer/reducer";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
