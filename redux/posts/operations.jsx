import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), post);
      // console.log("Document written with ID: ", docRef.id);
      return { postId: docRef.id, ...post };
    } catch (e) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      // Перевіряємо у консолі отримані дані
      const posts = [];
      snapshot.forEach((post) =>
        posts.push({ postId: post.id, ...post.data() })
      );
      // Повертаємо масив обʼєктів у довільній формі
      // snapshot.map((post) => ({ id: post.id, data: post.data() }));
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateComments = createAsyncThunk(
  "posts/updateComments",
  async (comment, thunkAPI) => {
    try {
      const { postId, userId, text, commentDate } = comment;
      await updateDoc(doc(db, "posts", postId), {
        comments: arrayUnion(comment),
      });
      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateLikes = createAsyncThunk(
  "posts/updateLikes",
  async ({ postId, userId }, thunkAPI) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        likes: arrayUnion(userId),
      });
      return { postId, userId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
