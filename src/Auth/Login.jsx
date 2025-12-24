import {User2} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-br from white to-gray-300 px-4 '>
      {/* main card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid md:grid-cols-2">
        {/* left section */}
         {/* LEFT */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
              <User2 size={32} /> 
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Login to KindHeart
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Login
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
           New user? · <Link to={'/register'} className='hover:text-orange-600'>Create account</Link>
          </p>
        </div>
       {/* RIGHT */}
        <div className="hidden md:flex items-center justify-center bg-linear-to-br from-orange-400 to-orange-700 text-white p-10">
          <div className="text-center">
            <img className='w-64 mx-auto drop-shadow-md' src="/Charity-rafiki (1).svg" alt="" />
            <h1 className="text-4xl font-bold mb-4">Welcome.</h1>
            <p className="text-sm max-w-xs mx-auto opacity-90">
              Together we can change lives through meaningful campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
