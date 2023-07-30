import React, { useEffect, useState } from "react";
import "./Dropdown.css";

const Dropdown = ({locationList}) => {
  const [selectedOption, setSelectedOption] = useState("선택");
  const [list, setList] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setList(locationList)
  }, []);

  return (
    <div className="dropdown-box">
        <select value={selectedOption} onChange={handleSelectChange}>
          {list.length > 0 && (
            list.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))
          ) }
        </select>
    </div>
  );
};

export default Dropdown;
