const values = [
  {
    name: "Initial Consultation",
    description:
      "The first thing we do when we create anything is talk to the customer. During this session, we talk about the client’s needs, budget, and timetable, and we figure out what the project entails.",
  },
  {
    name: "Design Concept",
    description:
      "Depending on what the customer wants, our interior designers come up with a design idea that encompasses the space’s overall style and look. This covers the layout of the room, the choice of furniture and decorations, the colour scheme, and the lighting design.",
  },
  {
    name: "Design Development",
    description:
      "Now that we have a design strategy, our team can start putting it into action. This involves managing the project, working with contractors and vendors, and making sure that furniture, lights, and decorations are set up correctly.",
  },
  {
    name: "Execution",
    description:
      "Now that we have a strategy for how the project will be done, our team can start putting it into action. This involves managing the project, working with contractors and vendors, and making sure that furniture, lights, and decorations are put in the right place.",
  },
  {
    name: "Quality Control",
    description:
      "Our staff does quality control checks throughout the project to make sure that every part of the design plan is being carried out to the greatest standard.",
  },
];

export default function Process() {
  return (
    <div className="bg-white">
      {/* Values section */}
      <div className="mx-auto mb-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Project Process Flow
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From the initial consultation sketch to the final stroke of
            execution, our project process is a captivating narrative, turning
            your aspirations into an aesthetically pleasing reality
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
