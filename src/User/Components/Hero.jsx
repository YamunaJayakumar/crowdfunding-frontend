import React from "react";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate();
  const token=sessionStorage.getItem("token")
  const images = [
    "https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1663054686094-fe0a3c749140?q=80&w=1170&auto=format&fit=crop"
  ];

  return (
    <>
      {/* Text section */}
      <div className="mt-30 px-4">
        <h1 className="text-center font-medium my-4
          text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
          Be the{" "}
          <span className="font-bold block sm:inline
            text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-orange-600">
            Hero
          </span>{" "}
          
          that changes people's lives
        </h1>

        <h2 className="text-center text-sm sm:text-md md:text-lg
          max-w-3xl mx-auto text-gray-600">
          Every contribution brings someone closer to a better tomorrow.
          Real change begins with people like you.
        </h2>
      </div>

      {/* Button */}
      <div className="flex justify-center my-6">
        {
          token?
          <button onClick={()=>{navigate('/campaigns/acive/all')}} className="bg-linear-to-br from-orange-400 to-orange-600 text-white
          px-5 py-3 sm:px-6 sm:py-3
          rounded-md text-sm sm:text-base
          hover:  transition">
          Donate Now
        </button>:
          <button onClick={()=>{navigate('/login')}} className="bg-linear-to-br from-orange-400 to-orange-600 text-white
          px-5 py-3 sm:px-6 sm:py-3
          rounded-md text-sm sm:text-base
          hover:  transition">
          Donate Now
        </button>
        }
      </div>

      {/* Image section */}
      <div className="flex justify-center items-end
        gap-3 sm:gap-4 mt-8
        flex-wrap md:flex-nowrap px-4">

        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="
              w-24 h-40
              sm:w-28 sm:h-48
              md:w-32 md:h-56
              lg:w-56 lg:h-104
              rounded-full object-cover
              grayscale hover:grayscale-0
              transition-all duration-300
            "
          />
        ))}
      </div>
    </>
  );
}

export default Hero;
