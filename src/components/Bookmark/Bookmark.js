import React, { useState } from "react";
import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";
import { pushList, popList } from "../../store/bookmarkSlice";

const Bookmark = ({station}) => {
  const dispatch = useDispatch();
  const markedList = useSelector((state) => {
    return state.bookmark.markedList;
  });
  const [isMarked, setIsMarked] = useState()

  const filledStar = process.env.PUBLIC_URL + "/img/filled_star.png";
  const emptyStar = process.env.PUBLIC_URL + "/img/empty_star.png";

  const toggleBookmark = () => {
    if(markedList.includes(station)){
      setIsMarked(false)
      dispatch(popList(station));
    }else{
      setIsMarked(true)
      dispatch(pushList(station));
    }
  }

  return (
    <div className="bookmark-box">
      {console.log('log~~~', markedList)}
      <div className="bookmark-inner-box" onClick={toggleBookmark}>
        <img src={isMarked ? filledStar : emptyStar} alt="빈별" />
      </div>
    </div>
  );
};

export default Bookmark;
