import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Register from './components/Register'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={(props) => <App />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
