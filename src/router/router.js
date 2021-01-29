import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from '../pages/homePage/homePage'
 const RouterConfiguration=() =>{
  return (
    <Router>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/hotel" component={Homepage} />
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;