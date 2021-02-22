import React from 'react'
import PropTypes from 'prop-types'
const DetailAirplane=({logo})=>{
    return(
        <div className="AirplaneCardContainer">
            <div className="DescriptionContainer">
                <div className="AirDateFirst">MON, FAB 8</div>
                <div className="AirDescription">
                    <img  className="LogoCustomize" src={logo} alt="logo plane"/>
                </div>
                <div className="TimeDisplay">
                <div className="AirDate">7.15 -10055</div>
                <div className="TimeCustomize">Kathmandu(KTM)-Dubai(DXB)</div>
                <div className="TimeCustomize">Emirate 2154-Narrow-bodyjet</div>

                </div>
                <div className="TimingDisplayHourly">7.15 -10055</div>
                
            </div>
            <div className="TransitContainer">
                <div className="TransitDispaly">Change Plane in Dubai(DXB)</div>
                <div className="TransitLongShort">- Long LayOver</div>
                <div className="TimingDisplayHourly">3h 40 min</div>
            </div>

        </div>
    )
}
export default DetailAirplane;
DetailAirplane.defaultProps={
logo:"https://cdn.shopify.com/s/files/1/2604/4866/products/Delta_Airlines-1_740x.jpg?v=1555424408"
}
DetailAirplane.PropsTypes={
    logo:PropTypes.string
}