import React, { useEffect, useState } from "react";
import "./Card.css";
import Bookmark from "../Bookmark/Bookmark";
import CardStyle from "./CardStyle";
import ConditionStyle from "./ConditionStyle";
import { useSelector } from "react-redux";

const Card = ({ cardData }) => {
  const { stationName, pm10Value, pm10Grade, dataTime, sidoName } = cardData;
  const [condition, setCondition] = useState('')
  const [bgc, setBgc] = useState('')
  const currentTap = useSelector((state)=>state.tapbar.selected)

  useEffect(()=>{
    switch (pm10Grade) {
      case "1":
        setBgc('#4e7ee0')
        setCondition("좋음")
        break;
      case "2":
        setBgc('#75b661')
        setCondition("보통")
        break;
      case "3":
        setBgc('yellow')
        setCondition("한떄나쁨")
        break;
      case "4":
        setBgc('orange')
        setCondition("나쁨")
        break;
      case "5":
        setBgc('red')
        setCondition("매우나쁨")
        break;
      default:
        setBgc('gray')
        setCondition("알수없음")
        break;
    }
  },[pm10Grade])

  return (
    <CardStyle backgroundcolor={bgc}>
      <div className="card-top">
        <div className="selected-location">
          <span className="location-large">{sidoName}</span>
          <span className="location-small">{stationName}</span>
        </div>
        {
          currentTap == "my" ? '' :<Bookmark className="bookmark-img" cardData={cardData}/>
        }
      </div>
      <div className="contition-view">
        <ConditionStyle fontcolor={bgc}><span>{condition}</span></ConditionStyle>
        <div className="figure">미세먼지 수치 : {pm10Value} </div>
        <div className="reference-date">({dataTime}) 기준</div>
      </div>
      </CardStyle>
  );
};

export default Card;
