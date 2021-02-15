import React from 'react'
import {AirSearchCompnent} from '../../component'
import Data from '../../utils/searchData'
import './airlinesStyling.css'
import HeaderPage from '../headePage/headerPage'
const AirlineSeaarchPage=()=>{
    return(
        <div className="AirlinesMainContainer">
            <HeaderPage/>
            {Data.map((items,index)=>{
                return(
                    <div className="FlightCardMapContainer">
                    <div className="FlightInnerContainer">
                    < AirSearchCompnent image={items.air} title={items.airname}/>
                    </div>
                    </div>
                )
            })}
          
        </div>
    )
}
export default AirlineSeaarchPage