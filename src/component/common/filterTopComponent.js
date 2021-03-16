import React, { useState } from "react";
import './button.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faAngleDown,faDollarSign,faPlaneDeparture,faStar,faClock} from '@fortawesome/free-solid-svg-icons'
const FiterTopComponent =()=>{
    return(
        <div  className="FlightCustomizeButtons">
               <div className="FlightInnerLogoAndCustomize">
                    <div className="LogoOFilter">
                        <FontAwesomeIcon   className="FilterLogoCustomize" icon={faDollarSign}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Cheapest</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon  className="FilterLogoCustomize" icon={faPlaneDeparture}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Fastest</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon   className="FilterLogoCustomize" icon={faStar}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Best Experience</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
                <div className="FlightInnerLogoAndCustomize">
                <div className="LogoOFilter">
                        <FontAwesomeIcon   className="FilterLogoCustomize" icon={faClock}/>
                    </div>
                    <div className="PriceAndTag">
                        <div className="FilterTagCustomize">Earliest Departure</div>
                        <div className="FilterPriceCustomize">$123</div>

                    </div>
                </div>
            </div>
        
    )
}
export default FiterTopComponent