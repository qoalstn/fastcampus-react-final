import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import { Card, Dropdown, TapBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../store/tapBarSlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const selectedTap = useSelector((state) => {
    return state.tapbar.selected;
  });
  const [cardInfo, setCardInfo] = useState([]);

  // const getSelectedTap = () => {
  //   return dispatch(select("my"));
  // };

  useEffect(() => {
    const sidoName = "서울";
    const stationName = "종로구";
    const dataTerm = "month";
    const pageNo = "1";
    const numOfRows = "10";
    const returnType = "json";
    const serviceKey = process.env.REACT_APP_API_KEY;
    const ver = "1.0";

    fetch(
      `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&&pageNo=${pageNo}&sidoName=${sidoName}&ver=${ver}`
    )
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.log("contentType : ", contentType);
        }
        return response.json();
      })
      .then((data) => {
        setCardInfo(data.response.body.items);
      });
  }, []);

  return (
    <div className="card-container">
      {/* {console.log("carinfo ~~~~", cardInfo)} */}
      <Dropdown />
      {/* <div className="card-area"> */}
      {cardInfo &&
        cardInfo.map((card, index) => <Card key={index} cardData={card} />)}
      {/* </div> */}
    </div>
  );
};

export default CardContainer;
