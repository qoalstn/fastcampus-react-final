import React from "react";
import "./Card.css";
import Bookmark from "../Bookmark/Bookmark";

const Card = ({ cardData }) => {
  const { stationName, pm10Value, pm10Grade, dataTime, sidoName } = cardData;

  const grade = () => {
    switch (pm10Grade) {
      case "1":
        return "좋음";
      case "2":
        return "보통";
      case "3":
        return "한떄나쁨";
      case "4":
        return "나쁨";
      case "5":
        return "매우나쁨";
      default:
        return "알수없음";
    }
  };

  return (
    <div className="card-box">
      <div className="card-top">
        <div className="selected-location">
          <span className="location-large">{sidoName}</span>
          <span className="location-small">{stationName}</span>
        </div>
        <Bookmark className="bookmark-img" />
      </div>
      <div className="contition-view">
        <div className="condition">{grade()}</div>
        <div className="figure">미세먼지 수치 : {pm10Value} </div>
        <div className="reference-date">({dataTime}) 기준</div>
      </div>
    </div>
  );
};

export default Card;
