import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    video:videosSlice
  },
});

export default store;
