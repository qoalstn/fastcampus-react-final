import React from "react";
import "./TapBar.css";

const TapBar = () => {
  const myLocationImg = process.env.PUBLIC_URL + "img/my_location.png";
  const mapImg = process.env.PUBLIC_URL + "img/all_location.png";
  const bookmarksImg = process.env.PUBLIC_URL + "img/filled_star.png";
  return (
    <div className="tapbar-box">
      <button className="tapbar-btn">
        <img src={myLocationImg} />
        <div className="tapbar-text">나의 지역보기</div>
      </button>
      <button className="tapbar-btn">
        <img src={mapImg} alt="전체시도" />
        <div className="tapbar-text">전체 시도보기</div>
      </button>
      <button className="tapbar-btn">
        <img src={bookmarksImg} alt="즐겨찾기" />
        <div className="tapbar-text">즐겨찾기</div>
      </button>
    </div>
  );
};

export default TapBar;
