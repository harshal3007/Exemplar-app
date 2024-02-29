import React, { useEffect, useState, useRef } from "react";
import about1 from "../Images/about 1.webp";
import about2 from "../Images/about 2.png";
import about3 from "../Images/about3.webp";
import about4 from "../Images/about 4.webp";
import about5 from "../Images/about 5.webp";

const Aboutsection = () => {
  const initialStats = [
    { label: "Years of cumulative experience", value: 0 },
    { label: "Lakhs Square feet executed", value: 0 },
    { label: "We have grown in the last year", value: 0 },
  ];

  const [stats, setStats] = useState(initialStats);
  const statsRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const targetStats = [
      { label: "Years of cumulative experience", value: 50 },
      { label: "Lakhs Square feet executed", value: 5 },
      { label: "We have grown in the last year", value: 700 },
    ];

    const animationDuration = 2000;
    const animationInterval = 50;

    const animationSteps = targetStats.map((target, index) => {
      const startValue = initialStats[index].value;
      const stepCount = animationDuration / animationInterval;
      const stepValue = (target.value - startValue) / stepCount;

      return Array.from({ length: stepCount + 1 }, (_, step) => ({
        ...target,
        value: Math.round(startValue + step * stepValue),
      }));
    });

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        let step = 0;

        const animationIntervalId = setInterval(() => {
          if (isMounted && step < animationSteps[0].length) {
            setStats(animationSteps.map((steps) => steps[step]));
            step += 1;
          } else {
            clearInterval(animationIntervalId);
          }
        }, animationInterval);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(statsRef.current);

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white mb-16">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#d65627] to-[#d65627] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Creating Spaces, Inspiring Emotions
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    We are the fastest growing interior turnkey solution
                    providers of the country and are dedicated to provide our
                    customers the best service, quality and ensure that the
                    design is given utmost attention to cater to every client
                    and their space needs.
                  </p>

                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/about"
                      className="rounded-md bg-baseorange px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-custom"
                    >
                      Know more
                    </a>
                  </div>
                </div>

                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={about1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={about2}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={about5}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={about3}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={about4}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  Discover the essence of timeless design with Exemplar. Our
                  seasoned team brings forth a wealth of experience, crafting
                  spaces that tell a story of innovation and elegance. With a
                  relentless pursuit of growth, we are not just transforming
                  spaces; we are shaping the future of interior design, one
                  project at a time.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    These statistics not only reflect our commitment to
                    excellence but also showcase our dedication to staying at
                    the forefront of innovation in the ever-evolving world of
                    interior design. Trust us to transform your space into a
                    masterpiece that stands the test of time.
                  </p>
                </div>
              </div>
              <div
                className="lg:flex lg:flex-auto lg:justify-center"
                ref={statsRef}
              >
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-baseorange">
                        {stat.value}{" "}
                        {stat.label === "Years of cumulative experience" && "+"}{" "}
                        {stat.label === "Lakhs Square feet executed" && "+"}
                        {stat.label === "We have grown in the last year" && "%"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutsection;
