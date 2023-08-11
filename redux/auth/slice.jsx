import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh } from "./operations";

const initialState = {
  user: { userName: null, email: null, avatar: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        // console.log(action.payload.avatar);
        // state.avatar = action.payload.avatar;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { userName: null, email: null, avatar: null };
        state.isLoggedIn = false;
      }),
});

export const rootReducer = authSlice.reducer;
