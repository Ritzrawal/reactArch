
import React from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label,Button } from 'reactstrap';
import './componentstyle.css'
const  SearchHotelComponent=() =>{
    return (
       
    <Card className="CardComponent">
        <div className="OuterTextContainer">
            <text>Where do your want to stay?</text>
        </div>
        <Form  className="FormCustomize">
      <Row form>
       
          <FormGroup className="InputOuterStyleDest">
            <Input  className="InputCustomize" type="text" name="text" placeholder="Destination" />
          </FormGroup>
       
       
        <FormGroup className="InputOuterStyleCheckIn">
            <Input className="InputCustomize" type="date" name="checkin_date"  placeholder="Check In" />
          </FormGroup>
      
        
        <FormGroup className="InputOuterStyleCheckOut">
            <Input className="InputCustomize" type="date" name="date" placeholder="Check Out" />
          </FormGroup>
       
        <FormGroup className="InputOuterStyleGuest">
            <Input className="InputCustomize" type="text" name="text" placeholder="Guests & Rooms" />
          </FormGroup>
      </Row>
      <div className="LowerFlightButton">
      <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Free Cancellation</Label>
      </FormGroup>
      <div className="PassengerButtonHotel">
       <Button className="ButtonSearch">Search</Button>
      </div>
      </div>
      </Form>
            </Card>
       
    )
}
export default SearchHotelComponent;