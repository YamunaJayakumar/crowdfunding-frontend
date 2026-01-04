import React, { useState } from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";
status
function AdminCampaignAnalytics() {
     const campaigns = [
    {
      id: 1,
      title: "Medical Help for Ravi",
      category: "Medical",
      target: "₹2,00,000",
      createdAt: "2026-01-04",
      status: "active",
    },
    {
      id: 2,
      title: "School Supplies for Kids",
      category: "Education",
      target: "₹50,000",
      createdAt: "2026-01-02",
      status: "pending",
    },
    {
      id: 3,
      title: "Flood Relief Kerala",
      category: "Disaster",
      target: "₹5,00,000",
      createdAt: "2025-12-28",
      status: "closed",
    },
  ];
  return (
    <div> <div>
      <AdminHeader />

      <div className="grid grid-cols-4 min-h-screen">
        {/* SIDEBAR */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-3 mt-18 ">
          
            
               {/* Campaign Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
            {campaigns.map(campaign => (
              <div
                key={campaign.id}
                className="bg-white rounded-xl shadow p-5 space-y-2"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">
                    {campaign.title}
                  </h2>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
    campaign.status === "active"
      ? "bg-green-100 text-green-700"
      : campaign.status === "pending"
      ? "bg-orange-100 text-orange-700"
      : "bg-red-100 text-red-700"
  }`}>
                                    {campaign.status}
                                </span>
                  
                </div>

                <p className="text-sm text-gray-500">
                  Category: {campaign.category}
                </p>
                <p className="text-sm text-gray-500">
                  Target: {campaign.target}
                </p>
                <p className="text-xs text-gray-400">
                  Created on {campaign.createdAt}
                </p>
              </div>
            ))}
          </div>

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCampaignAnalytics