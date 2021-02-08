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
          <Route path="/login" component={Homepage} />
          <Route path="/signup" component={Homepage} />
          <Route path="/hotel" component={Homepage} />
          <Route path="/flight" component={Homepage} />
          <Route path="/bus" component={Homepage} />
          <Route path="/hotel" component={Homepage} />
         
        </Switch>
    </Router>
  );
}


export default RouterConfiguration;