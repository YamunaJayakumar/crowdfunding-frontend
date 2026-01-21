import React from "react";

function Testimonials() {
  return (
    <div className="py-10 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why People <span className="text-orange-600">Love</span> Us
        </h2>

        <div className="flex gap-8 justify-center flex-wrap">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl w-75
            shadow-lg hover:shadow-xl transition-shadow duration-300
            border-t-4 border-orange-500">
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Joining this platform allowed me to contribute to causes I care about.
            </p>

            <div className="flex items-center">
              <img
                src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg"
                alt="Emily Johnson"
                className="w-12 h-12 rounded-full mr-4 border-2 border-orange-400"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Emily Johnson</h4>
                <p className="text-xs text-gray-500">Volunteer</p>
                <div className="text-orange-500 text-sm">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl w-75
            shadow-lg hover:shadow-xl transition-shadow duration-300
            border-t-4 border-orange-500">
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              This platform made donating simple and transparent.
            </p>

            <div className="flex items-center">
              <img
                src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg"
                alt="James Wilson"
                className="w-12 h-12 rounded-full mr-4 border-2 border-orange-400"
              />
              <div>
                <h4 className="font-semibold text-gray-800">James Wilson</h4>
                <p className="text-xs text-gray-500">Donor</p>
                <div className="text-orange-500 text-sm">★★★★★</div>
              </div>
            </div>
          </div>

          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl w-75
            shadow-lg hover:shadow-xl transition-shadow duration-300
            border-t-4 border-orange-500">
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Joining this platform allowed me to contribute to causes I care about.
            </p>

            <div className="flex items-center">
              <img
                src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg"
                alt="Emily Johnson"
                className="w-12 h-12 rounded-full mr-4 border-2 border-orange-400"
              />
              <div>
                <h4 className="font-semibold text-gray-800">Emily Johnson</h4>
                <p className="text-xs text-gray-500">Volunteer</p>
                <div className="text-orange-500 text-sm">★★★★★</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;
