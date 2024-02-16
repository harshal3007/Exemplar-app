import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Certificates from "./Pages/Certificates.jsx";
import HSE from "./Pages/HSE.jsx"

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/about" element={ <Aboutpage />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/certificates" element={ <Certificates />} />
        <Route path="/hse" element={ <HSE />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
