import React from "react";
import {Bookmark,Card} from '../components'
import './cardContainer.css'

const CardContainer = () => {
  return <div className="card-container">
      <Bookmark/>
      <Card/>
  </div>;
};

export default CardContainer;
