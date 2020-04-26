import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Tips from "./components/Tips";
import Account from "./components/Account";
import CreateCam from "./components/CreateCam";
import Showcase from "./components/showcase/Showcase";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import EditCams from "./components/EditCams";
import Detail from "./components/Detail";
import Chart from "./components/Chart";

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
          <Route path="/edit/campaigns/:id" component={EditCams} />
          <Route path="/chart" component={Chart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
