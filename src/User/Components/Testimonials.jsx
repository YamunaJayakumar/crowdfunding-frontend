import React from 'react'

function Testimonials() {
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Volunteer",
    text: "Joining this platform allowed me to contribute to causes I care about. I could see the impact of my donations firsthand.",
    img: "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Donor",
    text: "I wanted a trustworthy place to support local charities. This platform made donating simple and transparent.",
    img: "https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "Laura Smith",
    role: "Beneficiary",
    text: "Thanks to the community support here, I received help when I needed it the most. The process was smooth and kind.",
    img: "https://img.freepik.com/free-photo/happy-young-woman-standing-isolated-white-wall_171337-18037.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Fundraiser",
    text: "Running a campaign was easier than I imagined. The tools helped me reach more people and raise funds quickly.",
    img: "https://thehoncho.app/wp-content/uploads/2025/06/white-background-portrait-example-2-1024x683.jpg",
  },
  {
    id: 5,
    name: "Michael Roberts",
    role: "Charity Organizer",
    text: "Managing donations and volunteers has never been simpler. The platform’s dashboards and updates keep everyone informed.",
    img: "https://img.freepik.com/premium-photo/close-up-young-woman-smiling-wearing-white-tshirt-white-background_719646-2648.jpg",
  },
  {
    id: 6,
    name: "Chris Brown",
    role: "Supporter",
    text: "I love seeing how my contributions make a real difference. Transparent reporting and updates make me feel connected to the cause.",
    img: "https://as1.ftcdn.net/jpg/01/85/04/84/1000_F_185048418_X1kohHSgyAbPJQxPHurs4uXCTmcRSNAp.jpg",
  },
];

  return (
    <div>
        <div className="py-3 px-4">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl  font-bold text-center mb-4">Why People <span className='text-orange-500'>Love</span> Us</h2>
                
                {/*  */}
                <div className="grid  gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {testimonials.map((t) => (
    <div
      key={t.id}
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
    >
      <p className="text-gray-700 mb-4 text-sm">{t.text}</p>

      <div className="flex items-center mt-auto">
        <img
          src={t.img}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{t.name}</h4>
          <p className="text-gray-500 text-xs">{t.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">&#9733;</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
        </div>
    </div>
  )
}

export default Testimonials