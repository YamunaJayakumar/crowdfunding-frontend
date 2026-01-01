import { User2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white to-gray-300 px-4">
      
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT */}
        <div className="hidden md:flex items-center justify-center bg-linear-to-br from-orange-400 to-orange-700 text-white p-10">
          <div className="text-center">
            <img
              className="w-64 mx-auto drop-shadow-md"
              src="/Charity-rafiki (1).svg"
              alt="Charity illustration"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-sm max-w-xs mx-auto opacity-90">
              Together we can change lives through meaningful campaigns.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-10 flex flex-col justify-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <User2 size={32} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Create your account
          </h2>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-3 px-4 py-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Forgot password ABOVE password */}
          {/* <div className="flex justify-end mb-2">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-500 hover:text-orange-600"
            >
              Forgot password?
            </Link>
          </div> */}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Confirm Password */}
          {/* <input
            type="password"
            placeholder="Confirm password"
            className="w-full mb-6 px-4 py-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          /> */}

          {/* Register Button */}
          <button className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Register
          </button>

          {/* Login Redirect */}
          <p className="text-xs text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-orange-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
