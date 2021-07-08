import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div class="main">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

// *StrbvkS346
