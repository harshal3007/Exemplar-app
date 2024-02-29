import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import certi1 from "../Images/certi1.png"
import certi2 from "../Images/certi2.png"
import certi3 from "../Images/certi3.png"
import certi4 from "../Images/certi4.png"
import certi5 from "../Images/certi5.png"
import certi6 from "../Images/certi6.png"
import certi7 from "../Images/certi7.png"
import certi8 from "../Images/certi8.png"

const products = [
  {
    id: 1,
    name: "BIMFA Level 1",
    imageSrc:
     certi1,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "BIMFA Level 2",
    imageSrc:
    certi2,
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "BIMFA Level 3",
    imageSrc:
    certi3,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "ISO 9001:2015",
    imageSrc:
    certi4,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "ISO 14001:2015",
    imageSrc:
    certi5,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "ISO 45001:2018",
    imageSrc:
    certi6,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "Good Manufacturing practice",
    imageSrc:
    certi7,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 3,
    name: "Startup India",
    imageSrc:
    certi8,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  
];

export default function Certificates() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-medium mb-8 tracking-tight text-gray-900">Certifications and Accreditations</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
