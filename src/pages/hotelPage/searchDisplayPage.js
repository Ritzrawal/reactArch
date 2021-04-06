import React,{useState,useEffect} from 'react'
import Data from '../../utils/searchData'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWifi,
} from "@fortawesome/free-solid-svg-icons"
import {hotelSearchListAction,hotelRoomsDetailsAction,hotelSearchAction} from '../../store/action/hotelAction'
import {HotelCardSearch,HotelTypeComponent} from '../../component'
import HeaderPage from '../headePage/headerPage'
import './hotelStyling.css'
const  SearchDisplayPage=(props)=> {
   const [show, setShow] = useState(false)

   const onDisplay=(id)=>{
       console.log("hello dta",id)
    props.hotelRoomsDetailsAction(id)
   if(props.hoteldetails &&
    props.hoteldetails.results && props.hoteldetails.results.id==id){
    setShow(!show)
}
  
   }
   useEffect(() => {
      props.hotelSearchListAction()
      props.hotelSearchAction()
     
   }, [])
const details=props.hoteldetails.results;
    return (
        <div className="HotelSearchMainConatiner">
            <HeaderPage/>
            {props.data && props.data.results && props.data.results.map((item,index)=>{
                return(
                    <div className="HotelCardMapContainer" key={index}>
                        <div className="HotelInnerContainer">
                    <HotelCardSearch key={index}name={item.name} image={item.featured_image} hoteltype={item.hotel_type} rate={item.rating} location={item.location}onClick={onDisplay} id={item.id}/>   
                        {props.hoteldetails &&props.hoteldetails.results &&
                        
                        props.hoteldetails.results.id==item.id  && show &&
                    
                    <div className="HotelDetailsVisible">
                        
                    <HotelTypeComponent hoteltype={item.hotel_type} image={item.featured_image}/>
                    <div className="HotelsDetailsContainer">
                        <div className="DetailsTextCustomize">Details</div>
                        {item.features.map((it,i)=>{
                            return(
                                <div className="CardFacilityContainer" key={i}>
                                <div className="LeftContainerFacility">
                                    <div className="LogoCustomizeHotel">
                                        <FontAwesomeIcon className="IconModified"  icon={faWifi}/>
                                    </div>
                                    <div className="LogoNameCustomize">{it}</div>
    
                                </div>
                                
                                <div className="RightContainerFacility">
                                <div className="LogoNameCustomize">wifi</div>
                                    <div className="LogoNameCustomize">internet</div>
                                </div>
                            </div>
                            )
                        })}
                       

                    </div>
                    </div>
                    }
                    </div>
                    </div>
                )
                  
                
            })}
          
        </div>
    )
}
const mapStateToProps=(state)=>({
    data:state.hotelReducer.search,
    search:state.hotelReducer.search,
    hoteldetails:state.hotelReducer.hoteldetails
})
export default connect(mapStateToProps,{hotelSearchListAction,hotelRoomsDetailsAction,hotelSearchAction})(SearchDisplayPage);
