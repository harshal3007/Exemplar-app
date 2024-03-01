import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import project1 from "../Images/project1.webp";
import project2 from "../Images/project2.webp";
import project3 from "../Images/project3.webp";


const posts = [
  {
    id: 1,
    title: "Residential",
    href: "/project",
    imageUrl:
    project1,
   
  },
  {
    id: 1,
    title: "Commercial",
    href: "/project",
    imageUrl:
    project2,
  },
  {
    id: 1,
    title: "Retail",
    href: "/project",
    imageUrl: 
    project3,
  },
];

export default function Projectfolder() {
  return (
    <>
      <Navbar />

      <div className="bg-dahlia py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             Our Recent Projects
            </h2>
           
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-3xl font-semibold leading-6 text-white">
                  <a href={post.href} className="no-underline text-white">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
