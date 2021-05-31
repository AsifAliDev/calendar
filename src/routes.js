import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Calendar from "./pages/callendar/Callendar";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/calendar" component={Calendar} />

        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default Routes;
