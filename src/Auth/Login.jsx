import {User2} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  
  return (
    <div
  className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center "
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D')",
  }}
>
  {/* main card */}
  <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden ">

    {/* LEFT */}
    <div className="p-10 flex flex-col justify-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
          <User2 size={32} />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">
        Login to <span className="text-orange-600">KindHeart</span>
      </h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md"
      />

      <div className="flex justify-end mb-2">
        <Link to="/" className="text-sm text-gray-500 hover:text-orange-600">
          Forgot password?
        </Link>
      </div>

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-3 border border-orange-400 rounded-md"
      />

      <button className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
        Login
      </button>

      <p className="text-xs text-center text-gray-500 mt-4">
        New user? ·{" "}
        <Link to="/register" className="hover:text-orange-600">
          Create account
        </Link>
      </p>
    </div>

   

  </div>
</div>

  )
}

export default Login
