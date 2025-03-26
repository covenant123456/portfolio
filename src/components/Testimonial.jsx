import React from "react";
import images from "../constant/images";
import icons from "../constant/icons";

function Testimonial() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-white p-4 text-black">
        <div className="text-4xl pt-4">
          My <span className="font-bold text-4xl">Testimonial</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-8 px-4 w-full">
         
          <div className="flex flex-col border bg-white drop-shadow-lg p-6 shadow-gray-400 justify-center items-center rounded-2xl space-y-6 relative">
           
            <div className="relative">
              <img src={images.profile} alt="Profile" className="w-24 h-24 rounded-full" />
              <img
                src={icons.colon}
                alt="Colon"
                className="absolute bottom-0 right-0 w-8 h-8"
              />
            </div>
            
            <p className="text-center text-gray-600">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </p>
            <hr className="w-full border-gray-300" />
          
            <p className="font-bold text-lg">Evren Shah</p>
            <p className="text-gray-500">Designer</p>
          </div>
          <div className="flex flex-col border bg-black text-white drop-shadow-lg shadow-gray-400 p-6 justify-center items-center rounded-2xl space-y-6 relative">
           
           <div className="relative">
             <img src={images.profile} alt="Profile" className="w-24 h-24 rounded-full" />
             <img
               src={icons.colonWhite}
               alt="Colon"
               className="absolute bottom-0 right-0 w-8 h-8"
             />
           </div>
           
           <p className="text-center text-white">
             I recently had to jump on 10+ different calls across eight
             different countries to find the right owner.
           </p>
           <hr className="w-full border-white" />
         
           <p className="font-bold text-lg">Evren Shah</p>
           <p className="text-white">Designer</p>
          </div>
          <div className="flex flex-col border bg-white drop-shadow-lg shadow-gray-400 p-6 justify-center items-center rounded-2xl space-y-6 relative">
           
           <div className="relative">
             <img src={images.profile} alt="Profile" className="w-24 h-24 rounded-full" />
             <img
               src={icons.colon}
               alt="Colon"
               className="absolute bottom-0 right-0 w-8 h-8"
             />
           </div>
           
           <p className="text-center text-gray-600">
             I recently had to jump on 10+ different calls across eight
             different countries to find the right owner.
           </p>
           <hr className="w-full border-gray-300" />
         
           <p className="font-bold text-lg">Evren Shah</p>
           <p className="text-gray-500">Designer</p>
         </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;