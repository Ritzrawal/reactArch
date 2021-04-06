import React, { useState } from "react";
import {
  Card,
  Form,
  Row,
  FormGroup,
  Input,
  Label,
  Button,
  ButtonGroup,
  ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from "reactstrap";
import { } from 'reactstrap';

import "./componentstyle.css";
import InputCheckBox from './common/checkbox' 
import {SingleCalender} from './hotel/calender'
import Calender from './hotel/calender'
import SwitchButtonComponent from "./common/switchButton";
import{useHistory} from 'react-router-dom'
import { connect } from "react-redux";
const buttontitle = [
  {
    name: "One Way",
    value: "One Way",
  },
  {
    name: "Round Trip",
    value: "Round Trip",
  },
];
const SearchFlightComponent = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);
  const toggle = () => setOpen(!dropdownOpen);
  // const [activeButton, setActiveButton] = useState(buttontitle[0].name)

  let history = useHistory();

  const onClickSearch = () => {
    history.push("/flight/search");
  };
  const onFormChange=(e)=>{
  console.log("event",e.target.innerText)
    setLastClicked(e.target.innerText)
  }
  return (
    <Card className="CardComponent">
      <div className="ButtonContainer">
        <SwitchButtonComponent />
      </div>
      <Form className="FormCustomize">
        <Row form>
          <FormGroup className="InputOuterStyleFrom">
            <Input
              className="InputCustomize"
              type="text"
              name="text"
              placeholder="From"
            />
          </FormGroup>

          <FormGroup className="InputOuterStyleTo">
            <Input
              className="InputCustomize"
              type="text"
              name="text"
              placeholder="To"
            />
          </FormGroup>

          {props.visible ? (
            <div className="FlightDepartReturn">
               <div className="CalenderCustomize">
          <Calender />
          </div>
            </div>
          ) : (
            <FormGroup className="InputOuterStyleOneWay">
              <SingleCalender/>
              {/* <Input
                className="InputCustomize"
                type="date"
                name="date"
                placeholder="Depart"
              /> */}
            </FormGroup>
          )}
        </Row>
        <div className="LowerFlightButton">
          <InputCheckBox  title="Direct flight only"/>
          {/* <FormGroup check className="CheckBoxContainer">
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Direct flight only
            </Label>
          </FormGroup> */}
          <div className="Passenger">
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="DropDownMewnuCustomize">
      <DropdownToggle caret className="ToogleDropDownMenu" color="#FFFF">
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={onFormChange}>1 Passenger</DropdownItem>
        <DropdownItem >2 Passenger</DropdownItem>
        <DropdownItem>3 Passenger</DropdownItem>
        <DropdownItem>4 Passenger</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="DropDownMewnuCustomize">
      <DropdownToggle caret className="ToogleDropDownMenu" color="#FFFF">
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Economy</DropdownItem>
        <DropdownItem >Premium Economy</DropdownItem>
        <DropdownItem>Business Class</DropdownItem>
        <DropdownItem>First Claass</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
          </div>
          <div className="PassengerButton">
            <Button className="ButtonSearch" onClick={onClickSearch}>Search</Button>
          </div>
        </div>
      </Form>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  visible: state.loginReducer.visible,
});

export default connect(mapStateToProps, null)(SearchFlightComponent);
