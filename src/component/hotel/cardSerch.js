import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faAngleDown,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import PropType from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./hotelComponent.css";
const HotelCardSearch = ({ name, image }) => {
  return (
    <Card className="CardStylingHotel">
      <div className="MainCardContainer">
        <div className="ImageContainer">
            <div className="UpperContainerImage">
                <img className="ImageStyle" src={image} alt="" />
            </div>
            <div className="LowerImageContainer">
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt="" />
                </div>
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt="" />
                </div>
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt="" />
                </div>
            </div>
        </div>
        <div className="ContainDetails">
          <div className="HeaderHotels">
              <div className="HeaderTextContainer">
              <div className="HeaderText">
                <text>Yellow Pagoda Hotel</text>
            </div>
            <div className="RatingDispaly"> 
            <FontAwesomeIcon icon={faStar}/>
            </div>
            <div className="PriceChange">
                <text className="TextPrice">Price down</text>
            </div>
              </div>
            
            <div className="RatingDisplay">
            <div className="RatingValue">
                <text className="RatingText">7.1</text>
            </div>
            <div className="RatingType">Good</div>

            </div>
          
          </div>
          <div className="HeaderHotels">
            <div>Kathmandu</div>
            <div></div>
          </div>
          <div className="HotelInnerCardContainer">
          <div className="RoomtypesContainer">
              <div className="RoomLeftHalf">
                  <div>Delux room,CIty View Tower </div>
                  <div className="FacilityStyle">Your choice Breakfast Included</div>
              </div>
              <div className="RoomRightHalf">
              <div className="PriceRoomTYpe">$91</div>
              <div className="ViewBotton">
                  <Button className="ButtonCustomize">View
                  <FontAwesomeIcon className="IconCustomize" icon={faAngleRight}/>
                  </Button>
              </div>
              </div>
          </div>
          <div className="RoomtypesContainer">
              <div className="RoomLeftHalf">
                  <div>Delux room,CIty View Tower </div>
                  <div className="FacilityStyle">Your choice Breakfast Included</div>
              </div>
              <div className="RoomRightHalf">
              <div className="PriceRoomTYpe">$91</div>
              <div className="ViewBotton">
                  <Button className="ButtonCustomize">View
                  <FontAwesomeIcon className="IconCustomize" icon={faAngleRight}/>

                  </Button>
              </div>
              </div>
          </div>
          <div className="RoomtypesContainer">
              <div className="RoomLeftHalf">
                  <div>Delux room,CIty View Tower </div>
                  <div className="FacilityStyle">Your choice Breakfast Included</div>
              </div>
              <div className="RoomRightHalf">
              <div className="PriceRoomTYpe">$91</div>
              <div className="ViewBotton">
                  <Button className="ButtonCustomize">View
                  <FontAwesomeIcon className="IconCustomize" icon={faAngleRight}/>
                  </Button>
              </div>
              </div>
          </div>
          </div>
        </div>
       
      </div>
      <div className="ShowMoreContainer">
            <Button className="ShowmoreButton">Show more
            <FontAwesomeIcon  className="IconCustomize" icon={faAngleDown}/>
            </Button>

        </div>
    </Card>
  );
};

export default HotelCardSearch;
HotelCardSearch.defaultProps = {
  name: "Card Component",
  image:
    "https://ak-d.tripcdn.com/images/22010s000000i4uumB44D_R_600_400_R5_D.jpg",
};
HotelCardSearch.PropType = {
  name: PropType.string.isRequired,
};