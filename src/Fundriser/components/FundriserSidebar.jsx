import { FaTachometerAlt, FaPlusCircle, FaWallet, FaUser, FaSignOutAlt,FaFlag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FundraiserSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/fundriser/dashboard" },
    { title: "My Campaigns", icon: <FaFlag />, path: "/fundriser/my-campaigns" },
    { title: "Start New Campaign", icon: <FaPlusCircle />, path: "/fundraiser/create-campaign" },
    { title: "Profile Settings", icon: <FaUser />, path: "/fundraiser/profile" },
    { title: "Logout", icon: <FaSignOutAlt />, path: "/login" },
  ];

  return (
    <aside className="w-66 bg-white p-6 shadow min-h-screen flex flex-col justify-start gap-10 mb-0 ">

      {/* ===== PROFILE INFO ===== */}
      <div className="flex flex-col items-center mb-8">
        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
        <h2 className="text-lg font-semibold text-gray-900">Ravi Kumar</h2>
        <p className="text-sm text-gray-500">Individual Fundraiser ✔️</p>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="flex flex-col gap-3 ">
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
      </nav>

    </aside>
  );
}

export default FundraiserSidebar;
