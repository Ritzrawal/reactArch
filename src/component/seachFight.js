
import React,{useState} from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label,Button,ButtonGroup } from 'reactstrap';
import './componentstyle.css'
import SwitchButtonComponent from './common/switchButton'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
const buttontitle = [
	{
		name: 'One Way',
		value: 'One Way',
	},
	{
		name: 'Round Trip',
		value: 'Round Trip',
	},
]
const  SearchFlightComponent=(props) =>{
  const [lastClicked, setLastClicked] = useState(null);
  const [activeButton, setActiveButton] = useState(buttontitle[0].name)

  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(false)
    const toggle = () => setDropdownOpen(prevState => !prevState);
    	// const [activeButton, setActiveButton] = useState(buttontitle[0].name)

    console.log('props',props)

    return (
       
    <Card className="CardComponent">
        <div className="ButtonContainer">
        <SwitchButtonComponent />
        </div>
        <Form  className="FormCustomize">
      <Row form>
        
          <FormGroup className="InputOuterStyleFrom">
            <Input  className="InputCustomize" type="text" name="text" placeholder="From" />
          </FormGroup>
       
        
        <FormGroup className="InputOuterStyleTo">
            <Input className="InputCustomize" type="text" name="text"  placeholder="To" />
          </FormGroup>
        
       
       
          {props.visible?(
        <div className="FlightDepartReturn">

      <FormGroup className="InputOuterStyleRounderWay">
            <Input className="InputCustomize" type="date" name="date" placeholder="Depart" />
          </FormGroup>
    <FormGroup className="InputOuterStyleReturn">
     <Input className="InputCustomize" type="date" name="return_date" placeholder="Return" />
   </FormGroup>
   </div>         ): <FormGroup className="InputOuterStyleOneWay">
        <Input className="InputCustomize" type="date" name="date" placeholder="Depart" />
      </FormGroup>}
       
      </Row>
      <div className="LowerFlightButton">

     
      <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Direct flight only</Label>
      </FormGroup>
      <div className="Passenger">
       <FormGroup className="PassengerType">
        <Input type="select" name="select" className="PassengerTypeInput" id="exampleSelect">
          <option>1 Passenger</option>
          <option>2 Passenger</option>
          <option>3 Passenger</option>
          <option>4 Passenger</option>
          <option>5 Passenger</option>
        </Input>
      </FormGroup>
      <FormGroup className="ClassType">
        <Input type="select" className="ClassTypeInput" name="select" id="exampleSelect">
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>First Class</option>
          <option>Business Class</option>
          
          
        </Input>
      </FormGroup>
      </div>
      <div className="PassengerButton">
       <Button className="ButtonSearch">Search</Button>
      </div>
      </div>
      </Form>
            </Card>
       
    )
}
const mapStateToProps = (state) => ({
	visible: state.loginReducer.visible,
})

export default connect(mapStateToProps,null) (SearchFlightComponent);