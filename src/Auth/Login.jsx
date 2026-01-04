import {User2} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  
  return (
    <div className='min-h-screen flex items-center justify-center  px-4 bg-linear-to-br from-orange-400 to-orange-700'>
      {/* main card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid md:grid-cols-2">
        {/* left section */}
         {/* LEFT */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
              <User2 size={32} /> 
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Login to <span className="text-orange-600">KindHeart</span>
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md "
          />
           {/* Forgot password ABOVE password */}
           <div className="flex justify-end mb-2">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-orange-600"
            >
              Forgot password?
            </Link>
          </div> 
                  <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-3 border border-orange-400 rounded-md "
          />

          <button className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Login
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
           New user? · <Link to={'/register'} className='hover:text-orange-600'>Create account</Link>
          </p>
        </div>
       {/* RIGHT */}
        <div className="hidden md:flex items-center justify-center  text-white  bg-white">
          <div className="text-center">
            <img className='w-94 mx-auto drop-shadow-md pt-10' src="/charity-logo.svg" alt="" />
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
