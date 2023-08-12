import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refresh, refreshUser } from "./operations";

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
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user.email);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const rootReducer = authSlice.reducer;
