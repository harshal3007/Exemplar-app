import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./Component/Scroll.jsx";
import "./App.css";
import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Certificates from "./Pages/Certificates.jsx";
import HSE from "./Pages/HSE.jsx"
import Service from "./Pages/Service.jsx";
import Why from "./Pages/Why.jsx";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/about" element={ <Aboutpage />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/project" element={ <Projects />} />
        <Route path="/certificates" element={ <Certificates />} />
        <Route path="/hse" element={ <HSE />} />
        <Route path="/service" element={ <Service/>} />
        <Route path="/why-us" element={ <Why/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
