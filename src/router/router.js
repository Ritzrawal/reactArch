import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailAirplane from '../pages/airlinesPage/detailsAirplane'
import AccountAddress from '../pages/accountPage/billingAddress'
import ForgetPassword from '../pages/loginPage/forgetPassword'
import LoginPage from '../pages/loginPage/loginPage'
import HotelHomePage from '../pages/hotelPage/hotelHomePage'
import SignupPage from '../pages/signupPage/signupPgae'
import FlightHomePage from '../pages/airlinesPage/flightHomePage'
import HotelTypeComponent from '../component/hotel/hotelTypeCard'
import SearchDisplayPage from '../pages/hotelPage/searchDisplayPage'
import AirlineSeaarchPage from '../pages/airlinesPage/airSearchPage'
import Homepage from '../pages/homePage/homePage'
import BusHomePage from '../pages/busPage/busHomePage'
import BusSeaarchPage from '../pages/busPage/busSearchPage'
 const RouterConfiguration=() =>{
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/hotel" component={HotelHomePage} />
          <Route exact path="/hotel/search" component={SearchDisplayPage} />
          <Route exact path="/flight" component={FlightHomePage} />
          <Route exact path="/flight/search" component={AirlineSeaarchPage} />
          <Route exact path="/flight/details" component={DetailAirplane} />
          <Route exact path="/bus" component={BusHomePage} />
          <Route exact path="/bus/search" component={BusSeaarchPage} />
          <Route exact path="/booking" component={AccountAddress} />
          <Route exact path ="/change-password" component={ForgetPassword}/>
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;