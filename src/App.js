import React from "react";
import "./App.css";
import Home from "./Component/Hero";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Service from "./Component/Services"
import Process from "./Component/ProcessFlow";
import { Carousel5 } from "./Component/PartnerSlider";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Carousel5 />
      <Service />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
