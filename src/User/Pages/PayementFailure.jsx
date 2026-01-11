import React from 'react'
import { useNavigate } from 'react-router-dom'

function PayementFailure() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl w-full bg-white p-8 rounded-xl shadow-md">

        {/* TEXT SECTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-red-600">
            Payment Failed
          </h1>

          <p className="text-gray-600">
            Something went wrong while processing your payment.
            Please try again or choose another payment method.
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gradient-to-br from-red-400 to-red-600
                text-white px-6 py-3 rounded-md text-sm md:text-base
                hover:scale-105 transition-transform"
            >
              Try Again
            </button>

            <button
              onClick={() => navigate('/')}
              className="border border-gray-300 px-6 py-3 rounded-md
                text-sm md:text-base hover:bg-gray-100 transition"
            >
              Go Home
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center">
          <img
            src="https://cdn.dribbble.com/userupload/25755612/file/original-8aa015e52f3416dc252a15deff067cc9.gif"
            alt="Payment Failed"
            className="w-52 md:w-64"
          />
        </div>

      </div>
    </div>
  )
}

export default PayementFailure
