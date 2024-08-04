import { createSlice, current } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideos: (state, action) => {
      state.splice(0, state.length, ...action.payload);
      console.log(current(state))
      // return action.payload;
    },
  },
});

export default videoSlice.reducer;

export const { addVideos } = videoSlice.actions;
