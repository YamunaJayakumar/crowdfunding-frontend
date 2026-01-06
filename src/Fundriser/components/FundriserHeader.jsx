import React from 'react'
function FundriserHeader() {
      
  return (
   
<header>
      {/*  Logo */}
      <div className="flex items-center gap-3 px-7 py-5 bg-orange-100">
        {/* Logo placeholder */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <img width={'90px'} src="/log2-removebg-preview.png" alt="" />
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