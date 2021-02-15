
import React,{useState} from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label,Button,ButtonGroup } from 'reactstrap';
import './componentstyle.css'
import SwitchButtonComponent from './common/switchButton'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const  SearchFlightComponent=(props) =>{
  const [lastClicked, setLastClicked] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState);
    	// const [activeButton, setActiveButton] = useState(buttontitle[0].name)

    console.log('props',props)

    const onClickSwitch = () => {
        setSelected(!selected)
          
	}
    return (
       
    <Card className="CardComponent">
        <div className="ButtonContainer">
        <SwitchButtonComponent onClickSwitch={onClickSwitch}/>
        </div>
        <Form  className="FormCustomize">
      <Row form>
        <Col md={4}>
          <FormGroup className="InputOuterStyle">
            <Input  className="InputCustomize" type="text" name="text" placeholder="From" />
          </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup className="InputOuterStyle">
            <Input className="InputCustomize" type="text" name="text"  placeholder="To" />
          </FormGroup>
        </Col>
        <Col md={2}>
        <FormGroup className="InputOuterStyle">
            <Input className="InputCustomize" type="text" name="text" placeholder="Depart" />
          </FormGroup>
        </Col>
          {selected===false?(
   <Col md={2}>
    <FormGroup className="InputOuterStyle">
     <Input className="InputCustomize" type="text" name="text" placeholder="Return" />
   </FormGroup>
 </Col>
        ):null}
       
      </Row>
      <div className="LowerFlightButton">

     
      <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Direct flight only</Label>
      </FormGroup>
      <div className="Passenger">
      <Dropdown   isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Hotels
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => setLastClicked(1)}>Action 1</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2)}>Action 2</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(3)}>Action 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div className="Passenger">
      <Dropdown   isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Hotels
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={() => setLastClicked(1)}>Action 1</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(2)}>Action 2</DropdownItem>
          <DropdownItem onClick={() => setLastClicked(3)}>Action 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div className="PassengerButton">
       <Button className="ButtonSearch">Search</Button>
      </div>
      </div>
      </Form>
            </Card>
       
    )
}
export default SearchFlightComponent;