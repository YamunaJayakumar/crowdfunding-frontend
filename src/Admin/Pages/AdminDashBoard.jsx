import React from 'react'
import AdminHeader from '../Compontents/AdminHeader'
import AdminSidebar from '../Compontents/AdminSidebar'
import {
  FaDollarSign,
  FaUsers,
  FaFlag,
  FaWallet
} from "react-icons/fa";

function AdminDashBoard() {
  const stats = [
      {
        title: "Total Raised",
        value: "$1,750",
        icon: <FaDollarSign />,
      },
      {
        title: "Active Campaigns",
        value: "3",
        icon: <FaFlag />,
      },
      {
        title: "Total Donors",
        value: "120",
        icon: <FaUsers />,
      },
      {
        title: "Withdrawable Balance",
        value: "$660",
        icon: <FaWallet />,
      },
    ];
  return (
    <div className='px-6 py-3 space-y-2 min-h-screen bg-gray-50'>
        <AdminHeader/>
        <div className="space-y-8 flex flex-col md:flex-row">
  <div className="flex flex-col md:flex-row">
    <AdminSidebar/>
  </div>  
  <div className="space-y-8 flex flex-col md:flex-row">
 
              {/* stats-cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

              </div>   
             </div>
    </div>
  )
}

export default AdminDashBoard