import React from 'react'
import { useNavigate } from 'react-router-dom'

function PaymentSuccess() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl w-full bg-white p-8 rounded-xl shadow-md">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-green-600">
            Thank you for your donation
          </h1>

          <p className="text-gray-600">
            Your contribution is making a real difference.
          </p>

          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-linear-to-br from-orange-400 to-orange-600
              text-white px-6 py-3 rounded-md text-sm md:text-base
              hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center">
          <img
            src="https://www.architecturaldigest.in/wp-content/themes/cntraveller/images/check-circle.gif"
            alt="Payment Success"
            className="w-48 md:w-64"
          />
        </div>

      </div>
    </div>
  )
}

export default PaymentSuccess
