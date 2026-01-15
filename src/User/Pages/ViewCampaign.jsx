import React, { useEffect, useState } from "react";
import { Heart, VerifiedIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { makeDonationAPI, viewActiveCampaignAPI } from "../../services/allAPI";
import serverURL from "../../services/serverURL";
import { loadStripe } from "@stripe/stripe-js";

function ViewCampaign() {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);
  const [amount, setAmount] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
  });

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setBillingInfo((prev) => ({
        ...prev,
        name: user?.username || "",
        email: user?.email || "",
      }));
    }
    fetchCampaign();
  }, []);

  const fetchCampaign = async () => {
    try {
      const result = await viewActiveCampaignAPI(id);
      if (result.status === 200) {
        setCampaign(result.data);
      } else {
        toast.warning("Campaign does not exist");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const makePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Enter a valid donation amount");
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51SkJJvH65fEjUSXLKX77K2ZZhe5ynTRJDyn27jIZUFUWcwdNue1atw9tedke0v9d1YMS0xJQKstaAbhVsCVrSHfY00KSD9pYKu"
    );

    const reqBody = {
      amount: parseFloat(amount),
      donorName: billingInfo.name,
      donorEmail: billingInfo.email,
      isAnonymous: false,
    };

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await makeDonationAPI(id, reqBody, reqHeader);
      if (result.status === 200) {
        window.location.href = result.data.checkoutURL;
      }
    } catch (err) {
      console.log(err);
      toast.error("Payment failed");
    }
  };

  if (!campaign) {
    return (
      <p className="text-center mt-20 text-gray-500">Loading campaign...</p>
    );
  }

  const progress = Math.min(
    (campaign.totalRaised / campaign.goalAmount) * 100,
    100
  );

  return (
    <div className="min-h-screen bg-white py-10 px-4 flex justify-center">
      <div className="max-w-6xl w-full space-y-6">

        {/* Back Button */}
        <Link
          to="/campaigns/acive/all"
          className="inline-flex items-center gap-2 text-gray-600 font-medium border border-gray-400 px-4 py-2 rounded-lg"
        >
          <FaArrowRight className="rotate-180" />
          Back
        </Link>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION — CAMPAIGN DETAILS */}
          <div className="lg:col-span-2 space-y-6">

            {/* Campaign Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
              <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
                {campaign.category}
              </span>

              <h1 className="text-3xl font-semibold text-orange-600">
                {campaign.title}
              </h1>

              <p className="text-sm text-gray-500">
                Beneficiary:{" "}
                <span className="font-medium text-gray-700">
                  {campaign.beneficiary}
                </span>
              </p>

              <img
                src={`${serverURL}/uploads/${campaign.image}`}
                alt="Campaign"
                className="w-full h-80 object-cover rounded-xl"
              />

              <p className="text-gray-700 leading-relaxed">
                {campaign.longDescription}
              </p>

              {/* Verified */}
              <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 flex items-center gap-3">
                <VerifiedIcon className="text-orange-500" size={22} />
                <p className="text-sm text-gray-600">
                  This campaign has been verified by our team.
                </p>
              </div>
            </div>

            {/* Fundraiser Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold text-lg">
                {campaign?.fundraiserId?.username?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-xs text-gray-500">Fundraiser</p>
                <p className="text-sm font-semibold text-gray-800">
                  {campaign?.fundraiserId?.username}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SECTION — DONATION CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg space-y-6">

              <div className="flex items-center gap-3">
                <Heart className="text-orange-500 bg-orange-100 p-2 rounded-full" size={28} />
                <h2 className="text-xl font-semibold text-gray-900">
                  Support this Campaign
                </h2>
              </div>

              {/* Progress */}
              <div>
                <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-orange-400 to-orange-600"
                    style={{ width: `${Math.max(progress, 3)}%` }}
                  />
                </div>
                <p className="text-right text-sm text-orange-600 font-semibold mt-1">
                  {Math.max(progress.toFixed(1), 3)}% of goal reached
                </p>
              </div>

              {/* Billing Info */}
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={billingInfo.name}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                />

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={billingInfo.city}
                    onChange={(e) =>
                      setBillingInfo({ ...billingInfo, city: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    value={billingInfo.state}
                    onChange={(e) =>
                      setBillingInfo({ ...billingInfo, state: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Enter Amount
                </label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1">
                  <span className="font-bold">₹</span>
                  <input
                    type="number"
                    placeholder="1000"
                    className="w-full outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={makePayment}
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:shadow-lg disabled:opacity-50"
              >
                Donate Now
              </button>

            </div>
          </div>

        </div>

        <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      </div>
    </div>
  );
}

export default ViewCampaign;
