import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import project1 from "../Images/resi1.jpg";
import project2 from "../Images/resi2.jpg";
import project3 from "../Images/resi3.jpg";
import project4 from "../Images/resi4.jpg";
import project41 from "../Images/project41.webp";

const Residential = () => {
  return (
    <div className="bg-bronze">
      <Navbar />
      <div class="container mx-auto px-8 text-justify py-6 lg:px-24 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class=" flex items-center justify-center">
            <div class="items-center gap-12">
              <h2 class="text-2xl font-bold text-white lg:text-3xl dark:text-white mb-6 ml-10">
                Residential Projects
              </h2>
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
          </div>
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project4}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-24 lg:pt-2">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project41}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Residential;
