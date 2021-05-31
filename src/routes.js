import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Calendar from "./pages/callendar/Callendar";
import RouteEnum from "./util/path";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={RouteEnum.Login} component={Login} />
        <Route exact path={RouteEnum.Register} component={Register} />
        <Route exact path={RouteEnum.Calendar} component={Calendar} />

        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default Routes;
