import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAngleDown,
  faCoffee,
  faBan,
  faInfoCircle,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./hotelComponent.css";
import PropType from "prop-types";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const HotelTypeComponent = ({ image,onClick,hoteltype }) => {
  let history=useHistory();
const onBooking=()=>{
  history.push("/booking")
}
  return (
    <Card className="HotelTypeCard">
      <div className="LeftImageContainer">
        <img className="ImageStyling" src={image} alt="" />
      </div>
      <div className="RightContainContainer">
        <div className="TopContainDetails">
          <div className="HotelTypeTitle">{hoteltype}</div>
          <div className="FeaturesContainer">
            <div className="FeaturesItems">
              <FontAwesomeIcon className="IconFeatures" icon={faUsers} />
              Two guest Room
            </div>
          </div>
          <div className="MoreDetails">
            More details
            <FontAwesomeIcon className="IconCustomize" icon={faAngleDown} />
          </div>
        </div>
        <div className="LowerContainDetails">
          <div className="FacilityContainer">
           
              <div className="Facilities">
              
              <div className="FacilitiesCustomize">     
              <FontAwesomeIcon className="IconCustome" icon={faCoffee} />
                  Breakfast Included</div>
             <div className="FaclityOthers"> 
             <FontAwesomeIcon className="IconCustome" icon={faBan} />
             Non-Refundable included</div>
              </div>
            
            <div className="MoreDetails">Deal Details
            <FontAwesomeIcon className="IconCustomize" icon={faInfoCircle} />
            </div>
          </div>
         
          <div className="PriceConatiner">
            <div className="PriceDetails">$98</div>
            <div>
              <Button className="ButtonCustomize" onClick={onBooking}>Reserve
              <FontAwesomeIcon className="IconCustomize" icon={faAngleRight} />

              </Button>
            </div>
          </div>
        </div>
        <div className="NightlyPrice">Nightly Price</div>
      </div>
    </Card>
  );
};
export default HotelTypeComponent;
HotelTypeComponent.defaultProps = {
  name: "Card Component",
  image:
    "https://ak-d.tripcdn.com/images/22010s000000i4uumB44D_R_600_400_R5_D.jpg",
};
HotelTypeComponent.PropType = {
  name: PropType.string.isRequired,
};
