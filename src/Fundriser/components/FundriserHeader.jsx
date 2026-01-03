import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function FundriserHeader() {
      const navigate = useNavigate();
  return (
   <header className="flex   bg-gray-200 p-8">

      {/*  Logo */}
      <div className="flex items-center gap-3 px-7">
        {/* Logo placeholder */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <img src="/log2-removebg-preview.png" alt="" />
        </div>
        {/* Welcome message */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Ravi!</h1>
          <p className="text-sm text-gray-500">Manage your campaigns from here.</p>
        </div>
      </div>

     

    </header>
  )
}

export default FundriserHeader