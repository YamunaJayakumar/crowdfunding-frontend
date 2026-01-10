import React, { useState } from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";
import { ToastContainer, toast } from 'react-toastify';
import { getAllCampaignAPI } from "../../services/allAPI";
import { useEffect } from "react";

function AdminCampaignAnalytics() {
  const [allCampaigns, setAllCampaigns] = useState([])
  console.log(allCampaigns)

  useEffect(() => {
    getAllCamapign()
  }, [])

  const getAllCamapign = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      'Authorization': `Bearer ${token}`
    }
    try {
      const result = await getAllCampaignAPI(reqHeader)
      if (result.status == 200) {
        setAllCampaigns(result.data)
      }
      else {
        toast.warning("campaign fetch failed")
      }

    } catch (err) {
      console.log(err)
      toast.error("something went wrong")

    }

  }




  return (
    <div className="min-h-screen ">
      <AdminHeader />

      <div className="grid grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 bg-white min-h-screen">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-3 bg-white rounded-2xl shadow-sm  my-6 "style={{marginLeft:'-5rem',marginRight:'3rem'}}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-orange-50 sticky top-0 z-10">
                <tr className="text-left text-gray-700 font-semibold">
                  <th className="p-4">Title</th>
                  <th className="p-4">Fundraiser</th>
                  <th className="p-4">Beneficiary</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Goal</th>
                  <th className="p-4">Raised</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Docs</th>
                  <th className="p-4">Created</th>
                  <th className="p-4">End</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {allCampaigns.length > 0 ? (
                  allCampaigns.map((campaign) => (
                    <tr
                      key={campaign._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-4 font-medium text-gray-800">
                        {campaign.title}
                      </td>

                      <td className="p-4">
                        {campaign.fundraiserId?.username || campaign.fundraiserMail}
                      </td>

                      <td className="p-4">{campaign.beneficiary}</td>
                      <td className="p-4">{campaign.category}</td>

                      <td className="p-4">
                        {campaign?.goalAmount}
                      </td>

                      <td className="p-4 font-semibold text-green-600">
                        {campaign?.totalRaised}
                      </td>

                      <td className="p-4">{campaign.location}</td>

                      <td className="p-4">
                        {campaign.documents?.length > 0 ? (
                          campaign.documents.map((doc, idx) => (
                            <a
                              key={idx}
                              href={`/uploads/documents/${doc}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-blue-600 hover:underline"
                            >
                              View
                            </a>
                          ))
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>

                      <td className="p-4">
                        {new Date(campaign.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-4">
                        {new Date(campaign.endDate).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${campaign.status === "active"
                              ? "bg-green-100 text-green-700"
                              : campaign.status === "pending"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-red-700"
                            }`}
                        >
                          {campaign.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={11} className="p-6 text-center text-gray-500">
                      No campaigns found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>



      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default AdminCampaignAnalytics;
