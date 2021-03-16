import React, { useState } from "react";
import { AirSearchCompnent,FiterTopComponent } from "../../component";
import FilterPage from "./filterPage";
import Data from "../../utils/searchData";
import "./airlinesStyling.css";
import HeaderPage from "../headePage/headerPage";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faAngleDown,faDollarSign,faPlaneDeparture,faStar,faClock} from '@fortawesome/free-solid-svg-icons'
import DetailAirplane from "./detailsAirplane";
const AirlineSeaarchPage = () => {
  const [show, setShow] = useState(false);

  const onDisplay = () => {
    setShow(!show);
  };
  return (
    <div className="AirlinesMainContainer">
      <HeaderPage />
      <div className="SearchandFilter">
        <div className="SideFliterSearch">
          <FilterPage />
        </div>
        <div className="SearchCardCustomize">
          
            <div className="CheapestFilterContainer">
            {/* <FiterTopComponent/> */}
                <div className="FlightInnerLogoAndCustomize">
                    <div className="LogoOFilter">
                        <FontAwesomeIcon size='2x'  className="FilterLogoCustomize" icon={faDollarSign}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Cheapest</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon size='2x'  className="FilterLogoCustomize" icon={faPlaneDeparture}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Fastest</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon size='2x'  className="FilterLogoCustomize" icon={faStar}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Best Experience</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon size='2x'  className="FilterLogoCustomize" icon={faClock}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Earliest Departure</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
            </div>
        {Data.map((items, index) => {
          return (
            <div className="FlightCardMapContainer">
              <div className="FlightInnerContainer">
                <AirSearchCompnent
                  show={show}
                  image={items.air}
                  title={items.airname}
                  onDisplay={onDisplay}
                />
                {show && <DetailAirplane />}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};
export default AirlineSeaarchPage;
