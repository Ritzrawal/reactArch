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
} from "reactstrap";
import "./componentstyle.css";
import InputCheckBox from './common/checkbox' 
import {SingleCalender} from './hotel/calender'
import Calender from './hotel/calender'
import SwitchButtonComponent from "./common/switchButton";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
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

  // const [activeButton, setActiveButton] = useState(buttontitle[0].name)

  let history = useHistory();

  const onClickSearch = () => {
    history.push("/flight/search");
  };
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
              {/* <FormGroup className="InputOuterStyleRounderWay">
                <Input
                  className="InputCustomize"
                  type="date"
                  name="date"
                  placeholder="Depart"
                />
              </FormGroup>
              <FormGroup className="InputOuterStyleReturn">
                <Input
                  className="InputCustomize"
                  type="date"
                  name="return_date"
                  placeholder="Return"
                />
              </FormGroup> */}
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
            <FormGroup className="PassengerType">
              <Input
                type="select"
                name="select"
                className="PassengerTypeInput"
                id="exampleSelect"
              >
                <option>1 Passenger</option>
                <option>2 Passenger</option>
                <option>3 Passenger</option>
                <option>4 Passenger</option>
                <option>5 Passenger</option>
              </Input>
            </FormGroup>
            <FormGroup className="ClassType">
              <Input
                type="select"
                className="ClassTypeInput"
                name="select"
                id="exampleSelect"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>First Class</option>
                <option>Business Class</option>
              </Input>
            </FormGroup>
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
