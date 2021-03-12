import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import SearchHotelComponent from '../../component/searchHotelComponent'
import LowerHomepage from "../homePage/lowerHomepage";
const HomePage = () => {
  let history = useHistory();

  const onClickHotel = () => {
    history.push("/hotel");
  };
  const onClickBus = () => {
    history.push("/bus");
  };
  const onClickFlight = () => {
    history.push("/flight");
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
