import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts, updateComments, updateLikes } from "./operations";

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

      .addCase(updateComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const post = state.posts.find(
          (post) => post.postId === action.payload.postId
        );
        post.comments.push(action.payload);
      })
      .addCase(updateComments.pending, handlePending)
      .addCase(updateComments.rejected, handleRejected)

      .addCase(updateLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const post = state.posts.find(
          (post) => post.postId === action.payload.postId
        );
        post.likes.push(action.payload);
      })
      .addCase(updateLikes.pending, handlePending)
      .addCase(updateLikes.rejected, handleRejected),
});

export const postsReducer = postsSlice.reducer;
