import React from "react";
import images from "../constant/images";
import icons from "../constant/icons";

function Project() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-black p-4 text-white pb-12">
        <div className="text-4xl pt-4">
          My <span className="font-bold text-4xl">Project</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 pt-4 pb-4 px-4 w-full">
          <img src={images.pro1} alt="" className="h-64 w-full md:h-100" />

          <div className="flex flex-col w-full h-full md:pl-6 justify-between pt-6 space-y-8">
            <div className="font-bold text-6xl">01</div>
            <div className="font-bold text-4xl">
              Crypto Screener Application
            </div>
            <p className="text-zinc-400">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <a>
              <img src={icons.readMore} alt="" />
            </a>
          </div>
        </div>
        <div className="flex  flex-col-reverse md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 pt-4 pb-4 px-4 w-full">
          <div className="flex flex-col w-full h-full md:pl-6 justify-between pt-6 space-y-8">
            <div className="font-bold text-6xl">02</div>
            <div className="font-bold text-4xl">
              Euphoria - Ecommerce (Apparels) Website Template
            </div>
            <p className="text-zinc-400">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book. when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
            <a>
              <img src={icons.readMore} alt="" />
            </a>
          </div>
          <img
            src={images.pro2}
            alt=""
            className="h-64 w-full md:h-100 md:w-full "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 pt-4 pb-4 px-4 w-full">
          <img src={images.pro3} alt="" className="h-64 w-full md:h-100" />

          <div className="flex flex-col w-full h-full md:pl-6 justify-between pt-6 space-y-8">
            <div className="font-bold text-6xl">03</div>
            <div className="font-bold text-4xl">Blog Website Template</div>
            <p className="text-zinc-400">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <a>
              <img src={icons.readMore} alt="" />
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Project;
