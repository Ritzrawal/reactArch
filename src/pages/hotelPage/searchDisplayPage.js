import React from 'react'
import Data from '../../utils/searchData'
import {HotelCardSearch} from '../../component'
import HeaderPage from '../headePage/headerPage'
import './hotelStyling.css'
const  SearchDisplayPage=()=> {
    return (
        <div className="HotelSearchMainConatiner">
            <HeaderPage/>
            {Data.map((item,index)=>{
                return(
                    <div className="HotelCardMapContainer">
                        <div className="HotelInnerContainer">
                    <HotelCardSearch key={index} image={item.hotel}/>
                    </div>
                    </div>
                )
                  
                
            })}
          
        </div>
    )
}
export default SearchDisplayPage;
