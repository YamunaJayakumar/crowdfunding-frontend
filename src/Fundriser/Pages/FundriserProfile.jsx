import React, { useState } from "react";
import FundraiserSidebar from "../components/FundriserSidebar";
import FundriserHeader from "../components/FundriserHeader";
import { FaPen } from "react-icons/fa";
FaPen
function FundriserProfile() {
  const [formData, setFormData] = useState({
    username: "",
    passWord: "",
    confirmPassWord: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                        <input type="file" id="uploadImg" hidden />
                        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="person" />
                    </label>
                    <button style={{marginTop:'-20px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/>
                  </button>
                </div>
                 
                  {/* username */}
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
            {/* password */}
              <input
                name="passWord"
                value={formData.passWord}
                onChange={handleChange}
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
             {/* confirm password */}
              <input
                name="confirmPassWord"
                value={formData.confirmPassWord}
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border rounded-lg border-gray-400
                  "
              />
            </form>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between gap-3 pt-6">
              <button
                type="button"
                className="w-1/2 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 transition"
              >
                Reset
              </button>

              <button
                type="button"
                className="w-1/2 py-2 bg-orange-600 text-white rounded-lg
                  hover:bg-orange-500 transition"
              >
                Update
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default FundriserProfile;
