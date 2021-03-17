import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        auth
          ? console.log("Trying to render component") || (
              <Component {...props} />
            )
          : console.log("Redirected") || (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => ({ auth: state.auth });
export default withRouter(connect(mapStateToProps)(PrivateRoute));
