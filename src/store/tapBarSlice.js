import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "my",
};
const tapBarSlice = createSlice({
  name: "tapbar",
  initialState,
  reducers: {
    select: (state, action) => {
      console.log("action.payload ::::::", action.payload);
      if (
        action.payload !== "my" &&
        action.payload !== "all" &&
        action.payload !== "marked"
      ) {
        console.log("tapbar type error");
      }
      state.selected = action.payload;
    },
  },
});

export default tapBarSlice;
export const { select } = tapBarSlice.actions;
