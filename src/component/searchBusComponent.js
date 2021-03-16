import React, { useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  ButtonGroup,
} from "reactstrap";
import "./componentstyle.css";
import SwitchButtonComponent from "./common/switchButton";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import {SingleCalender} from './hotel/calender'
import InputCheckBox from "./common/checkbox";
import { useHistory } from "react-router-dom";
const SearchBusComponent = (props) => {
  const [lastClicked, setLastClicked] = useState(null);
  let history = useHistory();

  const onClickSearch = () => {
    history.push("/bus/search");
  };
  return (
    <Card className="CardComponent">
      <div className="OuterTextContainer">
        <text>Where do your want to Travel?</text>
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
          <FormGroup className="InputOuterStyleOneWay">
           <SingleCalender/>
          </FormGroup>
        </Row>
        <div className="LowerFlightButton">
          <div className="LowerFlightButton">
            <InputCheckBox title="Free Cancellation" />
            <div className="PassengerButtonHotel">
              <Button className="ButtonSearch" onClick={props.onSearchDetails}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Card>
  );
};
const mapStateToProps = (state) => ({
  visible: state.loginReducer.visible,
});

export default connect(mapStateToProps, null)(SearchBusComponent);
