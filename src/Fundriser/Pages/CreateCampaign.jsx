import React from "react";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  p-6 flex justify-center">
      <div className="w-full max-w-7xl">

        {/* HEADER */}
        <header className="mb-8  bg-linear-to-r from-orange-400 to-orange-600 rounded-2xl p-6 text-white">
          <h1 className="text-3xl font-semibold">Create New Campaign</h1>
          <p className="text-orange-100 mt-1">
            Fill out the details below to start your fundraising journey.
          </p>
        </header>

        {/* FORM */}
        <form className="space-y-8">

          {/* CAMPAIGN DETAILS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Campaign Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Campaign Title"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <select className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
                <option>Select Category</option>
                <option>Health</option>
                <option>Education</option>
                <option>Environment</option>
              </select>

              <input
                type="text"
                placeholder="Location"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="text"
                placeholder="Beneficiary Name"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <textarea
              placeholder="Short description (max 150 characters)"
              className="border border-orange-500 rounded-lg px-4 py-2 w-full mt-4 focus:ring-2 focus:ring-orange-400 outline-none"
              rows="3"
            />
          </section>

          {/* FUNDING DETAILS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Funding Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Target Amount (₹)"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="date"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="number"
                placeholder="Minimum Donation (optional)"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          </section>

          {/* STORY & MEDIA */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Story & Media
            </h2>

            <textarea
              placeholder="Tell your story in detail..."
              rows="6"
              className="border border-orange-500 rounded-lg px-4 py-2 w-full mb-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="file"
                className="border border-orange-500 rounded-lg px-4 py-2"
              />
              <input
                type="file"
                className="border border-orange-500 rounded-lg px-4 py-2"
              />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Upload  documents to build trust with donors.
            </p>
          </section>

          {/* VERIFICATION */}
          <section className="bg-white p-6 rounded-xl shadow">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className=" border border-orange-500 mt-1 accent-orange-500"
              />
              <span className="text-sm text-gray-600">
                I confirm that all the information provided is genuine and accurate.
              </span>
            </label>
          </section>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/fundriser-dashboard")}
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-linear-to-br from-orange-400 to-orange-600 text-white px-8 py-2 rounded-lg hover:opacity-90"
            >
              Submit for Review
            </button>
          </div>

          <p className="text-sm text-gray-500 text-right">
            Campaigns go live after admin verification.
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateCampaign;
