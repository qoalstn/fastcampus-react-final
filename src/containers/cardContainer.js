import React, { useEffect, useState } from "react";
import "./cardContainer.css";
import "../components/Spinner/Spinner.css"
import { Card, Dropdown } from "../components";
import { useDispatch, useSelector } from "react-redux";
import getDustyInfoItems from "../common/dustyApi"
import { changeMyLocation } from "../store/locationSlice"
import Spinner from "../components/Spinner/Spinner";

const CardContainer = () => {
  const dispatch = useDispatch();
  const selectedTap = useSelector((state) => state.tapbar.selected);
  const myStation = useSelector((state)=>state.location.myStation)
  const markedList = useSelector((state)=> state.location.markedList)

  const [cardInfo, setCardInfo] = useState([]);

  const sido =   ["서울", "부산", "대구", "인천", "경기"]
  const [station, setStation] = useState([])
  const [selectedSido, setSelectedSido]= useState()
  const [selectedStation, setSelectedStation] = useState()
  const [loading, setLoading] = useState(true);

  const dropdownSidoHandler = (e) => {
    setSelectedSido(e.target.value);
  };

  const dropdownStationHandler = (e) => {
    setSelectedStation(e.target.value);
    if(selectedTap =='my') {
      dispatch(changeMyLocation({myStation : e.target.value}))
    }
  };

  const renderDropdown =()=>{
        if (station.length > 0 && selectedTap == "my") {
          return <>
            <Dropdown list={sido} selected ={selectedSido} onChange={dropdownSidoHandler}/>
            <Dropdown list={station} selected ={selectedStation} onChange={dropdownStationHandler}/>
          </>
        }
        if (station.length > 0 && selectedTap == "all") {
          return <>
            <Dropdown list={sido} selected ={selectedSido} onChange={dropdownSidoHandler}/>
          </>
        }
    }

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

  useEffect(() => {
    async function getItems(){
      const selectData = {sidoName : selectedSido, stationName :selectedStation}
      const items= await getDustyInfoItems(selectData)
      setCardInfo(items)
      setStation(items.map((i)=>i.stationName))

      if(selectedTap =='my') {
        dispatch(changeMyLocation({mySido:selectedSido}))
        dispatch(changeMyLocation({myStation : items[0].stationName}))
      }

      setLoading(false);
    }
    getItems()
  }, [selectedSido,selectedStation]);

  if (loading) {
    return <Spinner />;
  }

  return (
      <>
        <div className="top-select-container">
        {renderDropdown()}
        </div>
        <div className="card-container">
          {renderCard()}
        </div>
      </>
  );
};

export default CardContainer;
