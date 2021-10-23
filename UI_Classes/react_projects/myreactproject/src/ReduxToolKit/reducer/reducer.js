import { createSlice } from "@reduxjs/toolkit";

const intialCounterData = { counter: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: intialCounterData,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const intialAuthData = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthData,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
