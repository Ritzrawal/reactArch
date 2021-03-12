import React from 'react'
import './accountCustomize.css'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const AccountAddress=()=>{
  let history=useHistory()
  const onPayment=()=>{
history.push('/payment')
  }
    return(
        <div  className="AccountContainer">
            <div className="AccountCardCustomize">
            <div className="AccountTitle"></div>
            
            <Form className="AccountFormCustomize">
           <Row form>
          <Col md={6}>
          <FormGroup className="AccountNameField">
            <Label for="exampleEmail" className="LabelCustomize">First Name</Label>
            <Input type="text" name="email"  className="AccountInputField" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="AccountNameField">
            <Label className="LabelCustomize"  >Last Name</Label>
            <Input type="text" name="password" className="AccountInputField" placeholder="Last Name"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="AccountNameField">
        <Label  className="LabelCustomize">Billing Address</Label>
        <Input type="text" name="address" className="AccountInputField" placeholder="Address"/>
      </FormGroup>
      <FormGroup className="AccountNameField">
        <Label for="exampleAddress">Email</Label>
        <Input type="email" name="emailaddress" className="AccountInputField" placeholder="Your Email"/>
      </FormGroup>
      <FormGroup className="AccountNameField">
        <Label className="LabelCustomize">Country</Label>
        <Input type="select" name="select" id="exampleSelect" className="AccountInputField">
          <option>Nepal</option>
          <option>India</option>
          
        </Input>
      </FormGroup>
      <FormGroup className="AccountNameField">
        <Label className="LabelCustomize">Zip/Postal Code</Label>
        <Input type="text" name="address" className="AccountInputField" placeholder="Postal Code"/>
      </FormGroup>
      <FormGroup className="AccountNameField">
        <Label className="LabelCustomize">City</Label>
        <Input type="text" name="address" className="AccountInputField" placeholder="Your City"/>
        
      </FormGroup>
      <FormGroup className="AccountNameField">
        <Label className="LabelCustomize" >Phone Number</Label>
        <Input type="text" name="phone" className="AccountInputField" placeholder="Phone Number"/>
      </FormGroup>
      <FormGroup>
      <Button className="ButtonCustomizeBook"onClick={onPayment} >Pay Now
              <FontAwesomeIcon className="IconCustomize" icon={faAngleRight} />

              </Button>
          </FormGroup>
          </Form>
          </div>
        </div>
    )
}
export default AccountAddress;