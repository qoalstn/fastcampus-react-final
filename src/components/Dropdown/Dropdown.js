import React, { useEffect, useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [list, setList] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (props.hasOwnProperty("sidoList")) setList(props.sidoList);
    if (props.hasOwnProperty("stationList")) setList(props.stationList);
  }, []);

  return (
    <div className="dropdown-box">
      <p>{props.sidoList ? "시도" : "구"}</p>
      <select value={selectedOption} onChange={handleSelectChange}>
        {list.length > 0 ? (
          list.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))
        ) : (
          <option value="option1">-- 선택하세요 --</option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
