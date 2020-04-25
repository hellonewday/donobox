import React from "react";
import SearchBar from "./Search";
import Popular from "./showcase/Popular";
import NearYou from "./showcase/NearYou";
import Social from "./Social";
import Tips from "./Tips";
import Contact from "./Contact";
class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
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
