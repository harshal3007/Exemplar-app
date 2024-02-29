import product1 from "../Images/product1.jpg"
import product2 from "../Images/product2.jpg"
import product3 from "../Images/product3.jpg"

const products = [
  {
    id: 1,
    name: 'Catalyst',
    price: '$36.00',
    description: 'In the bustling herats of Lower parel - Mumbai, lies headquaters of Catalyst corporation.',
    imageSrc: product2,
    imageAlt: 'product-1',
  },
  {
    id: 1,
    name: 'Distant Mountains Artwork Tee',
    price: '$36.00',
    description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    imageSrc: product1,
    imageAlt: 'product-2',
  },
  {
    id: 1,
    name: 'Distant Mountains Artwork Tee',
    price: '$36.00',
    description: 'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    imageSrc: product3,
    imageAlt: 'product-3',
  },
]



export default function Featured() {
  return (
    <div className="bg-dahlia">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h1>

      

        <div className="mt-8">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-24">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
              >
                <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50">
                    <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
                <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="mt-3 text-gray-500">{product.description}</p>
                </div>
                <div className="sm:col-span-12 md:col-span-7">
                  <dl className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                   
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
