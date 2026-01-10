import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FaAddressCard, FaPowerOff } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import serverURL from '../services/serverURL';

function Navbar() {
  const [token, setToken] = useState(null)
  const [dropDown, setDropDown] = useState(false)
  const [dp, setDp] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = sessionStorage.getItem("token")
    const userData = sessionStorage.getItem("user")

    if (userToken && userData) {
      setToken(userToken)
      setDp(JSON.parse(userData).picture)
    }
  }, [])

  const handleLogout = () => {
    sessionStorage.clear()
    setToken(null)
    setDp(null)
    setDropDown(false)
    navigate('/login')
  }

  const profileImage = dp
    ? `${serverURL}/uploads/${dp}`
    : "https://png.pngtree.com/png-vector/20211007/ourmid/pngtree-casual-stylish-fashionable-people-icon-in-flat-style-png-image_3974718.png"

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
          <img src="/log2-removebg-preview.png" alt="logo" className="w-10" />
          <span className="text-xl font-extrabold text-gray-700 ms-1">
            <sub>KindHeart</sub>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["Home", "Campaigns", "Reviews", "Who we are"].map(item => (
            <li key={item} className="hover:text-orange-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() =>
              token
                ? navigate('/fundraiser/create-campaign')
                : navigate('/login')
            }
            className="bg-linear-to-br from-orange-400 to-orange-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Start Campaign
          </button>

          {!token ? (
            <Link to="/login">
              <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropDown(!dropDown)}
                className="rounded-full p-1 hover:bg-gray-200"
              >
                <img src={profileImage} className="w-10 h-10 rounded-full" />
              </button>

              {dropDown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                  <Link
                    to="/fundriser/dashboard"
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <FaAddressCard className="me-2" /> Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <FaPowerOff className="me-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          <AiOutlineMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <ul className="text-center space-y-3 text-gray-700">
            {["Home", "Campaigns", "How it works", "Who we are"].map(item => (
              <li key={item} className="hover:text-orange-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              token
                ? navigate('/fundraiser/create-campaign')
                : navigate('/login')
            }
            className="w-full bg-linear-to-br from-orange-400 to-orange-600 text-white py-2 rounded-md"
          >
            Start Campaign
          </button>

          {!token ? (
            <Link to="/login">
              <button className="w-full border border-orange-600 text-orange-600 py-2 rounded-md">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <FaPowerOff /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
