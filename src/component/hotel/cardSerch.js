import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faAngleDown,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import PropType from "prop-types";
import{switchActive} from '../../store/action/loginAction'
import {connect} from 'react-redux'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
import "./hotelComponent.css";
const HotelCardSearch = ({ name, image,location,onClick,hoteltype,rate,id }) => {
  const [fetuteImage,setImage]=useState(image)


  const onClickImage=()=>{
    console.log("hello image")
    setImage(image)
  }
  const onShowDetails=()=>{
    console.log("Hello hotel props",id)
    onClick(id)
    
  }
  return (
    <Card className="CardStylingHotel">
      <div className="MainCardContainer">
        <div className="ImageContainer">
            <div className="UpperContainerImage">
                <img className="ImageStyle" src={fetuteImage} alt="" />
            </div>
            <div className="LowerImageContainer">
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt=""  onClick={onClickImage}/>
                </div>
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt=""  onClick={onClickImage}/>
                </div>
                <div className="SmallImage">
                <img className="ImageStyle" src={image} alt="" onClick={onClickImage}/>
                </div>
            </div>
        </div>
        <div className="ContainDetails">
          <div className="HeaderHotels">
              <div className="HeaderTextContainer">
              <div className="HeaderText">
                <text>{name}</text>
            </div>
            <div className="RatingDispaly"> 
            <FontAwesomeIcon icon={faStar}/>
            </div>
            <div className="PriceChange">
                <text className="TextPrice">Price down</text>
            </div>
              </div>
            
            <div className="RatingDisplay">
            <Badge className="RatingValue">
                <text className="RatingText">{rate}</text>
            </Badge>
            <div className="RatingType">Good</div>

            </div>
          
          </div>
          <div className="HeaderHotels">
            <div>{location}</div>
            <div></div>
          </div>
          <div className="HotelInnerCardContainer">
          <div className="RoomtypesContainer">
              <div className="RoomLeftHalf">
                  <div>{hoteltype} </div>
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
                  <Button className="ButtonCustomize" onClick={onShowDetails}>View
                  <FontAwesomeIcon className="IconCustomize" icon={faAngleRight}/>
                  </Button>
              </div>
              </div>
          </div>
          </div>
        </div>
       
      </div>
      <div className="ShowMoreContainer">
            <Button className="ShowmoreButton" onClick={onShowDetails}>Show more
            <FontAwesomeIcon  className="IconCustomize" icon={faAngleDown}/>
            </Button>

        </div>
    </Card>
  );
};

export default connect(null,{switchActive}) (HotelCardSearch);
HotelCardSearch.defaultProps = {
  name: "Card Component",
  image:
    "https://ak-d.tripcdn.com/images/22010s000000i4uumB44D_R_600_400_R5_D.jpg",
};
HotelCardSearch.PropType = {
  name: PropType.string.isRequired,
};
