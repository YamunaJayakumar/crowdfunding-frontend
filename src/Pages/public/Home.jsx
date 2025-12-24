import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/Home components/Hero'
import { Share2Icon } from 'lucide-react'
import reviews from '../../components/Home components/Review'
import Review from '../../components/Home components/Review'
import { useNavigate } from 'react-router-dom'



function Home() {
  const navigate = useNavigate();
  return (
    <div >
      <Navbar />
      <Hero />
      <div className="my-15 px-4  ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Campaigns */}
          <div>
            <h3 className="text-4xl sm:text-4xl md:text-8xl font-bold text-orange-500">100+</h3>
            <p className="text-xl sm:text-base md:text-3xl text-gray-600 mt-2">Campaigns</p>
          </div>

          {/* Causes */}
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-8xl font-bold text-orange-500">30+</h3>
            <p className="text-sm sm:text-base md:text-3xl text-gray-600 mt-2">Causes</p>
          </div>

          {/* Lives Impacted */}
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-8xl font-bold text-orange-500">40M+</h3>
            <p className="text-sm sm:text-base md:text-3xl text-gray-600 mt-2">Lives Impacted</p>
          </div>
        </div>
      </div>

      {/* campaigns */}
      <section>
        <h1 className="text-4xl text-center mt-24 mb-4">
          Supporting causes at <span className="font-bold text-orange-600">every level</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover verified campaigns for medical needs, education, emergencies, and nonprofit initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid md:grid-cols-4 md:gap-0 mx-10 ">
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
                <button className='border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white'>Donate</button>
                {/* share icon */}
                <Share2Icon />

              </div>
            </div>
          </div>
          {/* duplicate */}
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
              <h3 className="text-lg font-medium mb-2 text-gray-900">
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
                <button className='border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white'>Donate</button>
                {/* share icon */}
                <Share2Icon />

              </div>
            </div>
          </div>
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
              <h3 className="text-lg font-medium mb-2 text-gray-900">
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
                <button className='border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white'>Donate</button>
                {/* share icon */}
                <Share2Icon />

              </div>
            </div>
          </div>
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
              <h3 className="text-lg font-medium  mb-2 text-gray-900">
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
                <button className='border border-orange-600 text-orange-600 px-4 py-2 rounded-md text-sm hover:bg-linear-to-br hover:from-orange-400 hover:to-orange-600 hover:text-white'>Donate</button>
                {/* share icon */}
                <Share2Icon />

              </div>
            </div>
          </div>


        </div>
        {/* view all */}
        <div className='flex justify-center mt-12'>
          <button onClick={() => navigate("/campaign-details")} className='border border-orange-600 text-orange-600 px-8 py-3 rounded-lg text-sm fnt-medium hover:bg-linear-to-br
        hover:from-orange-400
      hover:to-orange-600
      hover:text-white transition'>
            View All Campaigns
          </button>

        </div>
      </section>
      {/* who we are */}
     <section className="bg-white py-20">

  {/* TOP IMAGE */}
  <div className="w-full mb-20">
    <div
  className="
    w-full h-72 md:h-96
    bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c')]
    bg-cover bg-center
    bg-scroll md:bg-attach-fixed
  "
>
</div>
  </div>

  {/* CIRCULAR IMAGE CLUSTER */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-5xl">

      <img
        src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6"
        alt="charity"
        className="w-40 h-40 md:w-full md:h-52 rounded-full object-cover grayscale"
      />

      <img
        src="/log2-removebg-preview.png"
        alt="FundRise Logo"
        className="w-44 h-44 md:w-full md:h-56 rounded-full object-contain "
      />

      <img
        src="https://c8.alamy.com/comp/F3GW1X/charity-people-from-city-giving-water-to-vari-pilgrim-at-pune-maharashtra-F3GW1X.jpg"
        alt="charity"
        className="w-40 h-40 md:w-full md:h-52 rounded-full object-cover grayscale"
      />

    </div>
  </div>

  {/* TEXT CONTENT */}
  <div className="text-center mt-20 px-6">
    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
      More Than{" "}
      <span className="font-bold text-orange-600">
        10 Million
      </span>{" "}
      People Have Benefited
    </h1>

    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Trusted by millions worldwide to fund hope, healing, and opportunity
      through transparent and secure fundraising.
    </p>

    <button
      className="bg-linear-to-br from-orange-400 to-orange-600 text-white
      px-6 py-3 rounded-lg text-sm md:text-base
      hover:opacity-90 transition"
    >
      Donate Now
    </button>
  </div>

  {/* BOTTOM IMAGE */}
  <div className="w-full mt-20">
     <div
  className="
    w-full h-72 md:h-96
    bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433')]
    bg-cover bg-center
    bg-scroll md:bg-attach-fixed
  "
></div>
  
  </div>

</section>

      {/* testimoonials */}
      <section>
        <Review/>
      </section>
    </div >


  )
}

export default Home
