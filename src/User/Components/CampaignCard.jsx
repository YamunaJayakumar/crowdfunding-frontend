import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllActiveCampaignAPI } from "../../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import serverURL from "../../services/serverURL";
import { CampaignFilterContext } from "../../context/CampaignFilterContext";

function CampaignCard() {
  const [campaignArray, setCampaignArray] = useState([]);
  const navigate = useNavigate();

  const { searchKey } = useContext(CampaignFilterContext);

  useEffect(() => {
    fetchActiveCampaigns();
  }, []);

  const fetchActiveCampaigns = async () => {
    const token = sessionStorage.getItem("token");
    const authHeader = { Authorization: `Bearer ${token}` };

    try {
      const result = await getAllActiveCampaignAPI(authHeader);
      if (result.status === 200) {
        setCampaignArray(result.data);
      }
    } catch (err) {
      toast.error("Failed to load campaigns");
    }
  };

  // ✅ APPLY SEARCH FILTER
  const filteredCampaigns = campaignArray.filter(campaign =>
    campaign.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredCampaigns.length > 0 ? (
        filteredCampaigns.map(item => {
          const progress = Math.min(
            (item.totalRaised / item.goalAmount) * 100,
            100
          );

          return (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <span className="absolute mt-4 ml-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>

              <img
                src={`${serverURL}/uploads/${item.image}`}
                alt="campaign"
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.shortDescription}
                </p>

                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>₹{item.totalRaised}</span>
                    <span>₹{item.goalAmount}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: `${Math.max(progress, 3)}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/campaign/view/${item._id}`)}
                  className="w-full text-sm py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
                >
                  Donate
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No campaigns found
        </p>
      )}

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
}

export default CampaignCard;
