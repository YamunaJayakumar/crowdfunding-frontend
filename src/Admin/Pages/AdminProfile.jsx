import React, { useState } from "react";
import AdminSidebar from "../Compontents/AdminSidebar";
import AdminHeader from "../Compontents/AdminHeader";
import { FaPen } from "react-icons/fa";

function AdminProfile() {
  const [formData, setFormData] = useState({
    username: "",
    passWord: "",
    confirmPassWord: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                      <input type="file" id="uploadImg" hidden />
                      <img
                        className="w-20 h-20 rounded-full border"
                        src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
                        alt="profile"
                      />
                    </label>
                    <button className="bg-yellow-400 p-2 rounded-full text-white -mt-4">
                      <FaPen />
                    </button>
                  </div>

                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <input
                    name="passWord"
                    value={formData.passWord}
                    onChange={handleChange}
                    type="password"
                    placeholder="New Password"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <input
                    name="confirmPassWord"
                    value={formData.confirmPassWord}
                    onChange={handleChange}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </form>

                {/* ACTION BUTTONS */}
                <div className="flex gap-3 pt-6">
                  <button className="w-1/2 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                    Reset
                  </button>
                  <button className="w-1/2 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500">
                    Update
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
