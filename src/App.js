import React from "react";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Invetement from "./Invetement";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main_page">
        <Home />
        <Invetement />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
