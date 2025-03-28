import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import project1 from "../Images/IMG_1003.JPG";
import project2 from "../Images/01.jpg";
import project3 from "../Images/02.jpg-1.jpg";
import project4 from "../Images/project59.webp";
import project13 from "../Images/IMG_0997.JPG";
import project12 from "../Images/project43.webp";

const people = [
  {
    name: "Modular Interiors",
    imageUrl: project2,
    bio: "Discover endless possibilities with our modular interiors, designed for seamless adaptation to your evolving needs. Our solutions offer the ideal blend of flexibility, functionality, and style, allowing you to effortlessly customize layouts for your home, office, or any space. Crafted with precision using high-quality materials and innovative engineering, our modular systems ensure durability and longevity. The hassle-free assembly and disassembly of each module enable easy adjustments for new furniture arrangements, diverse functions, or future expansions. Prioritizing functionality, our interiors feature clever storage solutions, ergonomic designs, and intelligent space utilization, transforming cluttered spaces into well-organized, efficient environments. Style is never compromised, as we provide a variety of finishes, colors, and textures to match your aesthetic preferences. Embrace the freedom to reimagine your living or working space with our modular interiors – a reflection of your individuality and a canvas for your imagination.   ",
  },
  {
    name: "Interior Design",
    imageUrl: project1,
    bio: "Step into a world of innovative interior design with our firm, specializing in tailored interior fit-out solutions. Beyond mere aesthetics, we employ psychological analysis to strategically optimize spaces, enhancing productivity and utility. Our expertise lies in creating environments that promote positive work experiences, foster collaboration, and boost productivity. Taking a holistic approach, we analyze spatial dynamics, lighting, acoustics, and ergonomic principles to inspire and support your team. Our designs seamlessly blend functionality and aesthetics, achieving an optimal balance between form and purpose. Through meticulous planning and attention to detail, we optimize space utilization, ensuring every square foot serves a purpose. From agile workstations to collaborative areas and private retreats, we integrate various zones to facilitate smooth workflows and enhance employee engagement. We believe a well-designed interior profoundly impacts well-being and performance.",
  },
  {
    name: "Full Office Interiors",
    imageUrl: project13,
    bio: "Embark on a seamless journey with our comprehensive office interiors service, providing end-to-end solutions for your workspace. From concept to completion, we manage every detail, including in-house MEP consultation, integrating the art of design with technical expertise. Our collaborative approach ensures optimal performance, energy efficiency, and compliance with regulations, seamlessly blending MEP systems into the overall design. Whether for small offices or corporate headquarters, our expertise caters to projects of any scale. Experience the efficiency of our full office interiors service, from space planning to MEP system integration, elevating your office environment with functionality, aesthetics, and top-notch performance. Whether it's lighting design, HVAC systems, power distribution, or plumbing layouts, we leverage our knowledge and experience to create solutions enhancing the functionality, comfort, and safety of your office environment.",
  },
  {
    name: "Turnkey Solutions",
    imageUrl: project3,
    bio: "Experience excellence with our turnkey solutions, specializing in office spaces, residential interiors, and F&B establishments. Meticulously crafted to the highest standards of quality and functionality, our comprehensive services ensure a seamless project delivery. For office spaces, our tailored solutions cater to businesses of all sizes, creating modern, open-plan or traditional settings. From conceptualization to installation, we handle every aspect, allowing you to focus on your core activities. Our talented designers collaborate with you, managing every detail from concept to decoration, making your dream home a reality. In the competitive F&B industry, our turnkey solutions cover design and construction, ensuring captivating spaces that harmonize aesthetics with functionality. From kitchen layout to lighting design, we meticulously plan and execute every element to set your establishment apart.",
  },
  {
    name: "Design Build",
    imageUrl: project4,
    bio: "Experience excellence with our Design-Build Interiors service at Exemplar, seamlessly integrating design and construction for residential, office, retail, or hospitality spaces. Our skilled team handles every aspect, from initial design to final construction and installation. Collaborating closely with you, we develop a comprehensive concept that considers functional requirements, ambiance, branding, and specific design elements. Our streamlined process ensures open communication, real-time adjustments, and efficient timelines, reducing delays and improving cost control. At Exemplar, we're committed to delivering exceptional Design-Build Interiors that transform spaces into captivating and functional environments. Contact us today to bring your vision to life with our seamless approach.",
  },
  {
    name: "Outsourced Design",
    imageUrl: project12,
    bio: "Experience professional design expertise without the need for an in-house team through our Outsource Design as a Service at Exemplar. Our skilled designers, versed in various disciplines, ensure customized solutions, whether for ongoing support, one-time projects, or specific tasks. Despite being outsourced, we prioritize effective communication and collaboration, utilizing tools for seamless interactions. Rigorous quality control measures guarantee high design excellence, and scalability options allow flexibility based on your needs. Benefit from a diverse pool of talent, cost savings, and efficient project management by outsourcing your design needs to us. Contact us today to discuss how our service can enhance your organization with exceptional design solutions tailored to your unique requirements.",
  },
];

export default function Service() {
  return (
    <>
      <Navbar />
      <div className="bg-bronze  py-24 md:py-32 lg:py-20">
        <div className="mx-auto grid max-w-full grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-28">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Exemplar is proud to provide a one-stop shop for anything to do
              with interiors, including modular solutions. As one of the fastest
              growing turnkey interior fit-out solutions provider, we know how
              important it is to have a place that is both useful and nice to
              look at. That’s why we provide a wide range of curated and bespoke
              design solutions along with modular interior solutions for any
              requirement and budget.
            </p>
          </div>
          <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-20 sm:grid-cols-2 lg:mx-0 sm:mx-0 px-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-white">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-white text-justify">
                  {person.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
