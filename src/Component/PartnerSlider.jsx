import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/PartnerSlider.css";
import UA from "../Images/UA.png";
import WF from "../Images/WF.png";
import AS from "../Images/AS.webp";
import BTS from "../Images/BTS.jpeg";
import LS from "../Images/LS.webp";
import MH from "../Images/MH.png";
import RL from "../Images/RL.webp";
import SY from "../Images/SY.webp";

const animation = { duration: 14000, easing: (t) => t };

export const Carousel5 = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 5,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="caraousel5 px-6">
      <div className="borderOrg"></div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">
        Few of our Major Clients
      </h1>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={UA} alt="stpi" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src={WF} alt="pontaq" />
        </div>
      
        <div className="keen-slider__slide number-slide5">
          <img src={AS} alt="nasscom" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src={BTS} alt="wadhwani" />
        </div>
        <div className="keen-slider__slide number-slide7">
          <img src={LS} alt="ngis" />
        </div>
        <div className="keen-slider__slide number-slide8">
          <img src={MH} alt="startup" />
        </div>
        <div className="keen-slider__slide number-slide9">
          <img src={RL} alt="startup" />
        </div>
        <div className="keen-slider__slide number-slide10">
          <img src={SY} alt="startup" />
        </div>
      </div>
    </div>
  );
};

