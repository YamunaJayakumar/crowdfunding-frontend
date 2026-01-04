import React, { useState } from 'react';
import AdminHeader from '../Compontents/AdminHeader';
import AdminSidebar from '../Compontents/AdminSidebar';
import { FaCross } from 'react-icons/fa';
import { CircleX, ClosedCaptionIcon } from 'lucide-react';

function FundriserApproval() {
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const campaigns = [
        {
            id: 1,
            title: "Medical Help for Ravi",
            organizer: "Ravi Kumar",
            beneficiary: "Ravi Kumar",
            image: "https://images.unsplash.com/photo-1578496781985-452d4a934d50",
            category: "Medical",
            target: "₹2,00,000",
            raised: "₹45,000",
            minDonation: "₹100",
            startDate: "2026-01-04",
            story:
                "Ravi needs funds for an urgent surgery. Your support will cover hospital bills and post-surgery care.",
            documents: [
                { name: "Medical Report", url: "/docs/medical-report.pdf" },
                { name: "Hospital Bill", url: "/docs/bill.jpg" },
            ],
        },
        {
            id: 2,
            title: "School Supplies for Kids",
            organizer: "Anita Sharma",
            beneficiary: "Local School",
            category: "Education",
            target: "₹50,000",
            raised: "₹10,000",
            minDonation: "₹50",
            startDate: "2026-01-02",
            story: "Help provide stationery and books for underprivileged children.",
            documents: [
                { name: "School Letter", url: "/docs/school-letter.pdf" },
            ],
        },
    ];


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
                        {campaigns.map((campaign, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-bold text-lg">{campaign.title}</h3>
                                    <p className="text-gray-500 text-sm">{campaign.category}</p>
                                    
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">Target:</span> {campaign.target}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Created On:</span> {campaign.startDate}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedCampaign(campaign)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                    >
                                        View
                                    </button>
                                    <button

                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                                    >
                                        Approve
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Modal */}
                    {selectedCampaign && (
                        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center ">
                            <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
                                <button
                                    onClick={() => setSelectedCampaign(null)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-lg font-bold "
                                >
                                    <CircleX size={26} />
                                </button>

                                <h2 className="text-2xl font-bold mb-2">{selectedCampaign.title}</h2>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Organizer:</span> {selectedCampaign.organizer}
                                </p>
                                {/* Main Image */}
                                    <img
                                        src={selectedCampaign.image}
                                        alt="Campaign"
                                        className="w-100 h-50 rounded-xl  object-cover"
                                    />
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Beneficiary:</span> {selectedCampaign.beneficiary}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Category:</span> {selectedCampaign.category}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Target:</span> {selectedCampaign.target}
                                </p>


                                <div className="mb-4">
                                    <p className="font-semibold mb-1">Story:</p>
                                    <p className="text-gray-600">{selectedCampaign.story}</p>
                                </div>

                                {selectedCampaign.documents?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="font-semibold mb-1">Documents:</p>
                                        <ul className="list-disc ml-5">
                                            {selectedCampaign.documents.map((doc, idx) => (
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
                    )}
                </div>
            </div>
        </div>

    );
}

export default FundriserApproval;
