import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaExclamationCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import FundraiserSidebar from "../components/FundriserSidebar";
import FundriserHeader from "../components/FundriserHeader";
import {
  viewAllCampaignAPI,
  deleteCampaignAPI,
  requestWithdrawalAPI
} from "../../services/allAPI";

function FundriserMyCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [sentrequest, setSendrequest] = useState(false)

  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: ""
  });
  // console.log(campaigns.item.status, campaigns.item.isWithdrawn);
  /* ----------------------------- Helpers ----------------------------- */

  const token = sessionStorage.getItem("token");
  const authHeader =
    { Authorization: `Bearer ${token}` }


  const resetModal = () => {
    setOpenWithdrawModal(null);
    setConfirm(false);
    setBankDetails({
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
      bankName: ""
    });
  };

  const selectedCampaign = campaigns.find(
    (c) => c._id === openWithdrawModal
  );

  /* ------------------------------ API ------------------------------ */

  const getMyCampaigns = async () => {
    if (!token) return toast.warning("Please login");

    try {
      const res = await viewAllCampaignAPI(authHeader);
      if (res.status === 200) {
        setCampaigns(res.data);
      }
    } catch (err) {
      console.log(err)
      toast.error("Failed to load campaigns");
    }
  };

  const deleteCampaign = async (id) => {
    try {
      const res = await deleteCampaignAPI(id, authHeader);
      if (res.status === 200) {
        toast.success("Campaign deleted");
        setCampaigns((prev) => prev.filter((c) => c._id !== id));
      }
    } catch {
      toast.error("Active or closed campaigns cannot be deleted");
    }
  };

  const submitWithdrawal = async (id) => {
    try {
      const res = await requestWithdrawalAPI(
        id,
        { bankDetails },
        authHeader
      );

      if (res.status === 200) {
        toast.success("Withdrawal request submitted");
        setSendrequest(true)
        setCampaigns(prev =>
          prev.map(c =>
            c._id === id ? { ...c, isWithdrawn: true } : c
          )
        );
      } else {
        toast.warning("Something went wrong");
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong");
    } finally {
      resetModal();
    }
  };

  /* ----------------------------- Effects ----------------------------- */

  useEffect(() => {
    getMyCampaigns();
  }, []);

  /* ----------------------------- UI ----------------------------- */

  return (
    <div>
      <FundriserHeader />

      <div className="grid grid-cols-1 md:grid-cols-5">
        <FundraiserSidebar />

        <div className="col-span-4 p-6 space-y-6">
          <h1 className="text-3xl font-semibold text-orange-600">
            My Campaigns
          </h1>

          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
  <table className="w-full border-collapse">

    {/* TABLE HEADER — ONLY ONCE */}
    <thead className="bg-orange-100 text-orange-700">
      <tr>
        <th className="p-3 text-left">Title</th>
        <th className="p-3 text-left">Status</th>
        <th className="p-3 text-left">Raised</th>
        <th className="p-3 text-left">Target</th>
        <th className="p-3 text-center">Actions</th>
      </tr>
    </thead>

    {/* TABLE BODY */}
    <tbody>
      {campaigns.map((item) => (
        <tr
          key={item._id}
          className="border-b hover:bg-gray-50"
        >
          {/* Title */}
          <td className="p-3 font-medium">
            {item.title}
          </td>

          {/* Status */}
          <td className="p-3">
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                item.status === "closed"
                  ? "bg-red-100 text-red-700"
                  : item.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {item.status}
            </span>
          </td>

          {/* Raised */}
          <td className="p-3">
            ₹{item.totalRaised}
          </td>

          {/* Target */}
          <td className="p-3">
            ₹{item.goalAmount}
          </td>

          {/* Actions */}
          <td className="p-3">
            <div className="flex gap-2 justify-center">

              {/* View */}
              <Link
                to={`/fundraiser/campaign/${item._id}/view`}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded text-sm"
              >
                View
              </Link>

              {/* Withdraw */}
              <button
                className={`px-3 py-1 rounded text-sm text-white ${
                  item.status === "closed" && !item.isWithdrawn
                    ? "bg-orange-500"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={item.status !== "closed" || item.isWithdrawn}
                onClick={() => setOpenWithdrawModal(item._id)}
              >
                Withdraw
              </button>

              {/* Delete */}
              <button
                onClick={() => deleteCampaign(item._id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* EMPTY STATE */}
  {campaigns.length === 0 && (
    <p className="text-center text-gray-500 py-6">
      No campaigns found
    </p>
  )}
</div>

        </div>
      </div>

      {/* ------------------------ Withdraw Modal ------------------------ */}
      {openWithdrawModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
            <h2 className="text-xl font-semibold">Withdraw Funds</h2>

            <p className="text-sm">
              You will withdraw:
              <strong> ₹{selectedCampaign.totalRaised}</strong>
            </p>

            <div className="border rounded-lg p-4 space-y-3">
              {["accountHolderName", "accountNumber", "ifscCode", "bankName"].map(
                (field) => (
                  <input
                    key={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    className="w-full border px-3 py-2 rounded"
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        [field]: e.target.value
                      })
                    }
                  />
                )
              )}

              <p className="text-xs text-gray-500 flex gap-1 items-center">
                <FaExclamationCircle />
                Bank details cannot be changed after submission
              </p>
            </div>

            <label className="flex gap-2 text-sm">
              <input
                type="checkbox"
                checked={confirm}
                onChange={() => setConfirm((p) => !p)}
              />
              I confirm this withdrawal request
            </label>

            <div className="flex justify-end gap-3">
              <button
                onClick={resetModal}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                disabled={!confirm}
                onClick={() => submitWithdrawal(selectedCampaign._id)}
                className="bg-orange-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
              >
                Confirm Withdrawal
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default FundriserMyCampaigns;
