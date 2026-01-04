import React from 'react'
import AdminHeader from '../Compontents/AdminHeader'
import AdminSidebar from '../Compontents/AdminSidebar'
import {
  FaDollarSign,
  FaUsers,
  FaFlag,
FaUserClock,
  FaCheckCircle,
 FaUserTie,
 FaMoneyCheckAlt,
 FaExclamationCircle
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

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
  }
  ,
  {
    title: "Completed Campaigns",
    value: "5",
    icon: <FaCheckCircle />,
  },
  {
    title: "Total Fundraisers",
    value: "18",
    icon: <FaUserTie />,
  },
  {
  title: "Pending Fundraiser Approvals",
  value: "8",
  icon: <FaUserClock />,
  color: "text-yellow-600 bg-yellow-100",
},
{
    title: "Withdrawal Requests",
    value: "5",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Total Complaints",
    value: "2",
    icon: <FaExclamationCircle />,
  },
  
];

const lineData = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 800 },
  { month: "Mar", amount: 1750 },
  { month: "Apr", amount: 1200 },
  { month: "May", amount: 2000 },
];
const pieData = [
  { name: "Active", value: 3 },
  { name: "Completed", value: 5 },
  { name: "Pending", value: 2 },
];
const COLORS = ["#f97316", "#10b981", "#facc15"];

  return (
    <div className='  min-h-screen bg-gray-50'>
      <AdminHeader />
      <div className="space-y-8 flex flex-col md:flex-row h-screen">
        
          <AdminSidebar />
        <div className="flex-1 space-y-2 p-6">
          
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {/* stats-cards */}
            {
              stats.map((stat,index)=>(
                <div key={index} className="bg-white shadow-md p-8 flex items-center gap-4 rounded-xl  h-full">
              {/* icon */}
              <div className='w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-xl '>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900"> {stat.value}</p>
              </div>
            </div>
              ))
            }
              
  
          </div>

          {/* charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Line Chart */}
      <div className=" p-4 ">
        <h3 className="text-gray-700 font-semibold mb-4">Total Funds Raised</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#f97316" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

        {/* Pie Chart */}
      <div className="  p-4 ">
        <h3 className="text-gray-700 font-semibold mb-4">Campaign Status</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard