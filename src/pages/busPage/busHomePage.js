import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
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
            <ButtonGroup className="ButtonGroupComponent">
              <Button
                className="ButtonClass"
                name="hotel"
                onClick={onClickHotel}
              >
                Hotel
              </Button>
              <Button
                className="ButtonClass"
                name="Flight"
                onClick={onClickFlight}
              >
                Flight
              </Button>
              <Button className="ButtonClass" onClick={onClickBus}>
                Bus
              </Button>
              <Button className="ButtonClass" onClick={onClickTravel}>
              Tours & Travels
              </Button>
            </ButtonGroup>
          </div>
          <div className="SeachContainerComponent">
            <SearchBusComponent />
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
