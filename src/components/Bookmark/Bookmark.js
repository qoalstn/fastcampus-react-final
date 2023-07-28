import React from "react";
import "./Bookmark.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/bookmarkSlice";

const Bookmark = () => {
  const dispatch = useDispatch();
  const isMarked = useSelector((state) => {
    return state.bookmark.isMarked;
  });

  const filledStar = process.env.PUBLIC_URL + "/img/filled_star.png";
  const emptyStar = process.env.PUBLIC_URL + "/img/empty_star.png";

  const toggleBookmark = () => dispatch(toggle(isMarked));

  return (
    <div className="bookmark-box">
      <div className="bookmark-inner-box" onClick={toggleBookmark}>
        <img src={isMarked ? emptyStar : filledStar} alt="빈별" />
      </div>
    </div>
  );
};

export default Bookmark;
