import { useEffect, useState } from "react";
import { FaTachometerAlt, FaPlusCircle, FaWallet, FaUser, FaSignOutAlt, FaFlag, FaClock, FaCoins } from "react-icons/fa";
import serverURL from '../../services/serverURL'
import { useNavigate } from "react-router-dom";


function FundraiserSidebar() {
  const navigate = useNavigate();
  const [dp, setDp] = useState();
  const [username, setUsername] = useState();
  const [id, setId] = useState()
  console.log(id)


  console.log(username, dp)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const user = JSON.parse(sessionStorage.getItem("user"))

      setUsername(user?.username)
      setDp(user?.picture)
      setId(user?._id)
      console.log(user)


    }


  }, [])
  const handleLogout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  navigate("/login");
};

  const menuItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/fundriser/dashboard" },
    { title: "My Donations", icon: <FaCoins />, path: "/donation/history" },
    { title: "My Campaigns", icon: <FaFlag />, path: '/fundriser/my-campaigns' },
    { title: "Start New Campaign", icon: <FaPlusCircle />, path: "/fundraiser/create-campaign" },
    { title: "My Withdrawals", icon: <FaClock />, path: "/fundraiser/withdrawals" },
    { title: "Profile Settings", icon: <FaUser />, path: `/fundraiser/${id}/edit` },
    
  ];

  return (
    <aside className="w-66 bg-white p-6 shadow min-h-screen flex flex-col justify-start gap-15 mb-0 ">

      {/* ===== PROFILE INFO ===== */}
      <div className="flex flex-col items-center mb-8">
        <img className="w-20 h-20 rounded-full border boeder-black" src={dp ? `${serverURL}/uploads/${dp}` : "https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"} alt="profile" />
        <h2 className="text-lg font-semibold text-gray-900">{username}</h2>
        <p className="text-sm text-gray-500">verified ✔️</p>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-orange-50 text-gray-700"
          >
            <span className="text-orange-600">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 mt-6"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </nav>


    </aside>
  );
}

export default FundraiserSidebar;
