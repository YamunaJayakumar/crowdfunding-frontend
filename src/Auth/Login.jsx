import { User2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginAPI, loginAPI } from '../services/allAPI';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate()
  const [viewPassword, setViewPassword] = useState(false)
  const [userDetails, setUserDetails] = useState({
    email: "", password: ""
  })
  console.log(userDetails)

  //login
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
      // toast.success("api call")
      try {
        const result = await loginAPI(userDetails)
        console.log(result)
        if (result.status == 200) {
          toast.success("login successfull")
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin/dashboard')
            } else {
              navigate('/')
            }

          }, 2000);
        }
        else if (result.status == 401 || result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ email: "", password: "" })
        }
        else {
          toast.warning("something went wrong")
          setUserDetails({ email: "", password: "" })
        }
      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.info("fill the form completely")

    }

  }
  //google-login
  const handlegoogleLogin=async(credentialResponse)=>{
    console.log("inside handle google login");
    console.log(credentialResponse);
    const decode=jwtDecode(credentialResponse.credential)
    console.log(decode);
    const result=await googleLoginAPI({username:decode.name,email:decode.email,password:'googlePassword',picture:decode.picture})
    console.log("FULL RESPONSE:", result);
console.log("RESULT.DATA:", result?.data?.role);
    if(result.status==200){
      toast.success("Login Successfull")
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      setTimeout(()=>{
        if(result.data.user.role =="admin"){
          navigate('/admin/dashboard')
        }
        else{
          navigate('/')
        }
      },2500)
    }else{
      console.log(result);
      toast.error("something went wrong")
      
    }

    
    

    

  }


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
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            type="text"
            placeholder="email"
            className="w-full mb-4 px-4 py-3 border border-orange-400 rounded-md"
          />

          <div className="flex justify-end mb-2">
            <Link to="/" className="text-sm text-gray-500 hover:text-orange-600">
              Forgot password?
            </Link>
          </div>
          <div className="flex items-center">
            <input
              value={userDetails.password}
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full mb-6 px-4 py-3 border border-orange-400 rounded-md"
            />
            {
              viewPassword ?
                <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px', marginTop: '-20px' }} />
                :
                <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px', marginTop: '-20px' }} />

            }
          </div>

          <button onClick={handleLogin} className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Login
          </button>
          {/* google autehntication */}
          <p>----------------------------or---------------------------</p>
          <div className='my-5 flex items-center justify-center w-full'>
        

            <GoogleLogin
              onSuccess={credentialResponse => {
              handlegoogleLogin(credentialResponse)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />

          </div>

          <p className="text-xs text-center text-gray-500 mt-4">
            New user? ·{" "}
            <Link to="/register" className="hover:text-orange-600">
              Create account
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

  )
}

export default Login
