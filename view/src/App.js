import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Contact from "./components/home/Contact";
import Tips from "./components/home/Tips";
import Account from "./components/account/Account";
import CreateCam from "./components/campaign/CreateCam";
import Showcase from "./components/campaign/Showcase";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";
import Detail from "./components/campaign/Detail";
import Chart from "./components/chart/Chart";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={(props) => <Home />} />
          <Route path={"/contact"} component={(props) => <Contact />} />
          <Route path="/covid" component={(props) => <Tips />} />
          <Route path="/auth" component={(props) => <Account />} />
          <Route path="/create" component={(props) => <CreateCam />} />
          <Route path="/campaigns" component={(props) => <Showcase />} />
          <Route path="/campaign/:id" component={Detail} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/edit/profile/:id" component={EditProfile} />
          <Route path="/chart" component={Chart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
