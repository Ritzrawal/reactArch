import React from 'react'
import './accountCustomize.css'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const AccountAddress=()=>{
    return(
        <div  className="AccountContainer">
            <div className="AccountCardCustomize">
            <div className="AccountTitle"></div>
            
            <Form className="AccountFormCustomize">
           <Row form>
          <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">First Name</Label>
            <Input type="text" name="email"  placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label >Last Name</Label>
            <Input type="text" name="password"  placeholder="Last Name"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Billing Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Address"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Email</Label>
        <Input type="email" name="emailaddress" id="exampleAddress" placeholder="Your Email"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Country</Label>
        <Input type="select" name="select" id="exampleAddress" placeholder="Nepal"/>
        
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Zip/Postal Code</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Postal Code"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">City</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Your City"/>
        
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Phone Number</Label>
        <Input type="text" name="phone" id="exampleAddress" placeholder="Phone Number"/>
      </FormGroup>
      <FormGroup>
          </FormGroup>
          </Form>
          </div>
        </div>
    )
}
export default AccountAddress;