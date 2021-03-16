import React,{useState} from 'react'
import {AirSearchCompnent} from '../../component'
import TravelSearchPage from './travelSearchPage'
import FilterPage from "../airlinesPage/filterPage";
import DetailAirplane from "../airlinesPage/detailsAirplane";
import Data from '../../utils/searchData'
// import './airlinesStyling.css'
import HeaderPage from '../headePage/headerPage'
const BusSeaarchListPage=()=>{
    const [show, setShow] = useState(false);

    return(
        <div className="AirlinesMainContainer">
        <HeaderPage />
        <div className="SearchandFilter">
          <div className="SideFliterSearch">
            <FilterPage />
          </div>
          <div className="SearchCardCustomize">
          {Data.map((items, index) => {
            return (
              <div className="FlightCardMapContainer">
                <div className="FlightInnerContainer">
                  <TravelSearchPage
                   image={items.travel} name={items.travelitle} image1={items.travelsmall1}image2={items.travelsmall2}image3={items.travelsmall3}details="Travel  Details"
                   
                  />
                  
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    )
}
export default BusSeaarchListPage