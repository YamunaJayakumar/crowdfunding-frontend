import React from "react";
import { Search, Filter, Layers, TrendingUp, Clock } from "lucide-react";
import CampaignCard from "../Components/CampaignCard";

function CampaignDetails() {
  return (
    <div className="min-h-screen bg-white p-6">
      
      {/* TOP HERO SECTION */}
      <header className="bg-linear-to-r from-orange-400 to-orange-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold drop-shadow-sm">Explore Campaigns</h1>
        <p className="text-orange-100 mt-2 text-lg">
          Together, we can create change — support causes that inspire you.
        </p>

        {/* SEARCH INPUT */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-lg px-4 py-2 w-full sm:w-3/4">
            <Search className="text-white opacity-80" size={20} />
            <input
              type="text"
              placeholder="Search for campaigns, names, or keywords..."
              className="bg-transparent border-none focus:outline-none w-full text-white placeholder:text-orange-100"
            />
          </div>
        </div>
      </header>

      {/* FILTER + SORT BAR */}
      <div className="bg-white rounded-xl shadow p-4 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-orange-600"/>
            <select className="border border-orange-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300">
              <option>All Categories</option>
              <option>Medical</option>
              <option>Education</option>
              <option>Environment</option>
              <option>Animal Welfare</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-orange-600"/>
            <select className="border  border-orange-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400">
              <option>Sort by</option>
              <option >Most Funded</option>
              <option>Recently Added</option>
              <option>Trending</option>
              <option>Ending Soon</option>
            </select>
          </div>

         
        </div>
      </div>

      {/* CAMPAIGN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>

      {/* FOOTER TAGLINE */}
      <div className="text-center mt-12 text-gray-500">
        <Clock className="mx-auto mb-2" />
        <p>New campaigns get added every day. Stay tuned and keep supporting </p>
      </div>
    </div>
  );
}

export default CampaignDetails;
