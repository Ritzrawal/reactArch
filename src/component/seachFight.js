
import React,{useState} from 'react'
import { Card,Form,Row,Col,FormGroup,Input,Label,Button,ButtonGroup } from 'reactstrap';
import './componentstyle.css'
import SwitchButtonComponent from './common/switchButton'
const  SearchFlightComponent=(props) =>{
    const [selected, setSelected] = useState(false)
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
      <FormGroup check className="CheckBoxContainer">
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Direct flight only</Label>
      </FormGroup>
      </Form>
            </Card>
       
    )
}
export default SearchFlightComponent;