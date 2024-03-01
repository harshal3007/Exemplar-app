import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Carousel.css";
import React, { useRef, useEffect, useState } from "react";
import video1 from "../Video/JB brothers.mp4";
import video2 from "../Video/CatalystWith CC.mp4";
import video3 from "../Video/Nahur Video.mp4";
import logo from "../Images/exempler-logo.png";

function IndividualIntervalsExample() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        index === activeSlide ? ref.current.play() : ref.current.pause();
      }
    });
  }, [activeSlide]);

  const handleSlideChange = (index) => {
    let newIndex = index;
    if (newIndex >= videoRefs.length) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = videoRefs.length - 1;
    }

    setActiveSlide(newIndex);
  };

  const handleVideoClick = () => {
    const activeVideoRef = videoRefs[activeSlide];

    if (activeVideoRef.current) {
      if (isPlaying) {
        activeVideoRef.current.pause();
      } else {
        activeVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    handleSlideChange(activeSlide + 1);
  };

  return (
    <>
      <div className="container-fluid bg-dahlia ">
        <div className="row h-full flex justify-center items-center">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className={activeSlide === 0 ? "active" : ""}
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className={activeSlide === 1 ? "active" : ""}
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className={activeSlide === 2 ? "active" : ""}
              ></li>
            </ol>

            <div className="carousel-inner rounded-lg">
              <div
                className={`carousel-item rounded-lg ${activeSlide === 0 ? "active" : ""}`}
              >
                <div className="info rounded-lg">
                  <video
                    ref={videoRefs[0]}
                    src={video1}
                    alt="First slide"
                    className="imageStyle"
                    autoPlay
                    controls={false}
                    controlsList="nodownload"
                    muted
                    onEnded={handleVideoEnd}
                    onClick={handleVideoClick}
                  ></video>
                </div>
              </div>

              <div
                className={`carousel-item rounded-lg ${activeSlide === 1 ? "active" : ""}`}
              >
                <div className="info rounded-lg">
                  <video
                    ref={videoRefs[1]}
                    src={video2}
                    alt="First slide"
                    className="imageStyle"
                    autoPlay
                    controls={false}
                    controlsList="nodownload"
                    muted
                    onEnded={handleVideoEnd}
                    onClick={handleVideoClick}
                  ></video>
                </div>
              </div>

              <div
                className={`carousel-item rounded-lg ${activeSlide === 2 ? "active" : ""}`}
              >
                <div className="info rounded-lg">
                  <video
                    ref={videoRefs[2]}
                    src={video3}
                    alt="First slide"
                    className="imageStyle"
                    autoPlay
                    controls={false}
                    controlsList="nodownload"
                    muted
                     onEnded={handleVideoEnd}
                    onClick={handleVideoClick}
                  ></video>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
              onClick={() => handleSlideChange(activeSlide - 1)}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
              onClick={() => handleSlideChange(activeSlide + 1)}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualIntervalsExample;
