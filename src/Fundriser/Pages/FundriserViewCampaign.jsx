
import React, { useState } from "react";
import {
  Heart,
  Smartphone,
  CreditCard,
  Landmark,
  VerifiedIcon,
} from "lucide-react";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";



function FundriserViewCampaign() {
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
     
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
}
 const progress = Math.min(
    (campaign.raisedAmount / campaign.targetAmount) * 100,
    100
  );

  return (
    <div>
      
        <Link to={'/fundriser/my-campaigns'} className="inline-flex items-center gap-2 text-gray-500 font-medium px-5 py-3 border border-gray-600 m-5 ">back<FaArrowRight/></Link>
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
            


          </div>




        </div>

        
       {/* RIGHT SECTION */}
<div className="lg:w-1/3 h-89 mt-30 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-lg space-y-6">

  {/* Progress Box */}
  <div className="bg-gray-50 border border-gray-400 rounded-xl p-4 space-y-3">
    {/* Raised / Goal */}
    <div className="flex justify-between text-gray-700 text-sm font-medium">
      <span>${campaign.raisedAmount.toLocaleString()} raised</span>
      <span>Goal: ${campaign.targetAmount.toLocaleString()}</span>
    </div>

    {/* Progress Bar */}
    <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full transition-all"
        style={{ width: `${Math.max(progress, 3)}%` }}
      />
    </div>

    {/* % Goal Reached */}
    <p className="text-right text-orange-600 font-semibold">
      {Math.floor(progress)}% of goal reached
    </p>

    {/* Additional Stats */}
    <div className="flex justify-between text-gray-700 text-sm mt-2">
      <span>Total Donors: 42</span>
      <span>Days Left: 10</span>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-3 ">
    {/* Withdraw button: enable only if campaign is complete */}
    <button onClick={() => setOpenWithdrawModal(true)}
      className={`flex-1 py-2 rounded-lg font-semibold text-white transition ${
        progress >= 100
          ? "bg-orange-500 hover:bg-orange-600"
          : "bg-gray-300 cursor-not-allowed"
      }`}
      disabled={progress < 100}
    >
      Withdraw
    </button>
    {/* withdraw modal */}
                                {openWithdrawModal && (
                                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                                        <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-5">

                                            {/* Modal Header */}
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-800">
                                                    Withdraw Funds
                                                </h2>
                                                <p className="text-sm text-gray-500">
                                                    Review details before confirming withdrawal
                                                </p>
                                            </div>

                                            {/* Campaign Summary */}
                                            <div className="border rounded-lg p-4 space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Campaign</span>
                                                    <span className="font-medium">Education for Rural Children</span>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Total Raised</span>
                                                    <span>$10,000</span>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Platform Fee</span>
                                                    <span>$500</span>
                                                </div>

                                                <div className="flex justify-between font-semibold border-t pt-2">
                                                    <span>Withdrawable Amount</span>
                                                    <span>$9,500</span>
                                                </div>
                                            </div>

                                            {/* Confirmation */}
                                            <label className="flex items-start gap-2 text-sm text-gray-600">
                                                <input
                                                    type="checkbox"
                                                    checked={confirm}
                                                    onChange={() => setConfirm(!confirm)}
                                                />
                                                I confirm that all campaign details are correct and I want to proceed.
                                            </label>

                                            {/* Actions */}
                                            <div className="flex justify-end gap-3 pt-2">
                                                <button
                                                    onClick={() => setOpenWithdrawModal(false)}
                                                    className="px-4 py-2 text-sm border rounded-lg"
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    disabled={!confirm}
                                                    className={`px-4 py-2 text-sm rounded-lg text-white ${confirm ? "bg-orange-500" : "bg-gray-400 cursor-not-allowed"
                                                        }`}
                                                >
                                                    Confirm Withdrawal
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                )}

    {/* Promote button: always active */}
    
  </div>
</div>

      </div>
    </div>
    </div>
  )
}

export default FundriserViewCampaign