import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    console.log("Document written with ID: ", docRef.id);
    return { id: docRef.id, ...post };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
});

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    // Перевіряємо у консолі отримані дані
    const posts = [];
    snapshot.forEach((post) => posts.push({ id: post.id, ...post.data() }));
    // Повертаємо масив обʼєктів у довільній формі
    // snapshot.map((post) => ({ id: post.id, data: post.data() }));
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const updatePosts = createAsyncThunk(
  "posts/updatePosts",
  async (collectionName, docId) => {
    try {
      const ref = doc(db, collectionName, docId);

      await updateDoc(ref, {
        age: 25,
      });
      console.log("document updated");
    } catch (error) {
      console.log(error);
    }
  }
);
