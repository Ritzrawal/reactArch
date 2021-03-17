import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import {HeaderButtonComponent} from '../../component/common/button'
import SearchBusComponent from "../../component/searchBusComponent";

import LowerHomepage from "../homePage/lowerHomepage";
const BusHomePage = () => {
  let history = useHistory();

  const onClickHotel = () => {
    history.push("/hotel");
  };
  const onClickBus = () => {
    history.push("/bus");
  };
  const onClickFlight = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = 'black'
    history.push("/flight");
  };
  const onSearchBus = () => {
    history.push("/bus/search");
  };
  const onClickTravel=()=>{
    history.push("/travel");

  }
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
          <HeaderButtonComponent id={2}/>

          </div>
          <div className="SeachContainerComponent">
            <SearchBusComponent onSearchDetails={onSearchBus}/>
          </div>
        </div>
        </div>
        <div className="LowerHomepage">
        <LowerHomepage  title='Recomanded Bus' lowertitle="Most Popular Bus"/>
        </div>
      </div>
    </div>
  );
};
export default BusHomePage;
