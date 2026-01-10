import React, { useEffect, useState } from "react";
import { Heart, Smartphone, CreditCard, Landmark, VerifiedIcon } from "lucide-react";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { makeDonationAPI, viewActiveCampaignAPI } from "../../services/allAPI";
import serverURL from "../../services/serverURL";
import { loadStripe } from '@stripe/stripe-js';

function ViewCampaign() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [amount, setAmount] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    name: "", email: "", phone: "", city: "", state: ""
  });
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => { fetchCampaign() }, []);

  const fetchCampaign = async () => {
    try {
      const result = await viewActiveCampaignAPI(id);
      if (result.status === 200) setCampaign(result.data);
      else toast.warning("Campaign does not exist");
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

    const stripe = await loadStripe('pk_test_51SkJJvH65fEjUSXLKX77K2ZZhe5ynTRJDyn27jIZUFUWcwdNue1atw9tedke0v9d1YMS0xJQKstaAbhVsCVrSHfY00KSD9pYKu');

    const reqBody = {
      amount: parseFloat(amount),
      donorName: billingInfo.name,
      donorEmail: billingInfo.email,
      isAnonymous: false,
    };

    try {
      const result = await makeDonationAPI(id, reqBody);
      if (result.status === 200) {
        const { checkoutURL } = result.data;
        window.location.href = checkoutURL;
      } else console.log(result);
    } catch (err) { console.log(err); }
  };

  const progress = campaign ? Math.min((campaign.totalRaised / campaign.goalAmount) * 100, 100) : 0;

  if (!campaign) return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-white py-12 px-4 flex justify-center">
      <div className="max-w-3xl w-full space-y-8">

        {/* Back Button */}
        <Link
          to="/campaign-details"
          className="inline-flex items-center gap-2 text-gray-600 font-medium border border-gray-500 px-4 py-2 rounded-lg"
        >
          <FaArrowRight className="rotate-180" /> Back
        </Link>

        {/* Campaign Info */}
        <div className="space-y-4">
          <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">{campaign.category}</span>
          <h1 className="text-3xl font-semibold text-orange-600">{campaign.title}</h1>
          <p className="text-gray-500 text-sm">Beneficiary: <span className="font-medium text-gray-700">{campaign.beneficiary}</span></p>
          <img src={`${serverURL}/uploads/${campaign.image}`} alt="Campaign" className="w-full rounded-xl h-80 object-cover" />
          <p className="text-gray-700">{campaign.longDescription}</p>

          {/* Verified Campaign */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 flex items-center gap-3">
            <VerifiedIcon className="text-orange-500" size={22} />
            <p className="text-sm text-gray-600">This campaign has been verified by our team.</p>
          </div>
        </div>

        {/* Donation Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg space-y-6">

          <div className="flex items-center gap-3">
            <Heart className="text-orange-500 bg-orange-100 p-2 rounded-full" size={28} />
            <h2 className="text-xl font-semibold text-gray-900">Support this Campaign</h2>
          </div>

          {/* Progress */}
          <div className="bg-gray-100 rounded-full h-3 w-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-orange-400 to-orange-600 transition-all duration-500"
              style={{ width: `${Math.max(progress, 3)}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-orange-600 font-semibold">{ `${Math.max(progress.toLocaleString(), 3)}`}% of goal reached</p>

          {/* Billing Info */}
          <div className="space-y-2">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={billingInfo.name} onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })} />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={billingInfo.email} onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })} />
            <div className="flex gap-2">
              <input type="text" placeholder="City" className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={billingInfo.city} onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })} />
              <input type="text" placeholder="State" className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={billingInfo.state} onChange={(e) => setBillingInfo({ ...billingInfo, state: e.target.value })} />
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm font-medium text-gray-600">Enter Amount</label>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mt-1">
              <span className="font-bold">$</span>
              <input type="number" placeholder="1000" className="w-full outline-none"
                value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
          </div>

          

          {/* Donate Button */}
          <button
            onClick={makePayment}
            disabled={!amount || parseFloat(amount) <= 0}
            className="w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate Now
          </button>

        </div>

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      </div>
    </div>
  );
}

export default ViewCampaign;
