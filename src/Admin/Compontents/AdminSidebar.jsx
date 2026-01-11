import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaSignOutAlt, FaFlag, FaClock } from "react-icons/fa";
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { BsGraphUp } from 'react-icons/bs';
import serverURL from '../../services/serverURL';


function AdminSidebar() {
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    console.log(username)
    const [existingPicture, setExistingPicture] = useState()
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUsername(user.username)
            setExistingPicture(user.picture)




        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        navigate("/login");
    };

    const menuItems = [
        { title: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
        { title: "Campaign Analytics", icon: <BsGraphUp />, path: "/admin/campaign-analytics" },
        { title: "Campaign Approval", icon: <FaFlag />, path: "/admin/fund-approval" },
        { title: "Donation History", icon: <FaClock />, path: '/admin/donations/history' },
        { title: "Withdrawal Approvals", icon: <FaMoneyBillTransfer />, path: "/admin/withdrawal-approval" },
        { title: "Profile Settings", icon: <FaUser />, path: "/admin/profile" },
    ];

    return (
        <aside className="w-66 bg-white p-6 shadow h-screen sticky top-0 flex flex-col justify-between">

            {/* profile info */}
            <div className='flex flex-col items-center mb-8 mt-4'>

                <img className="w-20 h-20 rounded-full border border-black" src={existingPicture ? `${serverURL}/uploads/${existingPicture}` : "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"} alt="person" />


            </div>

            {/* navigation */}
            <nav className="flex flex-col gap-3 flex-1">
                {menuItems.map((menu, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(menu.path)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700 transition"
                    >
                        <span className="text-orange-600">{menu.icon}</span>
                        <span>{menu.title}</span>
                    </button>
                ))}
            </nav>

            {/* Logout */}
            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition"
            >
                <FaSignOutAlt />
                <span>Logout</span>
            </button>

        </aside>
    )
}

export default AdminSidebar