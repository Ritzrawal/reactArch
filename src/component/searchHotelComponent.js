
import React from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label } from 'reactstrap';
import './componentstyle.css'
const  SearchHotelComponent=() =>{
    return (
       
    <Card className="CardComponent">
        <div className="OuterTextContainer">
            <text>Where do your want to stay?</text>
        </div>
        <Form  className="FormCustomize">
      <Row form>
        <Col md={6}>
          <FormGroup className="InputOuterStyle">
            <Input  className="InputCustomize" type="text" name="text" placeholder="Destination" />
          </FormGroup>
        </Col>
        <Col md={2}>
        <FormGroup className="InputOuterStyle">
            <Input className="InputCustomize" type="text" name="text"  placeholder="Check In" />
          </FormGroup>
        </Col>
        <Col md={2}>
        <FormGroup className="InputOuterStyle">
            <Input className="InputCustomize" type="text" name="text" placeholder="Check Out" />
          </FormGroup>
        </Col>
        <Col md={2}>
        <FormGroup className="InputOuterStyle">
            <Input className="InputCustomize" type="text" name="text" placeholder="Guests & Rooms" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Free Cancellation</Label>
      </FormGroup>
      </Form>
            </Card>
       
    )
}
export default SearchHotelComponent;