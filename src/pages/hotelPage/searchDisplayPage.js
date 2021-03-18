import React,{useState,useEffect} from 'react'
import Data from '../../utils/searchData'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWifi,
} from "@fortawesome/free-solid-svg-icons"
import {hotelSearchListAction} from '../../store/action/hotelAction'
import {HotelCardSearch,HotelTypeComponent} from '../../component'
import HeaderPage from '../headePage/headerPage'
import './hotelStyling.css'
const  SearchDisplayPage=(props)=> {
   const [show, setShow] = useState(false)

   const onDisplay=()=>{
    setShow(!show)
   }
   useEffect(() => {
      props.hotelSearchListAction()
      console.log("hrllo hotel",props.data)
   }, [])

    return (
        <div className="HotelSearchMainConatiner">
            <HeaderPage/>
            {props.data.map((item,index)=>{
                return(
                    <div className="HotelCardMapContainer">
                        <div className="HotelInnerContainer">
                    <HotelCardSearch key={index}name={item.name} image={item.featured_image} hoteltype={item.hotel_type} rate={item.rating} location={item.location}onClick={onDisplay}/>   
                    {show &&
                    <div className="HotelDetailsVisible">
                    <HotelTypeComponent hoteltype={item.hotel_type} image={item.featured_image}/>
                    <div className="HotelsDetailsContainer">
                        <div className="DetailsTextCustomize">Details</div>
                        {item.features.map((it,i)=>{
                            return(
                                <div className="CardFacilityContainer">
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
    data:state.hotelReducer.data
})
export default connect(mapStateToProps,{hotelSearchListAction})(SearchDisplayPage);
