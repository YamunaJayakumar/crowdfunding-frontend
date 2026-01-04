import React from 'react';
import AdminHeader from '../Compontents/AdminHeader';
import AdminSidebar from '../Compontents/AdminSidebar';

function WithdrawalApproval() {

  const withdrawalRequests = [
    {
      id: "WD001",
      campaignTitle: "Help Aarav Fight Cancer",
      category: "Medical",
      fundraiserName: "Sara Bennet",
      requestedAt: "2026-01-04",

      totalRaised: 500000,
      platformFee: 25000,
      withdrawAmount: 475000,

      bankDetails: {
        accountHolder: "Sara Bennet",
        accountNumber: "XXXX XXXX 2345",
        ifsc: "HDFC0001234",
        bankName: "HDFC Bank",
      },

      campaignVerified: true,
    },{
      id: "WD001",
      campaignTitle: "Help Aarav Fight Cancer",
      category: "Medical",
      fundraiserName: "Sara Bennet",
      requestedAt: "2026-01-04",

      totalRaised: 500000,
      platformFee: 25000,
      withdrawAmount: 475000,

      bankDetails: {
        accountHolder: "Sara Bennet",
        accountNumber: "XXXX XXXX 2345",
        ifsc: "HDFC0001234",
        bankName: "HDFC Bank",
      },

      campaignVerified: true,
    }
  ];

  return (
    <div>
      <AdminHeader />

      <div className="grid grid-cols-5 gap-6 ">
        {/* Sidebar */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-4  grid grid-cols-2 gap-4 pt-10">

          {withdrawalRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-xl shadow-md px-6 pt-6 h-110 space-y-4"
            >

              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {req.campaignTitle}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fundraiser: {req.fundraiserName}
                  </p>
                  <p className="text-xs text-gray-400">
                    Requested on {req.requestedAt}
                  </p>
                </div>

                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                  {req.category}
                </span>
              </div>

              {/* Financials */}
              <div className="border rounded-lg p-4 text-sm space-y-1">
                <p>Raised: ₹{req.totalRaised.toLocaleString()}</p>
                <p>Platform Fee: ₹{req.platformFee.toLocaleString()}</p>
                <p className="font-semibold">
                  Withdrawable: ₹{req.withdrawAmount.toLocaleString()}
                </p>
              </div>

              {/* Bank Details */}
              <div className="border rounded-lg p-4 text-sm space-y-1">
                <p><strong>Account Holder:</strong> {req.bankDetails.accountHolder}</p>
                <p><strong>Account No:</strong> {req.bankDetails.accountNumber}</p>
                <p><strong>IFSC:</strong> {req.bankDetails.ifsc}</p>
                <p><strong>Bank:</strong> {req.bankDetails.bankName}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                  Reject
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-500">
                  Approve
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default WithdrawalApproval;
