import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// The podcast chosen, so it is saved across pages. Even more efficient than a client side SPA!

const initialState = {
  podcast: {
    title: '',
    description: '',
    author: '',
    artworkURL: '',
    episodeURL: ''
  }
};

export const podcast = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    reset: () => initialState,
    select: (state, action) => {
      state.podcast = action.payload
    }
  },
});

export const {
  select,
  reset
} = podcast.actions;
export default podcast.reducer;
