import React, { useState } from "react";
import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";
import { pushList, popList } from "../../store/bookmarkSlice";

const Bookmark = ({cardData}) => {
  const dispatch = useDispatch();
  const markedList = useSelector((state) => {
    return state.bookmark.markedList;
  });

  const filledStar = process.env.PUBLIC_URL + "/img/filled_star.png";
  const emptyStar = process.env.PUBLIC_URL + "/img/empty_star.png";

  const toggleBookmark = () => {
    const matchDatas = markedList.filter((i)=>i.stationName == cardData.stationName)
    if(matchDatas.length > 0){
      dispatch(popList(cardData));
    }else{
      dispatch(pushList(cardData));
    }
  }

  const inMarkedList =()=>{
    return  markedList.find((i)=>i.stationName == cardData.stationName)
  }

  return (
    <div className="bookmark-box">
      <div className="bookmark-inner-box" onClick={toggleBookmark}>
        <img src={inMarkedList() ? filledStar : emptyStar} alt="빈별" />
      </div>
    </div>
  );
};

export default Bookmark;
