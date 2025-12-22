import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="w-full fixed top-0 bg-white  z-20 px-68 py-1">
            <div className="max-w-12xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* logo */}
                <div className=" max-w-4xl flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-600">
                        <img width={'50px'} src="/log2-removebg-preview.png" alt="" />
                    </span>
                </div>
                {/*links  */}
                <ul className='hidden md:flex justify-center gap-6 text-gray-700 font-medium'>
                    <li className='hover:text-orange-600 cursor-pointer'>Home</li>
                    <li className="hover:text-orange-600 cursor-pointer">Campaigns</li>
                    <li className="hover:text-orange-600 cursor-pointer">How it works</li>
                    <li className="hover:text-orange-600 cursor-pointer">Who we are</li>
                </ul>
                {/* buttons */}
                <div className="hidden md:flex items-center justify-end gap-6">
                    <button className=" bg-linear-to-br from-orange-400 to-orange-600 text-white px-4 py-2 rounded-md text-sm ">
                        Start Campaign
                    </button>
                    <button className="
    border border-orange-600
    text-orange-600
    px-4 py-2 rounded-md text-sm
    bg-transparent
    hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600
    hover:text-white
    transition-all duration-300
  ">
                        login
                    </button>
                </div>
                    {/*------------------- mobile screen------------------------------ */}
                    <div className=''>
                        <button onClick={() => setOpen(!open)} className='md:hidden' >
                           <AiOutlineMenu  />
                        </button>
                        
                    </div>

                

            </div>
            {/* mobile screen */}
                        {open &&
                        <div className="md:hidden flex flex-col text-center items-center justify-center gap-3">
                            <ul className=' text-gray-700 font-medium space-y-3'>
                                <li className='hover:text-orange-600 cursor-pointer'>Home</li>
                                <li className="hover:text-orange-600 cursor-pointer">Campaigns</li>
                                <li className="hover:text-orange-600 cursor-pointer">How it works</li>
                            </ul>
                            <div className='flex flex-col gap-3'>
                                <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700">
                                    Start Campaign
                                </button>
                                <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-orange-700 hover:text-white">
                                    login
                                </button>
                            </div>
                        </div>}
        </nav>
    )
}

export default Navbar