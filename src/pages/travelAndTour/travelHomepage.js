import React, { useState } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import{HeaderButtonComponent} from '../../component/common/button'
import { useHistory } from "react-router-dom";
import SearchBusComponent from "../../component/searchBusComponent";

import LowerHomepage from "../homePage/lowerHomepage";
const TravelTourPage = () => {
  let history = useHistory();
  const onClickSearch = () => {
    history.push("/travel/search");
  };
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
            <HeaderButtonComponent id={3}/>
          </div>
          <div className="SeachContainerComponent">
            <SearchBusComponent  onSearchDetails={onClickSearch}/>
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
export default TravelTourPage;
