import React from "react";
import Footer from "../Component/Footer";
import Logos from "../Component/Logos";
import Navbar from "../Component/Navbar";
import IndividualIntervalsExample from "../Component/Carousel"
import Featured from "../Component/Featured";
import Awards from "../Component/Awards";

const Homepage = () => {
  return (
    <div>
       <Navbar />
      <IndividualIntervalsExample/>
      <Featured />
      {/* <Awards /> */}
      <Logos />
      <Footer />
    </div>
  );
};

export default Homepage;
