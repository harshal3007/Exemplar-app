import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const features = [
  { name: "1. Health and Safety", description: "Regular risk assessments are conducted to identify potential hazards, and appropriate measures are implemented to mitigate risks." },
  {
    name: "2. Environmental Responsibility",
    description:
      "We strive to minimize our environmental impact by adopting sustainable practices in our design and construction processes.",
  },
  { name: "3. Compliance with Regulations", description: 'Regular audits and reviews are conducted to assess our compliance and identify areas for improvement.' },
  { name: "4. Continuous Improvement ", description: "Feedback from team members, clients, and stakeholders is actively sought to enhance our practices." },
  {
    name: "5. Recycle",
    description:
      "Waste reduction and recycling initiatives are promoted to minimize our carbon footprint",
  },
  {
    name: "6. Disaster Management",
    description:
      "Emergency procedures are in place to respond effectively to any unforeseen incidents.",
  },
];

export default function HSE() {
  return (
    <>
      <Navbar />
      <div className="bg-dahlia">
        <div aria-hidden="true" className="relative">
          <img
            src="https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative mx-auto mt-4 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Health, Safety, and Environment (HSE) Policy
            </h2>
            <p className="mt-4 text-gray-500">
              At Exemplar, we are committed to maintaining a safe,
              healthy, and environmentally responsible workplace. Our HSE policy
              reflects our dedication to creating an environment that
              prioritizes the well-being of our team members, clients, and the
              community.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Footer />
    </>
  );
}
