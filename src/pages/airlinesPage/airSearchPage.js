import React,{useState} from 'react'
import {AirSearchCompnent} from '../../component'
import Data from '../../utils/searchData'
import './airlinesStyling.css'
import HeaderPage from '../headePage/headerPage'
import DetailAirplane from './detailsAirplane'
const AirlineSeaarchPage=()=>{
    const [show,setShow]= useState(false)

    const onDisplay=()=>{
        setShow(!show)
    }
    return(
        <div className="AirlinesMainContainer">
            <HeaderPage/>
            {Data.map((items,index)=>{
                return(
                    <div className="FlightCardMapContainer">
                    <div className="FlightInnerContainer">
                    < AirSearchCompnent image={items.air} title={items.airname} onDisplay={onDisplay}/>
                    {show &&
                    <DetailAirplane/>
                }
                    </div>
                    
                   
                    </div>
                )
            })}
          
        </div>
    )
}
export default AirlineSeaarchPage