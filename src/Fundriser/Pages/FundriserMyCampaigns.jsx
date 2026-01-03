import React, { useEffect, useState } from 'react'
import FundraiserSidebar from '../components/FundriserSidebar'
import FundriserHeader from '../components/FundriserHeader'
import { Link } from 'react-router-dom'


function FundriserMyCampaigns() {
    const [campaignArray, setCampaignArray] = useState([])
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
    
     const campaign = {
    raisedAmount: 240000,
    targetAmount: 500000,
    }
     const [confirm, setConfirm] = useState(false)
    const progress = Math.min(
    (campaign.raisedAmount / campaign.targetAmount) * 100,
    100
  );
  
  

    return (
        <div>
            
            <FundriserHeader />
            <div className="grid grid-cols-1 md:grid-cols-5 py-5">
                <div className="cols-span-1">
                    <FundraiserSidebar />
                </div>
                {/* my campaigns */}
                <div className="col-span-4 space-y-6 mt-5 w-full">

                    {/* Page Heading */}
                    <div>
                        <h1 className="text-3xl font-semibold text-orange-600">
                            My Campaigns
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Manage, track, and withdraw funds from your campaigns
                        </p>
                    </div>

                    {/* Campaign Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Campaign Card */}
                        <div className="bg-white  rounded-xl shadow-md p-5 space-y-4">

                            {/* Card Header */}
                            <div className="flex items-start justify-between">
                                {/* campaign head */}
                                <h2 className="font-semibold text-gray-800 leading-tight">
                                    Medical Help for Aarush
                                </h2>
                                {/* campaign-status */}
                                <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                                    Active
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="space-y-3">

                                {/* Amounts */}
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>
                                        Raised: <strong className="text-gray-800">$3,455</strong>
                                    </span>
                                    <span>
                                        Target: <strong className="text-gray-800">$4,444</strong>
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full transition-all"
                                        style={{ width: `${Math.max(progress, 3)}%` }}
                                    />
                                </div>

                                {/* Time / Status Info */}
                                <p className="text-xs text-gray-500">
                                    12 days left
                                </p>
                            </div>

                            {/* Card Actions */}
                            <div className="flex gap-3 pt-2">
                                <Link to={'/fundriser/view-campaign'} className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg text-sm text-center">
                                    
                                        View
                                    
                                </Link>

                                <button onClick={() => setOpenWithdrawModal(true)}
                                    className={`flex-1 py-2 rounded-lg font-semibold text-white transition ${progress >= 100
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

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FundriserMyCampaigns