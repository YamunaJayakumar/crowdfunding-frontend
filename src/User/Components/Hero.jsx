import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const images = [
    "https://plus.unsplash.com/premium_photo-1683140523610-13deecbd20b1?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578496781985-452d4a934d50?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1683140516842-74c378a43d76?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1663054686094-fe0a3c749140?q=80&w=1170&auto=format&fit=crop"
  ];

  return (
    <>
      {/* TEXT */}
      <div className="pt-24 px-4 text-center">
        <h1 className="font-medium mb-4 text-3xl sm:text-4xl md:text-5xl">
          Be the{" "}
          <span className="block sm:inline font-bold text-orange-600 text-5xl sm:text-6xl">
            Hero
          </span>{" "}
          that changes people's lives
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-600">
          Every contribution brings someone closer to a better tomorrow.
          Real change begins with people like you.
        </p>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() =>
            token ? navigate("/campaigns/acive/all") : navigate("/login")
          }
          className="bg-gradient-to-br from-orange-400 to-orange-600 text-white
          px-6 py-3 rounded-md text-sm sm:text-base
          hover:scale-105 transition-transform duration-200"
        >
          Donate Now
        </button>
      </div>

      {/* IMAGES */}
      <div
        className="
          flex justify-center items-end
          gap-3 sm:gap-4
          mt-12 px-4
          flex-wrap md:flex-nowrap
        "
      >
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="
              w-24 h-36
              sm:w-28 sm:h-44
              md:w-32 md:h-52
              lg:w-40 lg:h-64
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
