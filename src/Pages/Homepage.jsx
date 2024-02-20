import React from "react";
import Home from "../Component/Hero";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Service from "../Component/Services";
import Process from "../Component/ProcessFlow";
import { Carousel5 } from "../Component/PartnerSlider";

const Homepage = () => {
  return (
    <div>
      <Home />
      <About />
      <Carousel5 />
      <Service />
     
      <Footer />
    </div>
  );
};

export default Homepage;
