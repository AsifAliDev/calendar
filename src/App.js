import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/helper/store";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Route path="/" component={Routes} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
