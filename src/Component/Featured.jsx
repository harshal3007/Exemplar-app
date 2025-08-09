import product1 from "../Images/project57.webp";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import video4 from "../Video/video.mp4";

const products = [
  {
    id: 1,
    name: "Office Space Lower Parel, Mumbai",
    imageSrc: product3,
    imageAlt: "product-1",
    imageDiscription:
      "A 10,000 sqft area space designed and executed in a record time of 45 days in the heart of Mumbai. Designed for comfort with a smooth transition and demarcation between leaders and executives, along with recreation and pantry areas, while ensuring luxury.",
  },
  {
    id: 2,
    name: "Coworking Space BKC, Mumbai",
    imageSrc: product1,
    imageAlt: "product-2",
    imageDiscription:
      "Gracefully executed, a 12000 sqft co-working space in the marquee of Mumbai ONE BKC, to accommodate a whopping 350 seats while maintaining a spacious and elegant ambience, makes for a perfectly collaborative office setup.",
  },
  {
    id: 3,
    name: "Residence, Mumbai",
    imageSrc: product2,
    imageAlt: "product-3",
    imageDiscription:
      "A 7BHK penthouse designed and executed within two months to accommodate a minimalist and elegant house for a family of dynamic individuals.",
  },
];

export default function Featured() {
  return (
    <div className="bg-bronze pt-16">
      <div className="mx-auto flex flex-col justify-center items-center max-w-7xl px-4 py-16 sm:px-6 sm:py-10 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Featured Projects
        </h1>

        <div className="mt-20 ">
          <div className="space-y-24 ">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 text-xl sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-2 md:gap-x-8 lg:gap-x-8"
              >
                <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center  "
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-center gap-5 sm:col-span-7 sm:mt-0 md:row-end-1 lg:h-80 md:h-40">
                  <h3 className="text-3xl font-medium text-white">
                    {product.name}
                  </h3>
                  <p className="text-lg font-small text-white">
                    {product.imageDiscription}
                  </p>
                </div>
              </div>
            ))}
          </div>
      <div className="w-full mt-6">
  <video 
    src={video4}
    autoPlay
    loop
    muted 
    controls 
    className="w-full h-auto object-cover rounded-lg"
  >
    Your browser does not support the video tag.
  </video>
</div> 
        </div>
      </div>
    </div>
  );
}
