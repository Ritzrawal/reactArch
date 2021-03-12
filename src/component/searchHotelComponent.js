import React from "react";
import {
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import "./componentstyle.css";
import { useHistory } from "react-router-dom";
import Calender from "./hotel/calender";
import InputCheckBox from "./common/checkbox";
const SearchHotelComponent = () => {
  let history = useHistory();

  const onClickSearch = () => {
    history.push("/hotel/search");
  };
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
              name="text"
              placeholder="Destination"
            />
          </FormGroup>
            <div className="CalenderCustomize">
          <Calender />
          </div>
          <FormGroup className="InputOuterStyleGuest">
            <Input
              className="InputCustomize"
              type="text"
              name="text"
              placeholder="Guests & Rooms"
            />
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
export default SearchHotelComponent;
