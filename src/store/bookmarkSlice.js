import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMarked: false,
};
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isMarked = !action.payload;
    },
  },
});

export default bookmarkSlice;
export const { toggle } = bookmarkSlice.actions;
