import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailAirplane from '../pages/airlinesPage/detailsAirplane'
import AirlineSeaarchPage from '../pages/airlinesPage/airSearchPage'
import Homepage from '../pages/homePage/homePage'
import BusSeaarchPage from '../pages/busPage/busSearchPage'
import {AccountAddress,
  TravelTourPage,
  FlightHomePage,
  BusHomePage,
  SignupPage,
  HotelHomePage,
  SearchDisplayPage,
  LoginPage,
  Payment,
  BusSeaarchListPage,
  TravelSearchPage,
  ForgetPassword} from '../pages'
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
          <Route exact path="/travel" component={TravelTourPage} />
          <Route exact path="/travel/search" component={BusSeaarchListPage} />
          <Route exact path="/flight/search" component={AirlineSeaarchPage} />
          <Route exact path="/flight/details" component={DetailAirplane} />
          <Route exact path="/bus" component={BusHomePage} />
          <Route exact path="/bus/search" component={BusSeaarchPage} />
          <Route exact path="/booking" component={AccountAddress} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path ="/change-password" component={ForgetPassword}/>
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;