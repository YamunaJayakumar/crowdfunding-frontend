import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllActiveCampaignAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import serverURL from '../../services/serverURL'

function CampaignCard() {
  const [campaignArray, setCampaignArray] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchActiveCampaigns()
  }, [])

  const fetchActiveCampaigns = async () => {
        const token = sessionStorage.getItem("token");
        const authHeader =
            { Authorization: `Bearer ${token}` }
    try {
      const result = await getAllActiveCampaignAPI(authHeader)
      if (result.status === 200) {
        setCampaignArray(result.data)
      } else {
        toast.warning("Something went wrong")
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        campaignArray.length > 0 ? (
          campaignArray.map(item => {
            const progress = Math.min(
              (item.totalRaised / item.goalAmount) * 100,
              100
            )

            return (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                 {/* Category */}
                <span className="absolute mt-4 ml-4 bg-linear-to-br from-orange-400 to-orange-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
                {/* Image */}
                <img
                  src={`${serverURL}/uploads/${item.image}`}
                  alt="campaign"
                  className="w-full h-48 object-cover"
                />

               

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Raised: ₹{item.totalRaised}</span>
                      <span>Goal: ₹{item.goalAmount}</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-orange-400 to-orange-600 transition-all duration-500"
                        style={{ width: `${Math.max(progress, 3)}%` }}
                      />
                    </div>

                    <p className="text-right text-xs text-orange-600 font-medium mt-1">
                      {Math.floor(progress)}% funded
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                   

                    <button
                      onClick={() => navigate(`/campaign/view/${item._id}`)}
                      className="text-sm px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-linear-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition"
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <p className="text-center col-span-full text-gray-500">Loading campaigns...</p>
        )
      }

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  )
}

export default CampaignCard
