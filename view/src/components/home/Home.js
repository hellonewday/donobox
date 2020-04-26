import React from "react";
import SearchBar from "./Search";
import Popular from "../campaign/Popular";
import NearYou from "../campaign/NearYou";
import Social from "./Social";
import rice from "../../img/rice.jpg"
import Tips from "./Tips";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar image={rice}/>
        <Popular />
        <NearYou />
        <Social />
        <Tips />
        <Contact />
      </div>
    );
  }
}

export default App;
