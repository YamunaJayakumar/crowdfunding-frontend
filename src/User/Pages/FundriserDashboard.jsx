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
    <div className="min-h-screen bg-[#faf8f6] p-8">
  <div className="max-w-7xl mx-auto flex flex-col gap-10">

    {/* HEADER */}
    <header className="bg-white rounded-3xl shadow-sm border p-8 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-semibold text-gray-800">
          Welcome back 👋
        </h1>
        <p className="text-gray-500 mt-2 max-w-lg">
          Manage campaigns, track donations and connect with supporters.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate("/fundraiser/create-campaign")}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:scale-[1.02] transition"
        >
          + Start Campaign
        </button>

        <button
          onClick={() => setOpenProfile(true)}
          className="bg-white border shadow px-6 py-2.5 rounded-xl flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition"
        >
          <User size={20} /> Profile
        </button>
      </div>
    </header>

    {/* DASHBOARD BODY FLEX (LIKE THE REFERENCE) */}
    <div className="flex gap-8">

      {/* LEFT MAIN CONTENT */}
      <div className="w-full">
        
        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </section>

        {/* CAMPAIGN CARDS LIKE THE REFERENCE EXAMPLE */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Campaigns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {campaigns.map((campaign) => {
              const progress = Math.min((campaign.raised / campaign.target) * 100, 100);

              return (
                <div
                  key={campaign.id}
                  className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition relative"
                >
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full font-medium ${
                      campaign.status === "live"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {campaign.status === "live" ? "Live" : "Under Review"}
                  </span>

                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Raised: ₹{campaign.raised}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Target: ₹{campaign.target}
                  </p>

                  <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button className="text-orange-600 border border-orange-300 px-3 py-1 rounded-lg text-sm hover:bg-orange-50 transition">
                      Edit
                    </button>
                    <button className="text-orange-600 border border-orange-300 px-3 py-1 rounded-lg text-sm hover:bg-orange-50 transition">
                      View
                    </button>
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-lg text-sm hover:scale-[1.02] transition">
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* RIGHT SIDEBAR (Minimal like reference) */}
      <aside className="hidden lg:block w-80 bg-white rounded-3xl border shadow-sm p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Activity</h3>
        <p className="text-gray-500 text-sm">Coming soon...</p>
      </aside>

    </div>
  </div>
</div>

  );
}

export default FundriserDashboard;
