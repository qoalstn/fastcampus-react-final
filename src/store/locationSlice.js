import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markedList: [],
  mySido : "서울",
  myStation : "마포구"
};
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    pushList: (state, action) => {
      state.markedList.push(action.payload)
    },
    popList:(state, action) => {
      state.markedList = state.markedList.filter((i)=>i.stationName !== action.payload.stationName)
    },
    changeMyLocation : (state, action) => {
        console.log('체인지 : ', action.payload);
      if(action.payload.mySido){
        state.mySido = action.payload.mySido
      }
      if(action.payload.myStation){
        state.myStation = action.payload.myStation
      }
    },
  },
});

export default locationSlice;
export const { pushList, popList, changeMyLocation } = locationSlice.actions;

