import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";

const products = [
  {
    id: 1,
    name: "Catalyst",
    imageSrc: product3,
    imageAlt: "product-1",
  },
  {
    id: 2,
    name: "Blushlace",
    imageSrc: product1,
    imageAlt: "product-2",
  },
  {
    id: 3,
    name: "Residential",
    imageSrc: product2,
    imageAlt: "product-3",
  },
];

export default function Featured() {
  return (
    <div className="bg-dahlia">
      <div className="mx-auto flex flex-col justify-center items-center max-w-7xl px-4 py-16 sm:px-6 sm:py-10 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
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
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center sm:col-span-7 sm:mt-0 md:row-end-1 lg:h-80 md:h-40">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
