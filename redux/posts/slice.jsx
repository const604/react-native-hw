import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts, updatePosts } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(getPosts.pending, handlePending)
      .addCase(getPosts.rejected, handleRejected)

      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts.push(action.payload);
      })
      .addCase(createPost.pending, handlePending)
      .addCase(createPost.rejected, handleRejected)

      .addCase(updatePosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        state.posts.splice(index, 1);
      })
      .addCase(updatePosts.pending, handlePending)
      .addCase(updatePosts.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.posts = [];
        state.error = null;
        state.isLoading = false;
      }),
});

export const postsReducer = postsSlice.reducer;
