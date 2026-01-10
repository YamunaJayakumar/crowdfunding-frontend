import React, { useEffect, useState } from 'react'
import FundraiserSidebar from '../components/FundriserSidebar'
import FundriserHeader from '../components/FundriserHeader'
import { Link, useNavigate } from 'react-router-dom'
import { FaExclamationCircle, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { deleteCampaignAPI, viewAllCampaignAPI } from '../../services/allAPI'




function FundriserMyCampaigns() {
    const navigate = useNavigate()
    const [campaignArray, setCampaignArray] = useState([])
    const [openWithdrawModal, setOpenWithdrawModal] = useState(null)
    console.log(campaignArray)
    useEffect(() => {
        getMyCampaigns()

    }, [])
    // const campaign = {
    //     raisedAmount: 240000,
    //     targetAmount: 500000,
    // }
    // const [confirm, setConfirm] = useState(false)
    const progress = Math.min(
        (200 / campaignArray.goalAmount) * 100,
        100
    );

    const [bankDetails, setBankDetails] = useState({
        accountHolder: "",
        accountNumber: "",
        ifsc: "",
        bankName: "",
    });
    const isBankDetailsValid =
        bankDetails.accountHolder.trim() !== "" &&
        bankDetails.accountNumber.trim() !== "" &&
        bankDetails.ifsc.trim() !== "" &&
        bankDetails.bankName.trim() !== "";


    const getMyCampaigns = async () => {
        const token = sessionStorage.getItem("token")
        if (!token) {
            toast.warning("please login")
        }
        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }
        try {
            const result = await viewAllCampaignAPI(reqHeader)
            if (result.status === 200) {
                setCampaignArray(result.data)
            }

        } catch (err) {
            toast.warning(err)
        }

    }
    const deleteCampaign = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            'Authorization': `Bearer ${token}`,
        };
        const result = await deleteCampaignAPI(id, reqHeader)
        if (result.status == 200) {
            toast.success("campaign deleted successfully")

            setCampaignArray(prev => prev.filter(item => item._id != id))


        }
        else {
            console.log(result)
            toast.error("active/closed campaigns can not be deleted")
        }



    }


    return (
        <div>

            <FundriserHeader />
            <div className="grid grid-cols-1 md:grid-cols-5 ">
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
                        {campaignArray.length > 0 ? (
                            campaignArray.map(item => {

                                const progress = Math.min(
                                    Math.round((item.totalRaised / item.goalAmount) * 100),
                                    100
                                );

                                return (
                                    <div
                                        key={item._id}
                                        className="bg-white rounded-xl shadow-md p-5 space-y-4"
                                    >
                                        {/* Delete */}
                                        <button
                                            onClick={() => deleteCampaign(item._id)}
                                            className="text-red-500"
                                        >
                                            <FaTrash />
                                        </button>

                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                            <h2 className="font-semibold text-gray-800">
                                                {item.title}
                                            </h2>

                                            <span
                                                className={`text-xs px-3 py-1 rounded-full ${item.status === "pending"
                                                        ? "bg-orange-100 text-orange-700"
                                                        : item.status === "closed"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>

                                        {/* Amounts */}
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>
                                                Raised: <strong>{item.totalRaised}</strong>
                                            </span>
                                            <span>
                                                Target: <strong>{item.goalAmount}</strong>
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-linear-to-r from-orange-400 to-orange-600 transition-all"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>

                                        <p className="text-xs text-gray-500">
                                            {progress}% completed
                                        </p>

                                        {/* Actions */}
                                        <div className="flex gap-3 pt-2">
                                            <Link
                                                to={`/fundraiser/campaign/${item._id}/view`}
                                                className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg text-sm text-center"
                                            >
                                                View
                                            </Link>

                                            <button
                                                onClick={() => navigate(`/fundraiser/campaign/${item._id}/edit`)}
                                                disabled={item.status !== "pending"}
                                                className={`flex-1 py-2 rounded-lg text-sm  ${item.status !== "pending"
                                                        ? "bg-gray-300 cursor-not-allowed"
                                                        : "border border-orange-500 text-orange-500"
                                                    }`}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                disabled={progress < 100}
                                                onClick={() => setOpenWithdrawModal(item._id)}
                                                className={`flex-1 py-2 rounded-lg text-white ${progress >= 100
                                                        ? "bg-orange-500 hover:bg-orange-600"
                                                        : "bg-gray-300 cursor-not-allowed"
                                                    }`}
                                            >
                                                Withdraw
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No campaigns found</p>
                        )}

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
                                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                                        <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-5">




                                            {/* BANK DETAILS */}
                                            <div className="border rounded-lg p-4 space-y-3">
                                                <h3 className="font-semibold text-gray-700 text-sm">
                                                    Bank Details (for payout)
                                                </h3>

                                                <input
                                                    type="text"
                                                    placeholder="Account Holder Name"
                                                    value={bankDetails.accountHolder}
                                                    onChange={(e) =>
                                                        setBankDetails({ ...bankDetails, accountHolder: e.target.value })
                                                    }
                                                    className="w-full border rounded-md px-3 py-2 text-sm"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="Account Number"
                                                    value={bankDetails.accountNumber}
                                                    onChange={(e) =>
                                                        setBankDetails({ ...bankDetails, accountNumber: e.target.value })
                                                    }
                                                    className="w-full border rounded-md px-3 py-2 text-sm"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="IFSC Code"
                                                    value={bankDetails.ifsc}
                                                    onChange={(e) =>
                                                        setBankDetails({ ...bankDetails, ifsc: e.target.value })
                                                    }
                                                    className="w-full border rounded-md px-3 py-2 text-sm"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="Bank Name"
                                                    value={bankDetails.bankName}
                                                    onChange={(e) =>
                                                        setBankDetails({ ...bankDetails, bankName: e.target.value })
                                                    }
                                                    className="w-full border rounded-md px-3 py-2 text-sm"
                                                />

                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <FaExclamationCircle />
                                                    Ensure details are correct. Changes are not allowed after submission.
                                                </p>
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
                                                    disabled={!confirm || !isBankDetailsValid}
                                                    className={`px-4 py-2 text-sm rounded-lg text-white ${confirm && isBankDetailsValid
                                                        ? "bg-orange-500 hover:bg-orange-600"
                                                        : "bg-gray-400 cursor-not-allowed"
                                                        }`}
                                                >
                                                    Confirm Withdrawal
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />
        </div>
    )
}

export default FundriserMyCampaigns