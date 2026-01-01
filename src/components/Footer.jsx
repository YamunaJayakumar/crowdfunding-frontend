import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <img width={30} src="/log2-removebg-preview.png" alt="KindHeart Fund Logo" />
            <h4 className="text-2xl font-bold text-gray-800">KindHeart</h4>
          </div>
          <p className="text-sm text-gray-500 text-justify">
            We turn kindness into action. We connect donors with causes in medical aid, education, emergencies, and nonprofits—impacting millions of lives with transparency and trust. Join us and make a difference today.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start ms-10">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="text-gray-500 hover:underline">Home</a></li>
            <li><a href="/campaigns" className="text-gray-500 hover:underline">Campaigns</a></li>
            <li><a href="/about" className="text-gray-500 hover:underline">About Us</a></li>
            <li><a href="/contact" className="text-gray-500 hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/medical" className="text-gray-500 hover:underline">Medical</a></li>
            <li><a href="/education" className="text-gray-500 hover:underline">Education</a></li>
            <li><a href="/emergencies" className="text-gray-500 hover:underline">Emergencies</a></li>
            <li><a href="/nonprofit" className="text-gray-500 hover:underline">Non-Profit</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-500">Email: support@kindheartfund.com</p>
          <p className="text-sm text-gray-500">Phone: +91 123-456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} KindHeart Fund. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
