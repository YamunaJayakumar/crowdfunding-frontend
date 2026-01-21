import React, { useEffect, useState } from 'react';
import AdminHeader from '../Compontents/AdminHeader';
import AdminSidebar from '../Compontents/AdminSidebar';
import { FaCross } from 'react-icons/fa';
import { CircleX, ClosedCaptionIcon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { approveCampaignAPI, getPendingCampaignAPI } from '../../services/allAPI';
import serverURL from '../../services/serverURL';

function FundriserApproval() {
    const [campaigns, setCampaigns] = useState()
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    useEffect(() => {
        fetchPendingCampaign()
    }, [])


    const fetchPendingCampaign = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }
        try {
            const result = await getPendingCampaignAPI(reqHeader)
            console.log(result.data)
            if (result.status == 200) {
                setCampaigns(result.data)
            }
            else {
                toast.warning("fetching campaign failed")
            }

        } catch (err) {
            console.log(err)
            toast.warning("something went wrong")

        }



    }

    const apporveCamapign = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }
        try {
            const result = await approveCampaignAPI(id, reqHeader)
            if (result.status == 200) {
                toast.success("campaign approved")
                //remove the approved campaign
                setCampaigns(prev =>
                    prev.filter(campaign => campaign._id !== id)
                );
            }
            else {
                console.log(result.data)
                toast.error("approval failed")
            }
        } catch (err) {
            console.log(err)
            toast.warning("something went wrong")
        }


    }




    return (
        <div>
            <AdminHeader />
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <AdminSidebar />
                </div>
                <div className="col-span-4 p-6">


                    {/* Campaign Cards */}
                    <div className="grid gap-4">
                        {campaigns?.length > 0 ?
                            campaigns.map((campaign, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                                >
                                    <div>
                                        <h3 className="font-bold text-lg">{campaign.title}</h3>
                                        <p className="text-gray-500 text-sm">{campaign.category}</p>

                                        <p className="text-gray-600 text-sm">
                                            <span className="font-semibold">Target:</span> {campaign.goalAmount}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {/* //{new Date(campaign.createdAt).toLocaleDateString()} */}
                                            <span className="font-semibold">Created On:</span> {new Date(campaign.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setSelectedCampaign(campaign)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                        >
                                            View
                                        </button>
                                        <button onClick={() => apporveCamapign(campaign._id)}

                                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                                        >
                                            Approve
                                        </button>
                                    </div>
                                </div>
                            )) : <p>loading....</p>
                        }
                    </div>
                    {/* Modal */}
                    {selectedCampaign && (
                        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
                            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">

                                {/* Close Button */}
                                {/* <button
                                    onClick={() => setSelectedCampaign(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                                >
                                    <CircleX size={28} />
                                </button> */}

                                {/* Header */}
                                <div className="border-b px-6 py-4">
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {selectedCampaign.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Category: {selectedCampaign.category}
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-6">

                                    {/* Organizer Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Organizer:</span>{" "}
                                            {selectedCampaign.fundraiserId.username}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Email:</span>{" "}
                                            {selectedCampaign.fundraiserMail}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div>
                                        <img
                                            src={`${serverURL}/uploads/${selectedCampaign.image}`}
                                            alt="Campaign"
                                            className="w-full h-64 object-cover rounded-xl border"
                                        />
                                    </div>

                                    {/* Campaign Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Beneficiary:</span>{" "}
                                            {selectedCampaign.beneficiary}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Target Amount:</span>{" "}
                                            ₹{selectedCampaign.goalAmount}
                                        </p>
                                    </div>

                                    {/* Story */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Campaign Story</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {selectedCampaign.longDescription}
                                        </p>
                                    </div>

                                    {/* Documents */}
                                    {selectedCampaign.documents?.length > 0 && (
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Submitted Documents</h3>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {selectedCampaign.documents.map((doc, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={`${serverURL}/uploads/${doc}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="border rounded-lg px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 transition"
                                                    >
                                                        📄 {doc}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="border-t px-6 py-4 flex justify-end">
                                    <button
                                        onClick={() => setSelectedCampaign(null)}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="colored"
            />
        </div>

    );
}

export default FundriserApproval;
