
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
     documents: [
                { name: "Medical Report", url: "/docs/medical-report.pdf" },
                { name: "Hospital Bill", url: "/docs/bill.jpg" },
            ],
    
  }
  const progress = Math.min(
    (campaign.raisedAmount / campaign.targetAmount) * 100,
    100
  );

  const [confirm, setConfirm] = useState(false);



  return (
    <div>

      <Link to={'/fundriser/my-campaigns'} className="inline-flex items-center gap-2 text-gray-500 font-medium px-5 py-3 border border-gray-600 m-5 ">back<FaArrowRight /></Link>
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
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">
                      Documents uploaded
                    </h4>
                    {campaign.documents?.length > 0 && (
                                    <div className="mb-4">
                                        <ul className="list-disc ml-5">
                                            {campaign.documents.map((doc, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={doc.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-blue-600 underline"
                                                    >
                                                        {doc.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                  </div>
                </div>
              )
            }

            

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
              <button 
                className="flex-1 py-2 rounded-lg font-semibold text-white bg-orange-600"   
              >
               Request For Promotion
              </button>
              

              {/* Promote button: always active */}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FundriserViewCampaign