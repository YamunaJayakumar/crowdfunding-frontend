import React from 'react'
import CampaignCard from '../../components/campaigncomponents/CampaignCard'
function CampaignDetails() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* HEADER */}
      <header className="bg-linear-to-r from-orange-400 to-orange-600 rounded-2xl p-6 mb-8 text-white">
        <h1 className="text-3xl font-semibold">Explore Campaigns</h1>
        <p className="text-orange-100 mt-1">
          Discover and support causes that matter to you.
        </p>
      </header>

      {/* FILTER BAR (OPTIONAL BUT REALISTIC) */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="border rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Medical</option>
          <option>Education</option>
          <option>Environment</option>
        </select>

        <select className="border rounded-lg px-4 py-2">
          <option>Sort by</option>
          <option>Most Funded</option>
          <option>Recently Added</option>
          <option>Ending Soon</option>
        </select>
      </div>

      {/* CAMPAIGN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CampaignCard/>
         <CampaignCard/>
          <CampaignCard/>
           <CampaignCard/>
            <CampaignCard/>
             <CampaignCard/> <CampaignCard/>
      </div>
    </div>
  )
}

export default CampaignDetails
