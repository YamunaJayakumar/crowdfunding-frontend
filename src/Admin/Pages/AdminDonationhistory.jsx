import React, { useEffect, useState } from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import { FaDollarSign } from "react-icons/fa6";
import { getDonationHistoryAPI } from "../../services/allAPI";


function AdminDonationhistory() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonationHistory();
  }, []);

  const fetchDonationHistory = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await getDonationHistoryAPI(reqHeader);
      if (result.status === 200) {
        setDonations(result.data);
      } else {
        toast.warning("Failed to load donation history");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="grid grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-3 p-8">
          <h1 className="text-2xl font-semibold mb-6 text-gray-500">
            Donation History
          </h1>

          <div className="bg-white rounded-xl shadow-sm " style={{marginLeft:'-5rem',marginRight:'3rem'}}>
            {donations.length === 0 ? (
              <p className="text-center py-10 text-gray-500">
                No donations found
              </p>
            ) : (
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-6 py-3 text-left">Campaign</th>
                    <th className="px-6 py-3 text-left">Donor</th>
                    <th className="px-6 py-3 text-left">Amount</th>
                    <th className="px-6 py-3 text-left">Payment</th>
                    <th className="px-6 py-3 text-left">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {donations.map((donation) => (
                    <tr
                      key={donation._id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {donation.campaignId?.title || "—"}
                      </td>

                      <td className="px-6 py-4">
                        {donation.donorName || "Anonymous"}
                      </td>

                      <td className="px-6 py-4 font-semibold text-green-600 flex items-center">
                        <FaDollarSign/>{donation.amount?.toLocaleString()}
                      </td>

                      <td className="px-6 py-4">
                        {donation.paymentMethod || "Online"}
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        {new Date(donation.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
}

export default AdminDonationhistory;
