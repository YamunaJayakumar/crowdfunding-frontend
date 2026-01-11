import React, { useEffect } from 'react'
import FundraiserSidebar from "../components/FundriserSidebar";
import FundriserHeader from "../components/FundriserHeader";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { WithdrawalHistoryAPI } from '../../services/allAPI';
import { useState } from 'react';

function MyWithdrawals() {
    const [allwithdrawal, setAllWithdrawal] = useState([])
    console.log(allwithdrawal)
    const { id } = useParams()

    useEffect(() => {
        getWithdrawalStatus()

    }, [])

    const getWithdrawalStatus = async () => {
        const token = sessionStorage.getItem("token");
        const authHeader =
            { Authorization: `Bearer ${token}` }

        try {
            const result = await WithdrawalHistoryAPI(id, authHeader)
            setAllWithdrawal(result.data)

        } catch (err) {
            console.log(err)
            toast.warning("something went wrong")
        }

    }
    const getStatusBadge = (status) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-700";
            case "rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-yellow-100 text-yellow-700";
        }
    };
    return (
        <>
            <FundriserHeader />

            <div className="min-h-screen grid grid-cols-4 ">

                {/* SIDEBAR */}
                <div className="col-span-1  bg-white">
                    <FundraiserSidebar />
                </div>

                {/* MAIN CONTENT */}
                <div className="col-span-3 p-6">
                    <div className="bg-white shadow-md w-full" style={{marginRight:'7rem'}}>
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="p-4 text-left">Campaign</th>
                                    <th className="p-4 text-left">Category</th>
                                    <th className="p-4 text-left">Requested On</th>
                                    <th className="p-4 text-left">Account Holder</th>
                                    <th className="p-4 text-left">Account No</th>
                                    <th className="p-4 text-left">Bank</th>
                                    <th className="p-4 text-center">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allwithdrawal.length > 0 ? (
                                    allwithdrawal.map((item) => (
                                        <tr
                                            key={item._id}
                                            className="border-t hover:bg-gray-50 transition"
                                        >
                                            <td className="p-4 font-medium text-gray-800">
                                                {item?.campaignId?.title || "—"}
                                            </td>

                                            <td className="p-4">
                                                {item?.campaignId?.category || "—"}
                                            </td>

                                            <td className="p-4">
                                                {new Date(item.createdAt).toLocaleDateString("en-IN")}
                                            </td>

                                            <td className="p-4">
                                                {item?.bankDetails?.accountHolderName}
                                            </td>

                                            <td className="p-4">
                                                ****{item?.bankDetails?.accountNumber?.slice(-4)}
                                            </td>

                                            <td className="p-4">
                                                {item?.bankDetails?.bankName}
                                            </td>

                                            <td className="p-4 text-center">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(item.status)}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="p-6 text-center text-gray-500">
                                            No withdrawal requests found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>




                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    theme="colored"
                />


            </div>


        </>
    )
}

export default MyWithdrawals