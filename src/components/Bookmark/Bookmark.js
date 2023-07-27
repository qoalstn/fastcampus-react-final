import React from "react";
import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/bookmarkSlice";
import empty_star from "../../assets/img/empty_star.png";
import filled_star from "../../assets/img/filled_star.png";

const Bookmark = () => {
  const dispatch = useDispatch();
  const isMarked = useSelector((state) => {
    return state.bookmark.isMarked;
  });

  const toggleBookmark = () => dispatch(toggle(isMarked));

  return (
    <div>
      <div onClick={toggleBookmark}>
        <img src={isMarked ? empty_star : filled_star} alt="빈별" />
      </div>
    </div>
  );
};

export default Bookmark;
