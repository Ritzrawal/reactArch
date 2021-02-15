import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
          <Route exact path="/login" component={Homepage} />
          <Route exact path="/signup" component={Homepage} />
          <Route exact path="/hotel" component={HotelTypeComponent} />
          <Route exact path="/hotel/search" component={SearchDisplayPage} />
          <Route exact path="/flight" component={AirlineSeaarchPage} />
          <Route exact path="/bus" component={BusSeaarchPage} />
          <Route exact path="/hotel" component={Homepage} />
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;