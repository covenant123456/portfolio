import React from "react";
import svgs from "../constant/svgs";

function Skills() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center pt-12 bg-white text-black">
        <div className="text-2xl">
          My <span className="font-bold text-2xl">Skills</span>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-5 gap-4 pt-12 pb-24 mx-4 w-full">
          <div className="flex flex-col space-y-4 justify-center items-center w-full h-full border-2 border-black rounded-lg p-[24px] bg-black">
            <img src={svgs.javaScript} alt="" />
            <div className="text-white">JavaScript</div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center w-full h-full border-2 border-black rounded-lg p-[24px]">
            <img src={svgs.git} alt="" />
            <div>Git</div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center w-full h-full border-2 border-black rounded-lg p-[24px]">
            <img src={svgs.figma} alt="" />
            <div>Figma</div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center w-full h-full border-2 border-black rounded-lg p-[24px]">
            <img src={svgs.react} alt="" />
            <div>React</div>
          </div>
          <div className="flex flex-col space-y-4 justify-center items-center w-full h-full border-2 border-black rounded-lg p-[24px] bg-black">
            <img src={svgs.typescript} alt="" />
            <div className="text-white">TypeScript</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;