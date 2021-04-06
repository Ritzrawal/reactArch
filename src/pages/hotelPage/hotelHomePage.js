import React, { useState,useEffect } from "react";
import HeaderPage from "../headePage/headerPage";
import "../homePage/homeStyles.css";
import { ButtonGroup, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import {hotelSearchAction} from '../../store/action/hotelAction'
import {HeaderButtonComponent} from '../../component/common/button'
import SearchHotelComponent from '../../component/searchHotelComponent'
import LowerHomepage from "../homePage/lowerHomepage";
import { connect } from "react-redux";
const HotelHomePage = () => {
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
        <LowerHomepage title='Recomanded Hotels'lowertitle="Most Popular Hotels"/>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps=(state)=>({
  data:state.hotelReducer.search,
})

export default connect(mapStateToProps,{hotelSearchAction}) (HotelHomePage);
