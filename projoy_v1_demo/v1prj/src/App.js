import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import "./App.css";

function App() {
  return (
    <div class="main">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

// *StrbvkS346
