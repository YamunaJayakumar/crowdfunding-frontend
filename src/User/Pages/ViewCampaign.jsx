import React, { useState } from "react";
import {
  Heart,
  Smartphone,
  CreditCard,
  Landmark,
  VerifiedIcon,
} from "lucide-react";
import { FaExclamationCircle } from "react-icons/fa";




function ViewCampaign() {
  const [amount, setAmount] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false)

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    
  });


  const campaign = {
    title: "Help Aarav Fight Cancer",
    category: "Medical",
    beneficiaryName: "Aarav Sharma",
    raisedAmount: 240000,
    targetAmount: 500000,
    story: `Aarav Sharma is a bright and cheerful 7-year-old from Pune who has been diagnosed with a rare form of childhood cancer known as Neuroblastoma. 
    Until a few months ago, Aarav lived a normal life—attending school, playing cricket, and spending evenings drawing cartoons. Everything changed when his health rapidly declined. Multiple hospital visits confirmed the diagnosis, and since then the family has been seeking treatment options across hospitals and cancer centers.

    His treatment includes chemotherapy, targeted therapy, and a possible bone-marrow transplant, all of which are financially overwhelming. Aarav’s father drives a cab and his mother is a homemaker. Despite selling valuables and borrowing money, the expenses continue to rise. This fundraiser supports medical bills, hospital fees, medicines, and treatment continuity. Even a small donation can help give Aarav a fair chance at recovery:

    Your kindness matters. Your support matters. Together, we can help Aarav fight this battle.
    `,
    image: "https://images.unsplash.com/photo-1578496781985-452d4a934d50",
    verified: true,
    verification: {
      documents: [
        "Doctor’s Diagnosis Certificate",
        "Hospital Treatment Estimate",
        "Patient Identity Proof",
      ]
    }

  };

  const progress = Math.min(
    (campaign.raisedAmount / campaign.targetAmount) * 100,
    100
  );

  const handlePayment = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setShowThanks(true);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* LEFT SECTION */}
        <div className="lg:w-2/3 space-y-8">

          {/* Title Section */}
          <div className="space-y-2">
            <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
              {campaign.category}
            </span>
            <h1 className="text-4xl font-semibold text-orange-600">
              {campaign.title}
            </h1>
            <p className="text-gray-500 text-sm">
              Beneficiary:{" "}
              <span className="font-medium text-gray-700">
                {campaign.beneficiaryName}
              </span>
            </p>
          </div>

          {/* Main Image */}
          <img
            src={campaign.image}
            alt="Campaign"
            className="w-full rounded-xl h-96 object-cover"
          />

          {/* Story Section */}
          <div className="bg-white text-gray-700 space-y-4 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900">
              About the Campaign
            </h2>
            <p>{campaign.story}</p>
          </div>

          {/* verificarion and document */}
          {
            campaign.verified && (
              <div className="bg-gray-50 border border-gray-400 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <VerifiedIcon className="text-orange-500 " size={22} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Platform-verified campaign
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  This campaign has been verified by our team by reviewing medical documents
                  and beneficiary identity.

                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    Documents reviewed
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {
                      campaign.verification.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>

                      )


                      )
                    }
                  </ul>
                </div>
              </div>
            )
          }

          <hr className="bg-gray-400" />

          {/* Organizer Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-600">Verified organizer</h3>

            <div className="flex items-center gap-4">
              {/* Profile Image - FIXED CIRCLE */}
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?fm=jpg&q=60&w=3000"
                alt="Fundraiser"
                className="w-16 h-16 rounded-full object-cover "
              />

              {/* Details */}
              <div className="flex items-center gap-2">
                <div >
                  <div className="flex items-center gap-2">
                    <h4 className="text-md font-medium text-gray-800">
                      Sara Bennet
                    </h4>
                    <VerifiedIcon className="text-orange-500" size={20} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Bengaluru, Karnataka
                  </p>
                </div>


              </div>
            </div>

            <p className="text-xs text-gray-500">Created 10 days ago</p>
            {/* report modal */}
            <button onClick={() => setShowReportModal(!showReportModal)} className=" flex  items-center gap-2 border border-gray-300 text-sm px-4 py-3 rounded-lg hover:bg-gray-100 transition">
              <FaExclamationCircle className="text-orange-500" size={20} /> Report fundraiser
            </button>

            {/* modal form */}
            {showReportModal && (
              <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                <div
                  className="bg-white w-full max-w-md rounded-xl p-6 space-y-4 shadow-lg"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="report-title"
                >
                  <h2 id="report-title" className="text-lg font-semibold text-gray-800">
                    Report Fundraiser
                  </h2>

                  <p className="text-sm text-gray-600">
                    Tell us why you are reporting this campaign.
                  </p>

                  <textarea
                    className="w-full border-orange-500 rounded-lg p-3 text-sm "
                    rows="4"
                    placeholder="Describe the issue..."
                  />

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowReportModal(false)}
                      className="px-4 py-2 text-sm rounded-lg border border-orange-500 text-orange-400 hover:border-orange-600 hover:text-orange-600"
                    >
                      Cancel
                    </button>

                    <button
                      className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Submit Report
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>




        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-1/3 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-lg space-y-8 mt-32 h-fit">

          {/* Header */}
          <div className="flex items-center gap-3">
            <Heart className="text-orange-500 bg-orange-100 p-2 rounded-full" size={38} />
            <h2 className="text-2xl font-semibold text-gray-900">Support this Campaign</h2>
          </div>

          {/* Progress Box */}
          <div className="bg-gray-50  border-gray-400  border rounded-xl p-5 shadow-inner space-y-4">
            <div className="flex justify-between text-gray-700 text-sm font-medium">
              <span>${campaign.raisedAmount.toLocaleString()} raised</span>
              <span>Goal: ${campaign.targetAmount.toLocaleString()}</span>
            </div>

            <div className="relative w-full h-3 bg-gray-400 border border-gray-400  rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full transition-all"
                style={{ width: `${Math.max(progress, 3)}%` }}
              />
            </div>

            <p className="text-right font-semibold text-orange-600">
              {Math.floor(progress)}%  of goal reached
            </p>
          </div>

          {/* Billing Information */}
          <div className="bg-gray-50 border border-gray-400 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-semibold text-gray-700">
              Billing Information
            </h4>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm"
              value={billingInfo.name}
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm"
              value={billingInfo.email}
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number (optional)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm"
              value={billingInfo.phone}
              onChange={(e) =>
                setBillingInfo({ ...billingInfo, phone: e.target.value })
              }
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 text-sm"
                value={billingInfo.city}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, city: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="State"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 text-sm"
                value={billingInfo.state}
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, state: e.target.value })
                }
              />
            </div>

            
          </div>


          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">Enter Amount</label>
            <div className="flex items-center gap-2 px-4 py-3  rounded-xl shadow-sm bg-gray-50 border border-gray-400  transition">
              <span className="font-bold">$</span>
              <input
                type="number"
                placeholder="1000"
                className="w-full bg-white rounded-xl border-none  font-light"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-gray-50 border border-gray-400 rounded-xl px-4 py-4 space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Select Payment Method</h4>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" defaultChecked />
              <Smartphone size={18} className="text-orange-500" /> UPI
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <CreditCard size={18} className="text-orange-500" /> Card
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" />
              <Landmark size={18} className="text-orange-500" /> Net Banking
            </label>
          </div>

          {/* Donate Button */}
          <button
            aria-label="Donate to this campaign"
            onClick={handlePayment}
            disabled={!amount || parseFloat(amount) <= 0}
            className="w-full py-3 cursor-pointer rounded-xl font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:shadow-lg  disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate Now
          </button>


        </div>
      </div>
    </div>
  );
}

export default ViewCampaign;
