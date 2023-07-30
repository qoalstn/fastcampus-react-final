import React from 'react';
import { Dropdown } from '../components';
import { useSelector } from 'react-redux';
import './TopContainer.css'

const TopContainer = () => {
  const selectedTap = useSelector((state) => state.tapbar.selected);

  const locationList = {
    sido : ["서울", "부산", "용인"],
    station : ["은평구", "서대문구", "사하구", "기흥구"]
  }

    const renderDropdown =()=>{
          if (selectedTap == "my") {
            return <>
              <Dropdown locationList={locationList.sido} />
              <Dropdown locationList={locationList.station} />
            </>
          }
          if (selectedTap == "all") {
            return <>
              <Dropdown locationList={locationList.sido} />
            </>
          }
      }

    return (
        <div className="top-select-container">
            {renderDropdown()}
      </div>
    );
};

export default TopContainer;