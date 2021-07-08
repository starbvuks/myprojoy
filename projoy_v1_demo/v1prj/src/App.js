import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import HappyI from "./components/Packages/Happy-I/HappyI.jsx";

import "./App.css";

function App() {
  return (
    <div class="main">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hpy-ind">
          <HappyI />
        </Route>
      </Router>
    </div>
  );
}

export default App;

// *StrbvkS346
