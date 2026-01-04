import React from 'react'
import {
  FaDollarSign,
  FaUsers,
  FaFlag,
  FaWallet
} from "react-icons/fa";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis,
  Tooltip, Legend,
  ResponsiveContainer
} from "recharts";
import FundriserHeader from '../components/FundriserHeader';
import FundraiserSidebar from '../components/FundriserSidebar';


const COLORS = ["#FFA500", "#00C49F", "#0088FE"];

function FundriserDashboard() {
   /* =======================
     STATS (USD ONLY)
  ======================== */
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
   /* =======================
     CHART DATA
  ======================== */
  const donationTrend = [
    { day: "Mon", amount: 40 },
    { day: "Tue", amount: 30 },
    { day: "Wed", amount: 55 },
    { day: "Thu", amount: 70 },
    { day: "Fri", amount: 60 },
    { day: "Sat", amount: 85 },
    { day: "Sun", amount: 100 },
  ];

  const campaignPerformance = [
    { name: "Medical", raised: 850 },
    { name: "Education", raised: 600 },
    { name: "Animals", raised: 400 },
  ];

  const donationDistribution = [
    { name: "Medical", value: 55 },
    { name: "Education", value: 30 },
    { name: "Animals", value: 15 },
  ];
 
  return (
    <>
    <FundriserHeader/>
      <div className='min-h-screen  bg-gray-50' >
      
        <div className='space-y-8 flex flex-col md:flex-row'>
          <FundraiserSidebar />
          
          <div className='flex-1 p-6 space-y-5 mt-10'>
             {/* =======================
                STATS CARDS
            ======================== */}
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
            
            {/* =======================
                BAR + PIE CHARTS
            ======================== */}
            <div className="grid lg:grid-cols-2 gap-6">
      
              {/* BAR CHART */}
              <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">
          Campaign Performance ($)
        </h3>
      
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaignPerformance}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
      
            <Bar dataKey="raised" radius={[10, 10, 0, 0]}>
              {campaignPerformance.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
      
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      
              {/* PIE CHART */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Donation Distribution (%)
                </h3>
      
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={donationDistribution}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {donationDistribution.map((_, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
      
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default FundriserDashboard