import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import project5 from "../Images/seven3.jpeg";
import project2 from "../Images/digital.png";
import project3 from "../Images/trends3.png";
import project4 from "../Images/trend5.jpeg";
import project1 from "../Images/seven1.jpeg";
import project11 from "../Images/seven2.jpeg";
import project30 from "../Images/seven4.jpeg";
import project6 from "../Images/trends8.jpeg";
import project12 from "../Images/IMG_0864.JPG";
import project13 from "../Images/IMG_0868.JPG";
import project14 from "../Images/IMG_0870.JPG";
import project15 from "../Images/IMG_0873.JPG";
import project16 from "../Images/IMG_0875.JPG";
import project17 from "../Images/IMG_0881.JPG";
import washing from "../Images/washing.png";
import reliance from "../Images/relianedigi.webp";

const Retail = () => {
  return (
    <div className="bg-bronze">
      <Navbar />
      <div class="container mx-auto px-8 text-justify py-6 lg:px-24 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class=" flex items-center justify-center">
            <div class="items-center gap-12">
              <h2 class="text-2xl font-bold text-white lg:text-3xl dark:text-white mb-6 ml-10">
                Retail Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-24 lg:pt-2">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project12}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project13}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project14}
              />
            </div>
          </div>
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project15}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project16}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project17}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-24 lg:pt-14">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project3}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project30}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={washing}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={reliance}
              />
            </div>
          </div>
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project4}
              />
            </div>

            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project6}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project11}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project5}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Retail;
