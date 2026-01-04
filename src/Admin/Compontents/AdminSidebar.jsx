import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaSignOutAlt, FaFlag } from "react-icons/fa";
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { BsGraphUp } from 'react-icons/bs';

function AdminSidebar() {
    const navigate = useNavigate()
    const menuItems = [
        { title: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
        { title: "Campaign Analytics", icon: <BsGraphUp />, path: "/admin/campaign-analytics" },
        { title: "Campaign Approval", icon: <FaFlag/>, path: "/admin/fund-approval" },
        { title: "Withdrawal Approvals", icon: <FaMoneyBillTransfer />, path: "/admin/withdrawal-approval" },
        { title: "Profile Settings", icon: <FaUser />, path: "/admin/profile" },
        { title: "Logout", icon: <FaSignOutAlt />, path: "/login" }

    ]
    return (
        <aside className="w-66 bg-white p-6 shadow h-screen flex flex-col justify-start gap-10   ">
            {/* profile info */}
            <div className='flex flex-col items-center mb-8 mt-4'>

                <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />


            </div>

            {/* navigation */}
            <nav className="flex flex-col gap-3  ">
                {
                    menuItems?.map((menu, index) => (
                        <button key={index} onClick={()=>navigate(menu.path)} className="flex items-center  gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700">
                            <span className='text-orange-600'>{menu.icon}</span>
                            <span>{menu.title}</span>

                        </button>
                    ))
                }
            </nav>
        </aside>
    )
}

export default AdminSidebar