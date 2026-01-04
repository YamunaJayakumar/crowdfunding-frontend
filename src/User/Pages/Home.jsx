import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../Components/Hero'

import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Testimonials from '../Components/Testimonials'
import AboutSection from '../Components/AboutSection'
function Home() {
  const navigate = useNavigate();
  const testimonials = [
    { id: 1, name: "Alice Johnson", text: "This platform helped me get my first developer job!", role: "Frontend Developer", img: "/u.jpeg" },
    { id: 2, name: "Michael Lee", text: "The courses are very practical and project-focused.", role: "Data Analyst", img: "/u2.jpeg" },
    { id: 3, name: "Sara Williams", text: "I loved the hands-on approach and mentor support!", role: "UI/UX Designer", img: "/u3.jpeg" },
    { id: 4, name: "David Kim", text: "A great learning experience with real-world projects.", role: "Backend Developer", img: "/u.jpeg" }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />

      {/* STATS SECTION */}
      <div className="my-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "100+", label: "Campaigns" },
            { value: "30+", label: "Causes" },
            { value: "40M+", label: "Lives Impacted" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl  flex flex-col items-center ">
              <h3 className="text-5xl md:text-8xl font-bold bg-linear-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAMPAIGNS SECTION */}
      <section className="py-20 ">
        <h1 className="text-4xl text-center font-semibold mb-4">
          Supporting causes at <span className="font-bold text-orange-600">every level</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover verified campaigns for medical needs, emergencies, education & NGO initiatives.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {[1,2,3,4].map((card)=>(
            <div key={card} className="relative bg-white rounded-3xl shadow-lg overflow-hidden ">
              <img
                className="w-full h-48 object-cover rounded-t-3xl"
                src="https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&w=800&q=60"
                alt="fundriser"
              />
              <span className="absolute top-4 left-4 bg-linear-to-br from-orange-400 to-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Medical
              </span>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Help Aarav Fight Cancer</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  Help support urgent treatment and medical expenses for a child in critical condition.
                </p>

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>₹2,40,000 Raised</span>
                    <span>₹5,00,000 Goal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-linear-to-br from-orange-400 to-orange-600 h-2 rounded w-[48%]"></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-6">
                  <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white transition">
                    Donate
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/campaign-details")}
            className="px-8 py-3 text-orange-600 border border-orange-600 rounded-lg hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white transition"
          >
            View All Campaigns
          </button>
        </div>
      </section>
      <section>
        <AboutSection/>
      </section>

      {/* WHO WE ARE / STORY SECTION */}
      <section className="bg-white py-24">
        <div className="w-full h-80 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')] bg-cover bg-center bg-fixed mb-20" />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <img className="w-44 h-44 rounded-full object-cover grayscale hover:grayscale-0 transition" src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6" alt="" />
            <img className="w-44 h-44 rounded-full object-contain" src="/log2-removebg-preview.png" alt="" />
            <img className="w-44 h-44 rounded-full object-cover grayscale hover:grayscale-0 transition" src="https://c8.alamy.com/comp/F3GW1X/charity-people-from-city-giving-water-to-vari-pilgrim-at-pune-maharashtra-F3GW1X.jpg" alt="" />
          </div>
        </div>

        <div className="text-center mt-20">
          <h1 className="text-4xl font-semibold">
            More Than <span className="text-orange-600 font-bold">10 Million</span> Lives Supported
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A trusted space for transparent fundraising — where every donation tells a story of hope.
          </p>
          <button className="mt-8 bg-linear-to-br from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg">
            Donate Now
          </button>
        </div>

        <div className="w-full h-80 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433')] bg-cover bg-center bg-fixed mt-20" />
      </section>
      {/* textmonials */}
      <section>
    <Testimonials/>
      </section>
      <Footer/>
    </div>
  )
}

export default Home;
