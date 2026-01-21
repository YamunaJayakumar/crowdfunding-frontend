import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FundriserHeader() {
  
const [username,setUsername]=useState()
console.log(username)

useEffect(()=>{
  if(sessionStorage.getItem("token"))
  {
    const user =JSON.parse(sessionStorage.getItem("user"))
    setUsername(user?.username.split(' ')[0])

  }
},[])
      
  return (
   
<header>
      {/*  Logo */}
      <div className="flex items-center gap-3 px-7 py-6 bg-orange-100">
        {/* Logo placeholder */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <Link to="/"><img width={'100px'} src="/log2-removebg-preview.png" alt="" /></Link>
        </div>
        {/* Welcome message */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-600">Welcome back,<span className='text-orange-600 text-bold'>{username}</span></h1>
          <p className="text-sm text-gray-500">Manage your campaigns from here.</p>
        </div>
      </div>

     

    </header>
  )
}

export default FundriserHeader