import React from "react";
import Footer from "../Component/Footer";
import Logos from "../Component/Logos";
import Navbar from "../Component/Navbar";
import IndividualIntervalsExample from "../Component/Carousel"
import Featured from "../Component/Featured";

const Homepage = () => {
  return (
    <div>
       <Navbar />
      <IndividualIntervalsExample/>
      <Featured />
      <Logos />
      <Footer />
    </div>
  );
};

export default Homepage;
