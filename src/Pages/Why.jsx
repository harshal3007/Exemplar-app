import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { GlobeAltIcon, WrenchIcon, PencilSquareIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Experienced Leadership:',
    description:
      'Our seasoned management brings over 50 years of industry expertise, steering Exemplar with a forward-thinking approach and a proven track record of success.',
    icon: UsersIcon,
  },
  {
    name: 'Proven Track Record',
    description:
      'Over the last 5 years, we have successfully delivered more than 100 projects, showcasing our commitment to excellence, reliability, and timely project completion.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Extensive Supplier Network',
    description:
      'Through strategic tie-ups with loose furniture suppliers across India and international importers, we ensure a diverse range of high-quality options for your project needs.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Crafting Excellence',
    description:
      'With a state-of-the-art manufacturing unit dedicated to modular furniture, we control the production process, guaranteeing precision, quality, and on-time delivery for every project.',
    icon: WrenchIcon,
  },
]

export default function Why() {
  return (
    <>
    <Navbar />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Why Should You Choose Us?
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-baseorange">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
     <Footer />
     </>
  )
}

