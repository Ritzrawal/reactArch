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
import SignupPage from '../pages/signupPage/signupPgae'
import HotelTypeComponent from '../component/hotel/hotelTypeCard'
import SearchDisplayPage from '../pages/hotelPage/searchDisplayPage'
import AirlineSeaarchPage from '../pages/airlinesPage/airSearchPage'
import Homepage from '../pages/homePage/homePage'
import BusSeaarchPage from '../pages/busPage/busSearchPage'
 const RouterConfiguration=() =>{
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/hotel" component={HotelTypeComponent} />
          <Route exact path="/hotel/search" component={SearchDisplayPage} />
          <Route exact path="/flight" component={AirlineSeaarchPage} />
          <Route exact path="/flight/details" component={DetailAirplane} />
          <Route exact path="/bus" component={BusSeaarchPage} />
          <Route exact path="/hotel" component={Homepage} />
          <Route exact path="/booking" component={AccountAddress} />

          <Route exact path ="/change-password" component={ForgetPassword}/>
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;