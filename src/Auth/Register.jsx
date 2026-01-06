import { User2 } from "lucide-react";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { registerAPI } from "../services/allAPI";
function Register() {
  const navigate=useNavigate()
  const [viewPassword, setViewPassword] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '', email: '', password: ''
  })
  // console.log(userDeatails);
  const handleRegister = async(e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (email && password && username) {

      try{
        const result=await registerAPI(userDetails)
        if(result.status==200){
          toast.success("registered successfully...please login")
          setUserDetails({ username: '', email: '', password: ''})
          setTimeout(() => {
           navigate('/login') 
          }, 2000);
          
        }
        else if(result.status==409){
          toast.warning(result.response.data)
          setUserDetails({username:'', email:'', password:''})
          setTimeout(() => {
           navigate('/login') 
          }, 2000);
          

        }
        else{
          console.log(result)
          toast.warning('something went wrong')
          setUserDetails({username: '', email: '', password: ''})
 
        }

        

      }catch(err){
        console.log(err)
      
      }
    }
    else {
      toast.info("please fill the form completely")
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center "
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
          value={userDetails.username}
            onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md "
          />

          {/* Email */}
          <input
          value={userDetails.email}
            onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            type="email"
            placeholder="Email address"
            className="w-full mb-3 px-4 py-3 border border-orange-400 rounded-md "
          />



          {/* Password */}
          <div className="flex items-center">
            <input
            value={userDetails.password}
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
              type={viewPassword ?"text":"password"}
              placeholder="Password"
              className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md "
            />
            {
              viewPassword ?
                <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px', marginTop: '-20px' }} />
                :
                <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px', marginTop: '-20px' }} />

            }
          </div>


          {/* Register Button */}
          <button onClick={handleRegister}
            className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
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

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default Register;
