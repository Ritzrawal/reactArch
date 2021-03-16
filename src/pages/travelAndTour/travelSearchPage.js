import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";
import {useHistory} from 'react-router-dom'
import { Card, Button } from "reactstrap";
import "./travelTour.css";
const TravelSearchPage = ({ name,image ,image1,image2,image3, switchActive, onClick }) => {
  let history = useHistory();

  const onBooking = () => {
    history.push("/booking");
  };
  const onShowDetails = () => {
    onClick();
  };
  return (
    <Card className="CardStylingHotel">
      <div className="MainCardContainer">
        <div className="TravelImageContainer">
          <div className="TravelUpperContainerImage">
            <img className="ImageStyle" src={image} alt="" />
          </div>
          <div className="TravelLowerImageContainer">
            <div className="SmallImage">
              <img className="ImageStyle" src={image1} alt="" />
            </div>
            <div className="SmallImage">
              <img className="ImageStyle" src={image2} alt="" />
            </div>
            <div className="SmallImage">
              <img className="ImageStyle" src={image3} alt="" />
            </div>
          </div>
        </div>
        <div className="TravelContainDetails">
          <div className="TravelHeaderHotels">
            <div className="TravelHeaderTextContainer">
              <div className="HeaderText">
                <text>{name}</text>
              </div>
              <div className="RatingDispaly">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="PriceChange">
                <text className="TextPrice">Price down</text>
              </div>
            </div>
          </div>
          <div className="TravelInnerCardContainer">
            <div className="HeaderTravelViewFacility">
               
            <FontAwesomeIcon icon={faStar} color="#F09D20"/>
            <FontAwesomeIcon icon={faStar} color="#F09D20"/>
            <FontAwesomeIcon icon={faStar} color="#F09D20"/>
              <div className="AllInclusiveFaclity">All Inclusive </div>
              <div> | Garden Views</div>
            </div>
            <div className="DestinationTo">Kathmandu to Pokhara</div>
            <div className="DestinationToDate">
              Dec 3,2021
              <span>(7 days)</span>
            </div>
            <div className="PriceTravelDisplay"></div>
          </div>
        </div>
        <div className="PricetagContainer">
            <div className="PriceTageInnerContainer">
            <div className="PreviousPrice">Was $123
                <span className="SavePrice">save $43</span>
            </div>
            <div className="TotalPriceDisplay">$1205</div>
            <div className="TotalPricePersion">Per persion including all taxes and feed</div>
            <div className="TravelShowMoreContainer">
        <Button className="ShowmoreButton" onClick={onBooking}>
          Continue
          <FontAwesomeIcon className="IconCustomize" icon={faAngleRight} />
        </Button>
      </div>
            </div>
          
        </div>
      </div>
      
    </Card>
  );
};

export default TravelSearchPage;
TravelSearchPage.defaultProps = {
  name: "Card Component",
  image:
    "https://ak-d.tripcdn.com/images/22010s000000i4uumB44D_R_600_400_R5_D.jpg",
};
TravelSearchPage.PropType = {
  name: PropType.string.isRequired,
};
