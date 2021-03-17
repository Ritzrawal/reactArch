import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import {HeaderButtonComponent} from '../../component/common/button'
import { useHistory } from "react-router-dom";
import SearchHotelComponent from '../../component/searchHotelComponent'
import LowerHomepage from "../homePage/lowerHomepage";
const HomePage = () => {
  let history = useHistory();
  return (
    <div>
      <HeaderPage />
      <div>
        <div className="BackgrundImageContainer">
          <div className="BackGroundImage"></div>
        </div>
        <div className="SearchMainContainer">
        <div className="SearchInnerComponent">
          <div className="TopButtonContainer">
            <HeaderButtonComponent id={0}/>
          </div>
          <div className="SeachContainerComponent">
            <SearchHotelComponent />
          </div>
        </div>
        </div>
        <div className="LowerHomepage">
        <LowerHomepage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
