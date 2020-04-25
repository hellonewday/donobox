import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import Popular from "./components/showcase/Popular";
import NearYou from "./components/showcase/NearYou";
import Social from "./components/Social";
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <Popular />
      <NearYou />
      <Social />
      <Tips />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
