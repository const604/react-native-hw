import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const { userName, email, password } = user;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: userName });
      return {
        id: res.user.uid,
        email,
        userName: res.user.displayName,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const { email, password } = user;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return {
      id: res.user.uid,
      email,
      userName: res.user.displayName,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
   await signOut(auth);
    // return {
    //   id: null,
    //   email: null,
    //   userName: null,
    // };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
