import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import DataSlider from "./components/showcase/DataSlider";
import Popular from "./components/showcase/Popular";
import NearYou from "./components/showcase/NearYou";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Popular />
      <NearYou />
    </div>
  );
}

export default App;
