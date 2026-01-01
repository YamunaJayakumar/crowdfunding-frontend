import { Share2Icon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CampaignCard() {
  const navigate=useNavigate()
  return (
    <div>
       <div className='relative max-w-xl bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl my-6 mx-3 '>
            {/* image */}
            <a href="">
              <img className='w-full h-48 object-cover rounded-t-3xl' src="https://images.unsplash.com/photo-1578496781985-452d4a934d50?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuY2VyJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="fundriser" />
            </a>
            {/* category badge */}
            <span className='absolute top-4 left-4 bg-linear-to-br from-orange-400 to-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-sm'>
              Medical
            </span>
            {/* card content */}
            <div className='p-5'>
              <h3 className="text-lg font-medium font-semi-bold mb-2 text-gray-900">
                Help Aarav Fight Cancer
              </h3>
              <p className='text-gray-600 text-smm mb-4 line-clamp-2'>
                Supporting urgent medical treatment and hospital expenses
                for a child in critical condition.
              </p>
              {/* progressbar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Raised ₹2,40,000</span>
                  <span>Goal ₹5,00,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-linear-to-br from-orange-400 to-orange-600 h-2 rounded w-[48%]"></div>
                </div>
              </div>
              {/* footer */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-500 mb-3">320 supporters</p>
              </div>
              <div className='flex items-center justify-between'>
                <button onClick={() => navigate('/view-campaign')} className='border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white'>Donate</button>
                {/* share icon */}
                <Share2Icon />

              </div>
            </div>
          </div>
          </div>
  )
}

export default CampaignCard