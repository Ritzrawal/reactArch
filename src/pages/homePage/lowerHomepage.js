import React from 'react'
import SearchFlightComponent from '../../component/seachFight'
import './homeStyles.css'
const  lowerHomepage=()=> {
    return (
        <div className="LowerMainContainer">
          <div className="LowerContainer"></div>
          
          <div className="LowerContinerDisplay">
            <div className="SearchCUstomize">
            <SearchFlightComponent/>
            </div>
         
          </div>
          
        </div>
    )
}
export default lowerHomepage
