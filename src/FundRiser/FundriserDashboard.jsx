import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "lucide-react";

function FundriserDashboard() {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  const stats = [
    { title: "Total Raised", value: "₹1,45,000" },
    { title: "Total Target", value: "₹3,00,000" },
    { title: "Donors", value: "120" },
    { title: "Active Campaigns", value: "2" },
  ];

  const campaigns = [
    {
      id: 1,
      title: "Help Ravi Fight Kidney Failure",
      raised: 85000,
      target: 150000,
      status: "review",
    },
    {
      id: 2,
      title: "Education for Rural Children",
      raised: 60000,
      target: 150000,
      status: "live",
    },
    {
      id: 3,
      title: "Save Stray Animals",
      raised: 40000,
      target: 100000,
      status: "live",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      
      {/* HEADER / HERO */}
      <header className="bg-linear-to-br from-orange-400 to-orange-600 rounded-2xl p-6 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back !!!
          </h1>
          <p className="mt-1 text-orange-100 max-w-xl">
            Manage your campaigns, track donations, and share updates with your supporters.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/fundraiser/create-campaign")}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50"
          >
            + Start Campaign
          </button>

          <button
            onClick={() => setOpenProfile(true)}
            className="bg-white px-6 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2 text-orange-600"
          >
            <User size={'22'} className="text-orange-600"/> Profile
          </button>
        </div>
      </header>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* CAMPAIGNS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Campaigns</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => {
            const progress = Math.min(
              (campaign.raised / campaign.target) * 100,
              100
            );

            return (
              <div
                key={campaign.id}
                className="relative bg-white p-6 rounded-xl shadow"
              >
                {/* STATUS BADGE */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === "live"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {campaign.status === "live" ? "Live" : "Under Review"}
                </span>

                <h3 className="text-lg font-semibold mb-2">
                  {campaign.title}
                </h3>

                <p className="text-sm text-gray-600">
                  Raised: <span className="font-medium">₹{campaign.raised}</span>
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Target: ₹{campaign.target}
                </p>

                {/* PROGRESS BAR */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-linear-to-br from-orange-400 to-orange-600 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* ACTIONS */}
                <div className="flex justify-center gap-3">
                  <button className="text-orange-600 border border-orange-400 px-3 py-1 rounded-lg text-sm">
                    Edit
                  </button>
                  <button className="text-orange-600 border border-orange-400 px-3 py-1 rounded-lg text-sm">
                    View
                  </button>
                  <button className="bg-linear-to-br from-orange-400 to-orange-600 text-white px-3 py-1 rounded-lg text-sm">
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BACKDROP */}
      {openProfile && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenProfile(false)}
        />
      )}

      {/* OFFCANVAS PROFILE */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-100 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          openProfile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Profile Settings</h2>
          <button onClick={() => setOpenProfile(false)} className="text-xl">
            ✕
          </button>
        </div>

        <form className="p-5 space-y-4">
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value="user@email.com"
              disabled
              className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="text-right">
            <button type="button" className="text-sm text-orange-500">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-2 rounded-lg"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default FundriserDashboard;
