import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import { Card, Dropdown, TapBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import getDustyInfoItems from "../common/dustyApi"

const CardContainer = () => {
  const dispatch = useDispatch();
  const selectedTap = useSelector((state) => state.tapbar.selected);
  const {mySido, myStation} = useSelector((state)=>state.bookmark.myLocation)
  const markedList = useSelector((state)=> state.bookmark.markedList)

  const [cardInfo, setCardInfo] = useState([]);
  const sidoList = ["서울", "부산", "용인"];
  const stationList = ["은평구", "서대문구", "사하구", "기흥구"];

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
      {selectedTap == "my" ? (
        <div>
          <Dropdown sidoList={sidoList} />
          <Dropdown stationList={stationList} />
        </div>
      ) : (
        <Dropdown sidoList={sidoList} />
      )}
      {renderCard()}
      {/* {cardInfo.length > 0 &&
        cardInfo.map((card, index) => <Card key={index} cardData={card} />)} */}
    </div>
  );
};

export default CardContainer;
