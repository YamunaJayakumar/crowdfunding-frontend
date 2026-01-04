import { User2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div  className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center "
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D')",
  }}>
      
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        

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
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-3 px-4 py-3 border border-orange-400 rounded-md "
          />

         

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md "
          />


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
