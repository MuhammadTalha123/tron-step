import React from 'react';
import './App.css';
import Home from './Home';
import Invetement from './Invetement';
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Invetement />
    </div>
  );
}

export default App;
