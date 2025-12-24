import { Star } from "lucide-react";
import React from "react";

function Review() {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Donor",
      text: "Helped me support genuine medical causes with confidence.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Donor",
      rating: 4,
      text: "Transparent campaigns and smooth donation experience.",
    },
    {
      name: "Meera Iyer",
      role: "Campaign Owner",
      rating: 5,
      text: "I was able to raise funds quickly for my father's treatment.",
    }
    
  ];

  return (
    <section className="bg-orange-50 py-20 px-6">
      {/* Section header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">
          What People Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Real stories from donors and campaign creators who trusted FundRise.
        </p>
      </div>

      {/* Reviews */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full sm:w-[320px] bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                {review.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  {review.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {review.role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < review.rating
                      ? "text-orange-500 fill-orange-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              “{review.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
