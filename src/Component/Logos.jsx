import Azorte from "../Images/azorte.png"
import trends from "../Images/trends.png"
import eleven from "../Images/eleven.png"
import akcapital from "../Images/ak capital.png"
import reliance from "../Images/reliancedigi.png"
import bro from "../Images/jb brothers.png"
import livspace from "../Images/livspace.png"
import square from "../Images/square.png"
import catalyst from "../Images/catalyst.png"


export default function Logos() {
  return (
    <div className="bg-dahlia py-24 sm:py-32">
      {/* <h1 className="text-4xl font-bold tracking-tight mb-8 text-gray-900 sm:text-4xl flex justify-center">
        Few of our Major Clients
      </h1> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400 p-8 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={trends}
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={reliance}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={Azorte}
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={eleven}
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={akcapital}
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={bro}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={livspace}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={square}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400 p-6 sm:p-10">
            <img
              className="max-h-12 w-full object-contain"
              src={catalyst}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
