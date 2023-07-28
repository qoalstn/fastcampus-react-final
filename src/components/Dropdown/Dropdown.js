import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(""); // 현재 선택된 옵션 상태 관리

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); // 선택된 옵션 업데이트
  };

  return (
    <div className="dropdown-box">
      <p>지역을 선택해보세요</p>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- 선택하세요 --</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
