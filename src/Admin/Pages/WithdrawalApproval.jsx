import React, { useEffect, useState } from 'react';
import AdminHeader from '../Compontents/AdminHeader';
import AdminSidebar from '../Compontents/AdminSidebar';
import { ToastContainer, toast } from "react-toastify";
import { approveWithdrwalAPI, getallWithdrawalAPI } from '../../services/allAPI';

function WithdrawalApproval() {

  // const withdrawalRequests = [
  //   {
  //     id: "WD001",
  //     campaignTitle: "Help Aarav Fight Cancer",
  //     category: "Medical",
  //     fundraiserName: "Sara Bennet",
  //     requestedAt: "2026-01-04",

  //     totalRaised: 500000,
  //     platformFee: 25000,
  //     withdrawAmount: 475000,

  //     bankDetails: {
  //       accountHolder: "Sara Bennet",
  //       accountNumber: "XXXX XXXX 2345",
  //       ifsc: "HDFC0001234",
  //       bankName: "HDFC Bank",
  //     },

  //     campaignVerified: true,
  //   },{
  //     id: "WD001",
  //     campaignTitle: "Help Aarav Fight Cancer",
  //     category: "Medical",
  //     fundraiserName: "Sara Bennet",
  //     requestedAt: "2026-01-04",

  //     totalRaised: 500000,
  //     platformFee: 25000,
  //     withdrawAmount: 475000,

  //     bankDetails: {
  //       accountHolder: "Sara Bennet",
  //       accountNumber: "XXXX XXXX 2345",
  //       ifsc: "HDFC0001234",
  //       bankName: "HDFC Bank",
  //     },

  //     campaignVerified: true,
  //   }
  // ];
 const[withdrawalRequests ,setWithdrawalRequest]=useState([])
 console.log(withdrawalRequests)

 

const token=sessionStorage.getItem("token")
 const getAllWithdrawalRequest=async()=>{
  
  const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try{
      const result = await getallWithdrawalAPI(reqHeader)
      if(result.status==200){
        setWithdrawalRequest(result.data)
        console.log(result)
      }
      else{
        console.log(result)
        toast.warning("something went wrong")

      }
    }
    catch(err){
      console.log(err)
      toast.warning("something went wrong")
      
    }

 }
const handleApproval = async (id, action) => {
  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const result = await approveWithdrwalAPI(id, { action }, reqHeader);

    if (result.status === 200) {
      toast.success(`Withdrawal ${action}`);

      
      setWithdrawalRequest(prev =>
        prev.filter(item => item._id !== id)
      );
    }
  } catch (err) {
    console.log(err);
    toast.error("failed");
  }
};
  useEffect(()=>{
    getAllWithdrawalRequest()
 },[])

  return (
    <div>
      <AdminHeader />

      <div className="grid grid-cols-5 gap-6 ">
        {/* Sidebar */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-4 pt-10 " style={{marginRight:'10rem'}}>
          <h3 className="text-gray-600 text-2xl font-bold">Pending Withdrawals</h3>
  <table className="w-full bg-white rounded-xl shadow-md  py-10">
    <thead className="bg-gray-100 text-gray-700 text-sm">
      <tr>
        <th className="px-4 py-3 text-left">Campaign</th>
        <th className="px-4 py-3 text-left">Fundraiser</th>
        <th className="px-4 py-3 text-left">Category</th>
        <th className="px-4 py-3 text-left">Requested On</th>
        <th className="px-4 py-3 text-left">Raised</th>
        <th className="px-4 py-3 text-left">Withdraw</th>
        <th className="px-4 py-3 text-left">Bank</th>
        <th className="px-4 py-3 text-center">Actions</th>
      </tr>
    </thead>

    <tbody className="text-sm">
      {withdrawalRequests?.length === 0 && (
        <tr>
          <td colSpan="8" className="text-center py-6 text-gray-500">
            No pending withdrawal requests
          </td>
        </tr>
      )}

      {withdrawalRequests?.map((req) => (
        <tr key={req._id} className="border-t hover:bg-gray-50">
          <td className="px-4 py-3 font-medium">
            {req?.campaignId?.title}
          </td>

          <td className="px-4 py-3">
            {req?.fundraiserId?.username}
          </td>

          <td className="px-4 py-3">
            <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
              {req?.campaignId?.category}
            </span>
          </td>

          <td className="px-4 py-3 text-gray-500">
            {new Date(req?.createdAt).toLocaleDateString()}
          </td>

          <td className="px-4 py-3">
            ₹{req?.campaignId?.totalRaised}
          </td>

          <td className="px-4 py-3 font-semibold">
            ₹{req?.amount}
          </td>

          <td className="px-4 py-3 text-xs">
            <div>{req?.bankDetails?.bankName}</div>
            <div className="text-gray-500">
              {req?.bankDetails?.accountNumber}
            </div>
          </td>

          <td className="px-4 py-3 text-center space-x-2">
            <button
              onClick={() => handleApproval(req._id, "rejected")}
              className="px-3 py-1 border rounded-md text-xs hover:bg-gray-100"
            >
              Reject
            </button>

            <button
              onClick={() => handleApproval(req._id, "approved")}
              className="px-3 py-1 bg-green-600 text-white rounded-md text-xs hover:bg-green-500"
            >
              Approve
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  );
}

export default WithdrawalApproval;
