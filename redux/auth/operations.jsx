import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";


export const register = createAsyncThunk(
  "auth/register",
  async ({ userName, email, password, avatar }, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // const user = auth.currentUser;
      // if (user !== null) {
      //   const displayName = user.displayName;
      //   const email = user.email;
      //   const photoURL = user.photoURL;
      //   const uid = user.uid;      }

      // let avatar = null;
      // if (avatarPhoto) {
      //   const response = await fetch(avatarPhoto);
      //   const file = await response.blob();
      //   // console.log(file);
      //   const uploadAvatar = await uploadBytes(ref(storage, nanoid()), file);
      //   avatar = await getDownloadURL(uploadAvatar.ref);
      //   // return avatar;
      // }

      // console.log(avatar);

      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: avatar,
      });
      return {
        id: res.user.uid,
        email,
        userName: res.user.displayName,
        avatar: res.user.photoURL,
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
      avatar: res.user.photoURL,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return {
      id: null,
      email: null,
      userName: null,
      avatar: null,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});