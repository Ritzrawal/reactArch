import React, { useState } from 'react';
import './homeStyles.css'
import SearchHotelComponent from '../../component/searchHotelComponent'
import SearchFlightComponent from '../../component/seachFight'
import SearchBusComponent from '../../component/searchBusComponent'
import FooterComponent from './fotterPage'
import { ButtonGroup,Button } from 'reactstrap'
import Data from '../../utils/constant'
import CardComponent from '../../component/common/card'
const  LowerHomepage=(props)=> {
  const [hotel, setHotel] = useState(true);
  const [bus, setBus] = useState(true);

  const [flight, setFlight] = useState(false);
  const [count, setCount] = useState(true);

const onClickHotel = () => {
props.history.push('/hotel')      
}
const onClickBus = () => {
  console.log("Hello Props",props)
  setHotel(!bus)
      
}
// const onClickFlight = () => {
//   setFlight(true)
      
// }
  return (
    <div className="HomeMainContainer">
      <div className="BackgrundImageContainer">
        <div className="BackGroundImage">

        </div>
      </div>
      <div className="SearchMainContainer">
        <div className="SearchInnerComponent">
        <div className="TopButtonContainer">
          <ButtonGroup className="ButtonGroupComponent">
            <Button
            className="ButtonClass"
            name="hotel"
            onClick={onClickHotel}
            >Hotel</Button>
            <Button
             className="ButtonClass"
             name="Flight"
            onClick={onClickHotel}
            >Flight</Button>
            <Button
          className="ButtonClass"
          onClick={onClickBus}
          >Bus</Button>
          </ButtonGroup>
        </div>
        <div className="SeachContainerComponent">
          {hotel ?(
          <SearchHotelComponent/>
          ):(  <SearchFlightComponent/>)
          }
         {bus ?(
          <SearchBusComponent/>
          ):null}
        
        </div>
        </div>
        <div className="CardOuterComponent">
          <div className="RecomandedHotel">
            <text className= "RecomHotelStyling">Recomanded Hotels</text>
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
            <text className= "RecomHotelStyling">Recomanded Bus</text>
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