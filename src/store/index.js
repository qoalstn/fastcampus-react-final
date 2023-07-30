import { configureStore } from "@reduxjs/toolkit";
import tapBarSlice from "./tapBarSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
  reducer: {
    tapbar: tapBarSlice.reducer,
    location : locationSlice.reducer
  },
});

export default store;
