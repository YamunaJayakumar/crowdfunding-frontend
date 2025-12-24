import React from 'react'
import { useState } from "react";
function ViewCampaign() {
    const [amount, setAmount] = useState("");
  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-orange-600 mb-2">
          Help Aarav Fight Cancer
        </h1>

        <p className="text-gray-600 mb-6">
          All donations go directly toward medical treatment and recovery.
        </p>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1578496781985-452d4a934d50"
          className="w-full h-80 object-cover rounded-xl mb-6"
          alt=""
        />
         {/* story */}
        <div className="mb-6 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Aarav is a brave 7-year-old battling a rare form of cancer. His family
            is struggling to afford the mounting medical bills associated with his
            treatment. Aarav's resilience and positive spirit inspire everyone. 
            Your donation will help cover his chemotherapy, hospital stays, and
            medications. Every contribution, big or small, brings Aarav closer to
            recovery and gives his family hope during this challenging time.
          </p>
          <p>
            Let's come together as a community to support Aarav in his fight
            against cancer. Your generosity can make a significant difference in
            his life.
          </p>
        </div>
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>₹2,40,000 raised</span>
            <span>₹5,00,000 goal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-linear-to-br from-orange-400 to-orange-600 h-3 rounded w-[48%]"></div>
          </div>
        </div>

        {/* Donate Box */}
        <div className="bg-orange-50 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>

          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Payment Options */}
          <div className="space-y-2 mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked /> UPI
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Card
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Net Banking
            </label>
          </div>

          <button className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-lg font-semibold hover:opacity-90">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewCampaign