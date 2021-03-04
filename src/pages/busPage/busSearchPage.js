import React,{useState} from 'react'
import {AirSearchCompnent} from '../../component'
import FilterPage from "../airlinesPage/filterPage";
import DetailAirplane from "../airlinesPage/detailsAirplane";
import Data from '../../utils/searchData'
// import './airlinesStyling.css'
import HeaderPage from '../headePage/headerPage'
const BusSeaarchPage=()=>{
    const [show, setShow] = useState(false);

  const onDisplay = () => {
    setShow(!show);
  };
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
                  <AirSearchCompnent
                   image={items.bus} title={items.busname} details="Bus Details"
                    onDisplay={onDisplay}
                    show={show}
                  />
                  {show && <DetailAirplane />}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
        // <div className="AirlinesMainContainer">
        //     <HeaderPage/>
        //     {Data.map((items,index)=>{
        //         return(
        //             <div className="FlightCardMapContainer">
        //             <div className="FlightInnerContainer">
        //             < AirSearchCompnent image={items.bus} title={items.busname} details="Bus Details"/>
        //             </div>
        //             </div>
        //         )
        //     })}
          
        // </div>
    )
}
export default BusSeaarchPage