import React, {useEffect, useState } from "react";
import FundraiserSidebar from "../components/FundriserSidebar";
import FundriserHeader from "../components/FundriserHeader";
import { FaPen } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { updateFundraiserProfileAPI } from "../../services/allAPI";
import serverURL from "../../services/serverURL";


function FundriserProfile() {
  const navigate=useNavigate()
  const [userDetails,setUserDetails]=useState({
   id:"", username:'',password:"",role:'',picture:""
  })
  const [confirmPassword,setConfirmPassword]=useState("")
  const[exisitngPicture,setExisitngPicture]=useState()
  const[preview,setPreview]=useState() //url of image
  const[passwordMatch,setPasswordMatch]=useState(true)
  
  console.log(userDetails)
//before edit get existing values
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user=JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,password:''})
        setExisitngPicture(user.picture) 
    }

  },[])

  const handleUploadPicture=(imgFile)=>{
    setUserDetails({...userDetails,picture:imgFile})
    const url = URL.createObjectURL(imgFile)
    setPreview(url)
  }

  const checkPasswordMatch=(data)=>{
    setConfirmPassword(data)
    userDetails.password ==data?setPasswordMatch(true):setPasswordMatch(false)
  }
  const handleResetForm=()=>{
    const user=JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role})
        setExisitngPicture(user.picture)
        setPreview("")
        setConfirmPassword("")
        setPasswordMatch(true)


  }

  const handleProfileUpdate=async()=>{
    const {username,password,role,picture,id} = userDetails
    if(!username ||!password ){
      toast.info("please fill the form completely")
    }
    else{
      
        const token= sessionStorage.getItem("token")
        const reqHeader ={
          'Authorization':`Bearer ${token}`
        }
        const reqBody =new FormData()
        for (let key in userDetails){
          if(key !=="picture"){
            reqBody.append(key,userDetails[key])

          }else{
            preview?
            reqBody.append("picture",userDetails.picture)
            :reqBody.append("picture",exisitngPicture)
          }
        }
      const result=await updateFundraiserProfileAPI(id,reqBody,reqHeader)
      if(result.status===200){
        toast.success("profile updated successfully")
        setTimeout(() => {
          navigate('/login')
          
        }, 1000);
      }
      else{
        console.log(result)
        toast.warning("something went wrong")

      }
        

      
      
    }


  }
  
  
   
  


  

  return (
    <>
      <FundriserHeader />

      <div className="min-h-screen grid grid-cols-4 ">

        {/* SIDEBAR */}
        <div className="col-span-1  bg-white">
          <FundraiserSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-3 flex items-center justify-center p-6">

          {/* PROFILE CARD */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

            {/* HEADER */}
            <div className="mb-2 text-center">
              

              <h2 className="text-2xl font-semibold text-gray-900">
                Edit Profile
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Update your login information
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-4">
                {/* img */}.
                <div className="flex flex-col items-center">
                    <label htmlFor="uploadImg" className=" px-4 py-3  rounded-lg border-gray-300
                      focus:outline-none focus:ring-2 focus:ring-orange-400">
                        <input onChange={e=> handleUploadPicture(e.target.files[0])} type="file" id="uploadImg" hidden  />
                        {
                          exisitngPicture ?
                          <img className="w-20 h-20 rounded-full" src={preview?preview:exisitngPicture.startsWith("https://lh3.googleusercontent.com/")?exisitngPicture:`${serverURL}/uploads/${exisitngPicture}`} />
                          :
                          <img className="w-20 h-20 rounded-full" src={preview?preview:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"} alt="person" />

                        }
                    </label>
                    <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/>
                  </button>
                </div>
                 
                  {/* username */}
              <input
                name="username"
                value={userDetails.username}
                onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
            {/* password */}
              <input
                name="password"
                value={userDetails.password}
                onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
             {/* confirm password */}
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={e=>checkPasswordMatch(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
              {!passwordMatch
              && <div className="mb-3 w-full px-5 font-bold text-red-600 text-sm">*confirm password must match with new password</div>
              }
            </form>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between gap-3 pt-6">
              <button onClick={handleResetForm}
                type="button"
                className="w-1/2 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 transition"
              >
                Reset
              </button>

              <button
              onClick={handleProfileUpdate}
                type="button"
                className="w-1/2 py-2 bg-orange-600 text-white rounded-lg
                  hover:bg-orange-500 transition"
                  disabled={!passwordMatch?true:false}
                  
              >
                Update
              </button>
            </div>

          </div>
        </div>
        <ToastContainer
                                  position="top-center"
                                  autoClose={3000}
                                  theme="colored"
                                />
      </div>
    </>
  );
}

export default FundriserProfile;
