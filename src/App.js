import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/About.jsx"


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/about" element={ <Aboutpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
