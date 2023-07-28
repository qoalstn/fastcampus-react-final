import React from "react";
import "./Card.css";
import Bookmark from "../Bookmark/Bookmark";

const Card = (props) => {
  const { cardData } = props;

  console.log("cardData ~~~~~~~", cardData);

  return (
    <div className="card-box">
      <div className="card-top">
        <div className="selected-location">
          <span className="location-large">장림동</span>
          <span className="location-small">부산</span>
        </div>
        <Bookmark className="bookmark-img" />
      </div>
      <div className="contition-view">
        <div className="condition">좋음</div>
        <span className="figure">미세먼지 수치 : 33</span>
        <span className="reference-date">2022-05-02 09:00 기준</span>
      </div>
    </div>
  );
};

export default Card;
