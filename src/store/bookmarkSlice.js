import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markedList: [],
  myLocation:{
    mySido : "서울",
    myStation : "마포구"
  }
};
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    pushList: (state, action) => {
      state.markedList.push(action.payload)
    },
    popList:(state, action) => {
      state.markedList = state.markedList.filter((i)=>i.stationName !== action.payload.stationName)
    },
    changeMyStation : (state, action) => {
      state.myLocation = action.payload
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
