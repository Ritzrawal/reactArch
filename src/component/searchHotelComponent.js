import React,{useState} from "react";
import {
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  Input,Toast,
  ToastBody,
  ToastHeader,
  Label,
  Button,
} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle,faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import "./componentstyle.css";
import { useHistory } from "react-router-dom";
import {hotelSearchAction} from '.././store/action/hotelAction'
import Calender from "./hotel/calender";
import {connect} from 'react-redux'
import InputCheckBox from "./common/checkbox";
const SearchHotelComponent = (props) => {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);
  const [adult, setAdultCounter] = useState(1);
  const [child, setChildCounter] = useState(1);
  const [form, setForm] = useState({
    location:"",
  });



  let history = useHistory();

  const toggle = () => setShow(!show);

  const onClickSearch = () => {
    props.hotelSearchAction(form.location)
    if(form.location.trim()!==0){
      history.push("/hotel/search");
    }
   
  };
  const roomCounterAdd=()=>{
    {counter<=9 && setCounter(counter+1)}
    
  }
  const roomCounter=()=>{
    {counter>=1 && setCounter(counter-1)}
    
  }
  const adultCounterAdd=()=>{
    {adult<=9 && setAdultCounter(adult+1)}
    
  }
  const adultCounter=()=>{
    {adult>=1 && setAdultCounter(adult-1)}
    
  }
  const childCounterAdd=()=>{
    console.log("hello add")
    {child<=9 && setChildCounter(child+1)}
    
  }
  const childCounter=()=>{
    console.log("hello child")
    {child>=1 && setChildCounter(child-1)}
    
  }
  const onSubmit = (e) => {
		console.log('hekllo data ', e.target.value)
		e.preventDefault()
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}
  return (
    <Card className="CardComponent">
      <div className="OuterTextContainer">
        <text>Where do your want to stay?</text>
      </div>
      <Form className="FormCustomize">
        <Row form>
          <FormGroup className="InputOuterStyleDest">
            <Input
              className="InputCustomize"
              type="text"
              name="location"
              placeholder="Destination"
              onChange={onSubmit}
            />
          </FormGroup>
            <div className="CalenderCustomizeHotel">
          <Calender />
          </div>
          <FormGroup className="InputOuterStyleGuest">
            <Input
            onClick={toggle}
              className="InputCustomize"
              type="text"
              name="text"
              value={adult}
              placeholder="Guests & Rooms"
            />
          <Toast isOpen={show}>
        <ToastBody>
          <div className="RoomsCounterCustomize">
            <div className="RoomsCustomize">Rooms</div>
            <div className="RoomsLogoCounter" >
            <FontAwesomeIcon className="CustomizAwesomeIcon" onClick={roomCounter} size="lg" icon={faMinusCircle}/>
            <span className="CouterNumerStyling">{counter}</span>
            <FontAwesomeIcon className="CustomizAwesomeIcon" size="lg" icon={faPlusCircle} onClick={roomCounterAdd} />
            </div>
            
          </div>
          <div className="RoomsCounterCustomizeAdults">
            <div className="RoomsCustomize">Adults</div>
                  <div className="RoomsLogoCounter">
            <FontAwesomeIcon className="CustomizAwesomeIcon" size="lg" icon={faMinusCircle} onClick={adultCounter}/>
            <span className="CouterNumerStyling">{adult}</span>
            <FontAwesomeIcon className="CustomizAwesomeIcon" onClick={adultCounterAdd} size="lg" icon={faPlusCircle}/>
            </div>
            
          </div>
          <div className="RoomsCounterCustomizeAdults" >
            <div className="RoomsCustomize">Children</div>
            <div className="RoomsLogoCounter">
            <FontAwesomeIcon className="CustomizAwesomeIcon" size="lg" onClick={childCounter} icon={faMinusCircle}/>
            <span className="CouterNumerStyling">{child}</span>
            <FontAwesomeIcon className="CustomizAwesomeIcon" size="lg" icon={faPlusCircle} onClick={childCounterAdd} />
            </div>
            
          </div>
        </ToastBody>
      </Toast>
          </FormGroup>
        </Row>
        <div className="LowerFlightButton">
          <InputCheckBox title="Free Cancellation" />
          <div className="PassengerButtonHotel">
            <Button className="ButtonSearch" onClick={onClickSearch}>
              Search
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default  connect(null,{hotelSearchAction})(SearchHotelComponent);
