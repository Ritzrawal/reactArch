import React,{useState} from 'react'
import Data from '../../utils/searchData'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWifi,
} from "@fortawesome/free-solid-svg-icons"
import {HotelCardSearch,HotelTypeComponent} from '../../component'
import HeaderPage from '../headePage/headerPage'
import './hotelStyling.css'
const  SearchDisplayPage=(props)=> {
   const [show, setShow] = useState(false)

   const onDisplay=()=>{
    setShow(!show)
   }

    return (
        <div className="HotelSearchMainConatiner">
            <HeaderPage/>
            {Data.map((item,index)=>{
                return(
                    <div className="HotelCardMapContainer">
                        <div className="HotelInnerContainer">
                    <HotelCardSearch key={index} image={item.hotel} onClick={onDisplay}/>   
                    {show &&
                    <div className="HotelDetailsVisible">
                    <HotelTypeComponent />
                    <div className="HotelsDetailsContainer">
                        <div className="DetailsTextCustomize">Details</div>
                        {Data.map((item,index)=>{
                            return(
                                <div className="CardFacilityContainer">
                                <div className="LeftContainerFacility">
                                    <div className="LogoCustomize">
                                        <FontAwesomeIcon className="IconModified" size="2x" icon={faWifi}/>
                                    </div>
                                    <div className="LogoNameCustomize">{item.facility}</div>
    
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
    visible:state.loginReducer.visible
})
export default connect(mapStateToProps,null)(SearchDisplayPage);
