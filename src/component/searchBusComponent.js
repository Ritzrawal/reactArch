
import React,{useState} from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label,Button,ButtonGroup } from 'reactstrap';
import './componentstyle.css'
import SwitchButtonComponent from './common/switchButton'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import InputCheckBox from './common/checkbox'
import { useHistory } from "react-router-dom";
const  SearchBusComponent=(props) =>{
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
        <Form  className="FormCustomize">
      <Row form>
        
          <FormGroup className="InputOuterStyleFrom">
            <Input  className="InputCustomize" type="text" name="text" placeholder="From" />
          </FormGroup>
       
        
        <FormGroup className="InputOuterStyleTo">
            <Input className="InputCustomize" type="text" name="text"  placeholder="To" />
          </FormGroup>
         <FormGroup className="InputOuterStyleOneWay">
        <Input className="InputCustomize" type="date" name="date" placeholder="Depart" />
      </FormGroup>
       
      </Row>
      <div className="LowerFlightButton">

     
      <div className="LowerFlightButton">
      <InputCheckBox  title="Free Cancellation"/>
      {/* <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Free Cancellation</Label>
      </FormGroup> */}
      <div className="PassengerButtonHotel">
       <Button className="ButtonSearch"
       onClick={onClickSearch}
       >Search</Button>
      </div>
      </div>
      </div>
      </Form>
            </Card>
       
    )
}
const mapStateToProps = (state) => ({
	visible: state.loginReducer.visible,
})

export default connect(mapStateToProps,null) (SearchBusComponent);