import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../Components/Hero'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Testimonials from '../Components/Testimonials'
import AboutSection from '../Components/AboutSection'
import { getLatestActiveCampaignAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import { FaDollarSign } from 'react-icons/fa'
import serverURL from '../../services/serverURL'
function Home() {
  const navigate = useNavigate();
  const [latestCamapign, setLatestCampaign] = useState([])
  console.log(latestCamapign)

  useEffect(() => {
    handleLatestCampaign()
  }, [])
  const token = sessionStorage.getItem("token");
  const handleLatestCampaign = async () => {
    // or wherever you store it
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }

    try {
      const result = await getLatestActiveCampaignAPI(reqHeader)
      if (result.status == 200) {
        setLatestCampaign(result.data)
      }
      else {
        console.log(result)

      }

    } catch (err) {
      console.log(err);
      toast.warning('error')

    }
  }


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
      <section className="py-20">
        <h1 className="text-4xl text-center font-semibold mb-4">
          Supporting causes at <span className="font-bold text-orange-600">every level</span>
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover verified campaigns for medical needs, emergencies, education & NGO initiatives.
        </p>

        {/* CAMPAIGN GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {latestCamapign?.length > 0 ? (
            latestCamapign.map((item) => {
              // const progress = Math.min(
              //   (item.totalRaised / item.goalAmount) * 100,
              //   100
              // );

              return (
                <div
                  key={item._id}
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full"
                >
                  {/* IMAGE */}
                  <img
                    className="w-full h-48 object-cover"
                    src={`${serverURL}/uploads/${item?.image}`}
                    alt="fundraiser"
                  />

                  <span className="absolute top-4 left-4 bg-linear-to-br from-orange-400 to-orange-600 text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 min-h-14">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2 min-h-10">
                      {item.shortDescription}
                    </p>

                    {/* PROGRESS */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>₹{item.totalRaised.toLocaleString()} Raised</span>
                        <span>₹{item.goalAmount.toLocaleString()} Goal</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-linear-to-br from-orange-400 to-orange-600 h-2"
                          style={{
                            width: `${Math.min(
                              ((item.totalRaised || 0) / (item.goalAmount || 1)) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* ACTION – PUSHED TO BOTTOM */}
                    <div className="mt-auto pt-6">
                      <button
                        onClick={() => navigate(`/campaign/view/${item._id}`)}
                        className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white px-4 py-2 px-4 rounded-lg"
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>

              );
            })
          ) : (
            <p className="text-center col-span-4 text-gray-500">
             With a focus on transparency, trust, and accessibility, we ensure that every campaign is verified and every donor can track their impact.
            </p>
          )}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-14">
          {token ? (
            <button
              onClick={() => navigate('/campaigns/acive/all')}
              className="px-8 py-3 text-orange-600 border border-orange-600 rounded-lg hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white transition"
            >
              view All camapaigns
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 text-orange-600 border  rounded-lg bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white transition"
            >
               View Campaigns
            </button>
          )}
        </div>
      </section>

      <section>
        <AboutSection />
      </section>

      {/* WHO WE ARE / STORY SECTION */}
      <section className="bg-white py-24">
        <div className="w-full h-80 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')] bg-cover bg-center bg-fixed mb-20" />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <img className="w-44 h-44 rounded-full object-cover grayscale hover:grayscale-0 transition" src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6" alt="" />
            <img className="w-44 h-44 rounded-full object-contain" src="/log2-removebg-preview.png" alt="" />
            <img className="w-44 h-44 rounded-full object-cover grayscale hover:grayscale-0 transition" src="https://plus.unsplash.com/premium_photo-1663054686094-fe0a3c749140?q=80&w=1170&auto=format&fit=crop"alt="" />
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
        <Testimonials />
      </section>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  )
}

export default Home;
