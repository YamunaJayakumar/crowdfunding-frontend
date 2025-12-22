import React from 'react'
import {
  HeartPulse,
  GraduationCap,
  HandHeart,
  MoreHorizontal
} from "lucide-react";
function Categories() {
    const categories=[
        {title:"Medical",
          icon:<HeartPulse size={28}/>  
        }, {
      title: "Education",
      icon: <GraduationCap size={28} />
    },
      {
      title: "Non Profit",
      icon: <HandHeart size={28} />
    },
     {
      title: "More",
      icon: <MoreHorizontal size={28} />
    }
    ]
  return (
    <div className='mt-30'>
        <h1 className="text-5xl text-center" style={{ wordSpacing: "0.1rem" }}>
            <span className='font-bold'>website</span> will do charity at all level ranging from    
        </h1>
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              bg-linear-to-br from-orange-400 to-orange-600
              text-white rounded-3xl
              p-6 sm:p-8
              flex flex-col items-center justify-center
              shadow-lg
               hover:shadow-2xl
             
              cursor-pointer
            "
          >
            <div className="mb-3 bg-white/20 p-3 rounded-full">
              {cat.icon}
            </div>
            <p className="text-sm sm:text-base font-medium">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Categories