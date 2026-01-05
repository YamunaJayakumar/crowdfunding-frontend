import React from 'react'
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";

function AdminDonationhistory() {
    const donations = [
        {
            id: 1,
            campaignTitle: "Medical Help for Ravi",
            donorName: "Anonymous",
            amount: "₹1,000",
            paymentMethod: "UPI",
            date: "2026-01-05"
        },
        {
            id: 2,
            campaignTitle: "School Supplies for Kids",
            donorName: "Rahul Sharma",
            amount: "₹2,500",
            paymentMethod: "Card",
            date: "2026-01-04"
        },
        {
            id: 3,
            campaignTitle: "Flood Relief Kerala",
            donorName: "Sneha Patel",
            amount: "₹5,000",
            paymentMethod: "Net Banking",
            date: "2026-01-03"
        }
    ];

    return (
        <div>
            <AdminHeader />

            <div className="grid grid-cols-4 min-h-screen">
                {/* SIDEBAR */}
                <div className="col-span-1">
                    <AdminSidebar />
                </div>

                {/* MAIN CONTENT */}
                <div className="col-span-3 mt-18 ">
                    {/* Donation History */}
                    <div className="mx-10 ">
                        

                        <div className=" bg-white rounded-xl shadow-sm ">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-100 text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Campaign</th>
                                        <th className="px-4 py-3 text-left">Donor</th>
                                        <th className="px-4 py-3 text-left">Amount</th>
                                        <th className="px-4 py-3 text-left">Payment</th>
                                        <th className="px-4 py-3 text-left">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donations.map(donation => (
                                        <tr
                                            key={donation.id}
                                            className="border-t hover:bg-gray-50"
                                        >
                                            <td className="px-4 py-3">
                                                {donation.campaignTitle}
                                            </td>
                                            <td className="px-4 py-3 font-medium">
                                                {donation.donorName}
                                            </td>
                                            <td className="px-4 py-3 text-green-600 font-semibold">
                                                {donation.amount}
                                            </td>
                                            <td className="px-4 py-3">
                                                {donation.paymentMethod}
                                            </td>
                                            <td className="px-4 py-3 text-gray-500">
                                                {donation.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminDonationhistory