import React, { useContext } from "react";
import { Search, Clock } from "lucide-react";
import CampaignCard from "../Components/CampaignCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CampaignFilterContext } from "../../context/CampaignFilterContext";

function CampaignDetails() {
  const { searchKey, setSearchKey } = useContext(CampaignFilterContext);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="max-w-full px-6 mt-6">
        <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Explore Campaigns
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white transition border rounded-xl p-3"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
          <p className="text-white/80 mb-6">
            Discover and support campaigns that make a real difference
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-xl px-4 py-3 text-gray-700 max-w-xl">
            <Search className="text-gray-400 mr-3" />
            <input
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search campaigns by title..."
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>
      </header>

      {/* Campaign Cards */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        <CampaignCard />
      </main>

      {/* Footer Info */}
      <div className="text-center mt-16 pb-10 text-gray-500">
        <Clock className="mx-auto mb-2" />
        <p className="text-sm">New campaigns are added daily</p>
      </div>

    </div>
  );
}

export default CampaignDetails;
