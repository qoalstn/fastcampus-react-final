import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import tapBarSlice from "./tapBarSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
    tapbar: tapBarSlice.reducer,
  },
});

export default store;
