import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import founder1 from "../Images/founder1.jpeg";
import founder2 from "../Images/founder2.jpeg";
import founder3 from "../Images/founder3.jpeg";

const About = () => {
  const people = [
    {
      name: "Prateek Khare",
      role: "Director",
      imageUrl: founder1,
    },
    {
      name: "Leonard Krasner",
      role: "Director",
      imageUrl: founder3,
    },
    {
      name: "Deviprasad Kalaikar",
      role: "Director",
      imageUrl: founder2,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center mb-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-12 text-lg leading-8 text-gray-600  text-justify">
              We at Exemplar, are a group of high end designers and interior
              architects who are constantly upgrading and improving the industry
              design standards in terms of beauty, space optimisation and
              functionality.
            </p>
            <p className="mt-8 text-lg leading-8 text-gray-600  text-justify">
              We are the world’s first organisation that designs space using
              multiple psychological researches to optimise the productivity
              output of the end user. We are the fastest growing interior
              turnkey solution providers of the country and are dedicated to
              provide our customers the best service, quality and ensure that
              the design is given utmost attention to cater to every client and
              their space needs. 
            </p>
            <p className="mt-8 text-lg leading-8 text-gray-600  text-justify">
            It is our constant goal to bridge the gap of
              the industry, hence our dedicated project management team is
              focused at maintaining a high level of technical process adherence
              and ensuring timely delivery. We focus on effective risk
              assessments and meticulous reporting on all the projects ensuring
              high quality serviceability and customer experience. We have the
              skills and knowledge to help you reach your design objectives,
              whether you want to change the aesthetic of your home, workplace,
              or a commercial facility. At Exemplar, we are committed to giving
              our clients the best service and creative solutions that go above
              and beyond what they anticipate.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-56 w-56 object-cover rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                <ul className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
