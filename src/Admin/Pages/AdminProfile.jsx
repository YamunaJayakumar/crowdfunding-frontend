import React, { useEffect, useState } from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";
import { FaPen } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { EditAdminProfileAPI } from "../../services/allAPI";
import { useNavigate } from "react-router-dom";
import serverURL from "../../services/serverURL";


function AdminProfile() {
  
  const navigate=useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    picture: ''

  });
  
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const[existingPicture,setExisitngPicture]=useState()
  const [preview, setPreview] = useState()
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
    
    const user =JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,username:user.username})
    setExisitngPicture(user.picture)
    
    }
    
  },[])


  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleUploads = (e) => {
    const file = e.target.files[0]
    setUserDetails({...userDetails,picture:file})
    const url = URL.createObjectURL(file)
    setPreview(url)

  }
  const resetForm=()=>{
    const user =JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,role:user.role,username:user.username})
    setExisitngPicture(user.picture)
    setConfirmPassword("")
    setPasswordMatch(true)
   
    

  }
   const checkPasswordMatch=(data)=>{
    setConfirmPassword(data)
    userDetails.password == data?setPasswordMatch(true):setPasswordMatch(false)
    return
  }
  
  const hadleUpdate =async(e)=>{
    e.preventDefault()
    const {username,password,picutre,role,id}=userDetails
    //check all fileds are filled
   if(!username || !password || !confirmPassword){
    toast.info("please fill the form completely")
   
   }
   
//get token
   else{
    const token=sessionStorage.getItem("token")
   //create header and body
   const reqHeader={
    'Authorization':`Bearer ${token}`
   }
   const reqBody=new FormData()
   reqBody.append("username",userDetails.username)
   reqBody.append("password",userDetails.password)
   if(preview){
    reqBody.append("picture",userDetails.picture)
   }
   else{
    reqBody.append("picture",existingPicture)
   }
//api call
   try{
    const result =await EditAdminProfileAPI(reqBody,reqHeader)
    if(result.status==200){
      toast.success("profile updated successfully")
      setTimeout(()=>{
        navigate('/login')
      },1000)

    }else{

      toast.warning("profile updation failed")
    }

   }
   catch(err){
   console.log(err)
   toast.info("profile updation failed")
   }
   
   }
  }


  return (
    <div>
      <AdminHeader />

      <div className="grid grid-cols-4 min-h-screen">
        {/* SIDEBAR */}
        <div className="col-span-1">
          <AdminSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-3 mt-18 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT TEXT CONTENT */}
            <div className="space-y-5 max-w-xl">
              <h2 className="text-2xl font-bold">
                Welcome Back, Administrator
              </h2>

              <p className="text-gray-700 leading-relaxed">
                This is your control space — where decisions are made, security is
                maintained, and the platform stays reliable for every user who
                depends on it. From here, you can manage your account identity
                and keep your administrative access protected.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A well-maintained admin profile ensures smooth system operations,
                reduces security risks, and helps you stay in full control of
                platform activity. Small updates here make a big difference behind
                the scenes.
              </p>

              <p className="font-semibold text-gray-800">
                ⚙️ What You Can Manage Here
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Your Identity:</span> Keep your
                  username and profile image accurate.
                </li>
                <li>
                  <span className="font-semibold">Secure Access:</span> Update your
                  password regularly.
                </li>
                <li>
                  <span className="font-semibold">Account Safety:</span> Protect
                  sensitive administrative controls.
                </li>
              </ul>

              <p className="text-sm text-orange-500 italic mt-4">
                “Strong administration starts with secure credentials.”
              </p>
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* CARD HEADER */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Edit Profile
                  </h2>
                  <p className="text-sm text-gray-500">
                    Update your login information
                  </p>
                </div>

                {/* FORM */}
                <form className="space-y-4">
                  {/* IMAGE */}
                  <div className="flex flex-col items-center">
                    <label htmlFor="uploadImg" className="cursor-pointer">
                      <input type="file" id="uploadImg" hidden onChange={(e) => handleUploads(e)} />
                      {
                        existingPicture? <img
                        className="w-20 h-20 rounded-full border"
                        src={preview?preview:`${serverURL}/uploads/${existingPicture}`}
                        alt="profile"
                      />:
                        <img
                        className="w-20 h-20 rounded-full border"
                        src={preview?preview:"https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"}
                        alt="profile"
                      />
                      }
                    </label>
                    <button className="bg-yellow-400 p-2 rounded-full text-white -mt-4">
                      <FaPen />
                    </button>
                  </div>

                  <input
                    name="username"
                    value={userDetails.username}
                    onChange={handleChange}
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <input
                    name="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="New Password"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <input
                    name="confirmPassWord"
                    value={confirmPassword}
                    onChange={(e) =>checkPasswordMatch(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </form>
                {!passwordMatch &&
                 <div className="mb-3 w-full px-5 font-bold text-red-600 text-sm">*confirm password must match with new password</div>
                }
                {/* ACTION BUTTONS */}
                <div className="flex gap-3 pt-6">
                  <button onClick={resetForm}className="w-1/2 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                    Reset
                  </button>
                  <button onClick={hadleUpdate} className="w-1/2 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500">
                    Update
                  </button>
                </div>

              </div>
            </div>

          </div>
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

export default AdminProfile;
