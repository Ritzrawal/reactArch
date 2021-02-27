import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './homeStyles.css'
import SearchHotelComponent from '../../component/searchHotelComponent'
import SearchFlightComponent from '../../component/seachFight'
import SearchBusComponent from '../../component/searchBusComponent'
import FooterComponent from './fotterPage'
import { ButtonGroup,Button } from 'reactstrap'
import Data from '../../utils/constant'
import CardComponent from '../../component/common/card'
const  LowerHomepage=(props)=> {
  let history = useHistory();

  const [hotel, setHotel] = useState(true);
  const [bus, setBus] = useState(true);

  const [flight, setFlight] = useState(false);
  const [count, setCount] = useState(true);

const onClickHotel = () => {
history.push('/hotel')      
}
const onClickBus = () => {
  history.push('/bus') 
 
      
}
const onClickFlight = () => {
  history.push('/flight')       
}
  return (
    <div className="HomeMainContainer">
      <div className="SearchMainContainer">
        <div className="CardOuterComponent">
          <div className="RecomandedHotel">
            <text className= "RecomHotelStyling">{props.title}</text>
          </div>
       
         <ButtonGroup className="ButtonGroupComponentCat">
            <Button
            className="ButtonClassCat"
            name="hotel"
            // onClick={onClickHotel}
            >kathmandu</Button>
            <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Pokhara</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Bhaktapur</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Chitwan</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Dhangadi</Button>
            <Button
          className="ButtonClassCat">Surkhet</Button>
          </ButtonGroup>
          </div>
         <div className="CardDisplaying">
          {Data.map((items,index)=>{
            return(
             <CardComponent  image={items.image}/>
            )
          })}
          
         </div>
        
      </div>
      <div className="BusComponentDisplay">
      <div className="CardOuterComponent">
          <div className="RecomandedHotel">
            <text className= "RecomHotelStyling">{props.lowertitle}</text>
          </div>
       
         <ButtonGroup className="ButtonGroupComponentCat">
         <Button
            className="ButtonClassCat"
            name="hotel"
            // onClick={onClickHotel}
            >kathmandu</Button>
            <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Pokhara</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Bhaktapur</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Chitwan</Button>
               <Button
             className="ButtonClassCat"
             name="Flight"
            // onClick={onClickHotel}
            >Dhangadi</Button>
            <Button
          className="ButtonClassCat">Surkhet</Button>
          </ButtonGroup>
          </div>
         <div className="CardDisplaying">
          {Data.map((items,index)=>{
            return(
             <CardComponent  image={items.bus}/>
            )
          })}
          
         </div>
      </div>
      <FooterComponent/>
      
      
    </div>
  )
}
export default LowerHomepage