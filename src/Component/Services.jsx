import {
  HomeModernIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Modular Interiors",
    description:
      "Our modular systems are carefully crafted using high-quality materials and innovative engineering techniques, ensuring durability and longevity. ",
    icon: HomeIcon,
  },
  {
    name: "Interior Design",
    description:
      "We believe that a well-designed interior has a profound impact on the well-being and performance of individuals.",
    icon: HomeModernIcon,
  },
  {
    name: "Full Office Interiors",
    description:
      "From small office spaces to large corporate headquarters, we have the expertise to handle projects of any scale.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Turnkey Solutions",
    description:
      "We specialise in providing comprehensive turnkey solutions for office spaces, residential interiors, and F&B (Food & Beverage) spaces.",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Design Build",
    description:
      "Whether it’s a residential space, office, retail store, or hospitality establishment, our Design-Build Interiors approach ensures a cohesive and well-executed result.",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Outsourced Design",
    description:
      "Outsource Design as a Service is a comprehensive solution we offer to businesses seeking professional design expertise without the need to maintain an in-house design team",
    icon: CursorArrowRippleIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-baseorange">
            WHAT WE’RE OFFERING
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Exemplar provides a wide range of curated and bespoke design
            solutions along with modular interior solutions for any requirement
            and budget.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 cursor-pointer">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-baseorange">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
                <p className="mt-2">
                  <a
                    href={feature.href}
                    className="text-sm font-semibold leading-6 text-baseorange"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
