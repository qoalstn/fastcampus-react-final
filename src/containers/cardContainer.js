import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import getDustyInfoItems from "../common/dustyApi"

const CardContainer = () => {
  const dispatch = useDispatch();
  const selectedTap = useSelector((state) => state.tapbar.selected);
  const {mySido, myStation} = useSelector((state)=>state.bookmark.myLocation)
  const markedList = useSelector((state)=> state.bookmark.markedList)

  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    async function getItems(){
      const items= await getDustyInfoItems()
      setCardInfo(items)
    }
    getItems()
  }, [cardInfo,selectedTap]);

  const renderCard =()=>{
    if(markedList.length > 0 && selectedTap == "marked"){
      return markedList.map((card, index) => {
        return <Card key={index} cardData={card} />
      })
    }
    if(selectedTap =="my"){
      const item = cardInfo.filter((i)=>i.stationName == myStation)
      return item.map((card, index) => <Card key={index} cardData={card} />)
    }
    if(selectedTap == "all"){
      return cardInfo.map((card, index) => <Card key={index} cardData={card} />)
    }
  }

  return (
    <div className="card-container">
      {renderCard()}
    </div>
  );
};

export default CardContainer;
