import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaAddressCard, FaPowerOff } from 'react-icons/fa';
import { SiSession } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import serverURL from '../services/serverURL'
function Navbar() {
  const [token, setToken] = useState()
  const [dropDown, setDropDown] = useState(false)
   const[dp,setDp]=useState()
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  console.log(dp)


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")

      setToken(userToken)
      
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)




    }

  }, [token])

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-50 py-3 shadow-sm md:shadow-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img width="40" src="/log2-removebg-preview.png" alt="logo" />
          <span className="text-xl md:text-2xl font-extrabold text-gray-700">
            <sub> KindHeart</sub>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 transition cursor-pointer">Home</li>
          <li className="hover:text-orange-600 transition cursor-pointer">Campaigns</li>
          <li className="hover:text-orange-600 transition cursor-pointer">Reviews</li>
          <li className="hover:text-orange-600 transition cursor-pointer">Who we are</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={(token) => !token ? navigate('/login') : navigate('/fundraiser/create-campaign')}
            className=" bg-linear-to-br from-orange-400 to-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition"
          >
            Start Campaign
          </button>

          {
            !token ?
              <Link to="/login">
                <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-orange-600 hover:text-white transition">
                  Login
                </button>
              </Link>
              :
              // profile &dropdown
              <div className="relative inline-block text-left ms-2">
                <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow-xs  rounded-full hover:bg-gray-200">
                <img className='w-14 h-14 rounded-full' src={dp?`${serverURL}/uploads/${dp}`:"https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"} alt="profile" />
               </button>
                {/* dropdown */}
                {
                dropDown &&
                  <div className="absolute right-0 z-50 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden ">
                  <Link to={'/fundriser/dashboard'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                    <FaAddressCard className='me-2' />dashboard
                  </Link>
                  <button  className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                    <FaPowerOff className='me-2' />Logout
                  </button>
                </div>
                }
              </div>
          }
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl p-2 rounded-md hover:bg-gray-100"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden bg-white flex flex-col items-center transition-all duration-300 ${open ? "max-h-96 py-5 shadow-md" : "max-h-0"
          }`}
      >
        <ul className="text-gray-700 font-medium text-center space-y-4">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Campaigns</li>
          <li className="hover:text-orange-600 cursor-pointer">How it works</li>
          <li className="hover:text-orange-600 cursor-pointer">Who we are</li>
        </ul>

        <div className="flex flex-col gap-3 w-full px-10 mt-4">
          <button
            onClick={(token) => !token ? navigate('/login') : navigate('/fundraiser/create-campaign')}
            className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Start Campaign
          </button>
          {
            !token ?
              <Link to="/login" className="w-full">
                <button className="w-full border border-orange-600 text-orange-600 py-2 rounded-md hover:bg-orange-600 hover:text-white transition">
                  Login
                </button>
              </Link> :
              // profile &dropdown
              <div className="relative inline-block text-left ms-2">
                <button onClick={()=>setDropDown(!dropDown)}  className="w-full bg-white px-3 py-2 shadow-xs  rounded-2xl hover:bg-gray-200">
                <img className='w-10 h-10 rounded-full' src={dp?`${serverURL}/uploads/${dp}`:"https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"} alt="profile" />
               </button>
                {/* dropdown */}
                {
                dropDown &&
                  <div className="absolute right-0 z-50 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
                  <Link to={'/fundriser/dashboard'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                    <FaAddressCard className='me-2' />dashboard
                  </Link>
                  <button  className='px-4 py-2 text-sm text-gray-700 flex items-center'>
                    <FaPowerOff className='me-2' />Logout
                  </button>
                </div>
                }
              </div>
          }

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
