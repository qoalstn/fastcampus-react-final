import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markedList: [],
  myStation:"종로구"
};
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    pushList: (state, action) => {
      state.markedList.push(action.payload)
    },
    popList:(state, action) => {
      state.markedList = state.markedList.filter((i)=>i !== action.payload)
    },
    changeMyStation : (state, action) => {
      state.myStation = action.payload
    },
  },
});

export default bookmarkSlice;
export const { pushList, popList, changeMyStation } = bookmarkSlice.actions;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isMarked: false,
// };
// const bookmarkSlice = createSlice({
//   name: "bookmark",
//   initialState,
//   reducers: {
//     toggle: (state, action) => {
//       state.isMarked = !action.payload;
//     },
//   },
// });

// export default bookmarkSlice;
// export const { toggle } = bookmarkSlice.actions;
