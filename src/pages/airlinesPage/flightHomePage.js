import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import LowerHomepage from "../homePage/lowerHomepage";
import {HeaderButtonComponent} from '../../component/common/button'
import SearchFlightComponent from '../../component/seachFight'
const FlightHomePage = () => {
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
            <HeaderButtonComponent id={1}/>
          </div>
          <div className="SeachContainerComponent">
            <SearchFlightComponent />
          </div>
        </div>
        </div>
        <div className="LowerHomepage">
        <LowerHomepage  title='Recomanded Flights' lowertitle="Most Popular Flights"/>
        </div>
      </div>
    </div>
  );
};
export default FlightHomePage;
