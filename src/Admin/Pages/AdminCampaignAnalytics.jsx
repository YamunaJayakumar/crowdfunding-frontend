import React from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";

function AdminCampaignAnalytics() {
  // Example data: All fundraisers with their campaigns
  const fundraisers = [
    {
      id: 1,
      username: "Niha",
      email: "niha@gmail.com",
      role: "fundraiser",
      campaigns: [
        {
          id: 101,
          title: "Medical Help for Ravi",
          category: "Medical",
          target: "₹2,00,000",
          createdAt: "2026-01-04",
          status: "active",
        },
        {
          id: 102,
          title: "School Supplies for Kids",
          category: "Education",
          target: "₹50,000",
          createdAt: "2026-01-02",
          status: "pending",
        },
      ],
    },
    {
      id: 2,
      username: "Rahul",
      email: "rahul@gmail.com",
      role: "fundraiser",
      campaigns: [
        {
          id: 201,
          title: "Flood Relief Kerala",
          category: "Disaster",
          target: "₹5,00,000",
          createdAt: "2025-12-28",
          status: "closed",
        },
      ],
    },
  ];

  // Flatten campaigns for table
  const allCampaigns = fundraisers.flatMap((fundraiser) =>
    fundraiser.campaigns.map((campaign) => ({
      ...campaign,
      fundraiserName: fundraiser.username,
      fundraiserEmail: fundraiser.email,
      fundraiserRole: fundraiser.role,
    }))
  );

  return (
    <div className="min-h-screen ">
      <AdminHeader />

      <div className="grid grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 bg-white min-h-screen">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-3  ">
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm ">
            <table className="min-w-full text-sm ">
              <thead>
                <tr className="bg-orange-300 text-left">
                  <th className="p-3 ">Campaign Title</th>
                  <th className="p-3 ">Fundraiser</th>
                  <th className="p-3 ">Email</th>
                  <th className="p-3 ">Role</th>
                  <th className="p-3 ">Category</th>
                  <th className="p-3 ">Target</th>
                  <th className="p-3 ">Created On</th>
                  <th className="p-3 ">Status</th>
                </tr>
              </thead>
              <tbody>
                {allCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b ">{campaign.title}</td>
                    <td className="p-3  border-b ">{campaign.fundraiserName}</td>
                    <td className="p-3   border-b">{campaign.fundraiserEmail}</td>
                    <td className="p-3  border-b">{campaign.fundraiserRole}</td>
                    <td className="p-3  border-b ">{campaign.category}</td>
                    <td className="p-3  border-b">{campaign.target}</td>
                    <td className="p-3  border-b">{campaign.createdAt}</td>
                    <td className="p-3  border-b">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          campaign.status === "active"
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCampaignAnalytics;
