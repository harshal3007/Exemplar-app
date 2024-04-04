import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import project1 from "../Images/resi1.jpg";
import project2 from "../Images/resi2.jpg";
import project3 from "../Images/resi3.jpg";
import project4 from "../Images/resi4.jpg";
import project5 from "../Images/resi5.jpg";
import project6 from "../Images/resi6.jpg";
import project7 from "../Images/resi7.jpg";
import project8 from "../Images/resi8.jpg";
import project25 from "../Images/project25.webp"
import project41 from "../Images/project41.webp";
import project42 from "../Images/project42.webp";
import project48 from "../Images/project48.webp";

const Residential = () => {
  return (
    <div className="bg-dahlia">
      <Navbar />
      <div class="container mx-auto px-8 text-justify py-6 lg:px-24 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class=" flex items-center justify-center">
            <div class="items-center gap-12">
              <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white mb-6 ml-10">
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
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project6}
              />
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
                src={project25}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project8}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project41}
              />
            </div>
          </div>
          <div class="flex w-full md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project42}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project48}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={project7}
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
