import React from "react";
// import Home from "../Component/Hero";
// import About from "../Component/About";
import Footer from "../Component/Footer";
import Logos from "../Component/Logos";
import Navbar from "../Component/Navbar";
import IndividualIntervalsExample from "../Component/Carousel"
import Featured from "../Component/Featured";
// import Service from "../Component/Services";
// import Process from "../Component/ProcessFlow";
// import { Carousel5 } from "../Component/PartnerSlider";

const Homepage = () => {
  return (
    <div>
      {/* {/ <Home /> /} */}
       <Navbar />
      <IndividualIntervalsExample/>
      <Featured />
      {/* {/ <About /> /} */}
      {/* {/ <Carousel5 /> /} */}
      {/* {/ <Service /> /} */}
      <Logos />
      <Footer />
    </div>
  );
};

export default Homepage;
