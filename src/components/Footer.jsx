import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              width={32}
              src="/log2-removebg-preview.png"
              alt="KindHeart Fund Logo"
            />
            <h4 className="text-2xl font-bold text-gray-800">
              Kind<span className="text-orange-500">Heart</span>
            </h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            We turn kindness into action by connecting donors with causes in
            medical aid, education, emergencies, and nonprofits — with
            transparency and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="text-gray-600 hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/campaigns" className="text-gray-600 hover:text-orange-500 transition">
                Campaigns
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-orange-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/medical" className="text-gray-600 hover:text-orange-500 transition">Medical</a></li>
            <li><a href="/education" className="text-gray-600 hover:text-orange-500 transition">Education</a></li>
            <li><a href="/emergencies" className="text-gray-600 hover:text-orange-500 transition">Emergencies</a></li>
            <li><a href="/nonprofit" className="text-gray-600 hover:text-orange-500 transition">Non-Profit</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Contact Us
          </h3>
          <p className="text-sm text-gray-600">support@kindheartfund.com</p>
          <p className="text-sm text-gray-600 mb-4">+91 123-456-7890</p>

          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KindHeart Fund. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
