import React from 'react'
import {Card,Button} from 'reactstrap'
import PropType from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAngleDown,
  faLongArrowAltRight,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import './airplane.css'
const  AirSearchCompnent=({image,details,title,onDisplay,show})=> {

    const onDisplayCard=()=>{
        console.log('show',show)    
        onDisplay()
    }
    return (
        <Card className="AirCardComponent">
            <div className="AirCardContainer">
                <div className="AirplaneLeftHalf">
                <div className="AirLogoContainer">
                    <img src={image} alt="" className="ImageStyling"/>
                  
                </div>
                    <div className="AirNameStyleFirst">
                        <div className="TitleText">{title}</div>
                        <div className="SubTitleText">E6-148</div>
                    </div>  
                    <div className="AirNameStyle">
                        <div className="TitleText">19:00</div>
                        <div className="SubTitleText">Mumbai</div>
                    </div>  
                    <FontAwesomeIcon className="IconArrow" size="2x" icon={faLongArrowAltRight} />
                    <div className="AirNameStyleDest">
                     <div className="TitleText">19:00</div>
                        <div className="SubTitleText">Mumbai</div>
                    </div>  
                    
                </div>
                <div className="AirRightHalf">
                <div></div>
                <div className="TotalHours">
                    <div className="TitleText">7h 10 min</div>
                    <div className="SubTitleText">1 Stop</div>
                </div>
                <div className="Pricefare">
                <div className="TotalPrice">
                     RS 5555
                </div>
                <Button  onClick={onDisplayCard} className="Viewfare">View Fares</Button>
                </div>

                </div>

            </div>
            <div className="LowerFlightDetail" onClick={onDisplayCard}>
                <div className="FlightDetils">{details}</div>
               
                <FontAwesomeIcon className="IconCustomizeMore" size="2x" icon={show ?faAngleUp:faAngleDown} />
              

            </div>
            </Card>

    )
}
export default AirSearchCompnent
AirSearchCompnent.defaultProps = {
    name: "Card Component",
    details:'Flight Details',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGsNtv9o6Tpr3vlS38Ta-T9SBZwMLwvcP4w&usqp=CAU",
  };
  AirSearchCompnent.PropType = {
    name: PropType.string.isRequired,
    details:PropType.string,
    title:PropType.string.isRequired
  };
