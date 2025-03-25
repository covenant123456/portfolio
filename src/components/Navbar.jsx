import React, { useState } from "react";
import icons from "../constant/icons";
import images from "../constant/images";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex justify-between items-center p-4">
     
        <img src={images.Logo} alt="Logo" className="h-10 w-auto" />
        <header className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            <a href="#home" className="text-black hover:text-grey">
              About Me
            </a>
            <a href="#about" className="text-black hover:text-gray">
              Skills
            </a>
            <a href="#contact" className="text-black hover:text-gray">
              Project
            </a>
            <a href="#contact" className="text-black hover:text-gray">
              Contact Me
            </a>
          </nav>
          <button className="text-white bg-black p-3 flex items-center space-x-2 rounded-lg">
            <div>Resume</div>
            <img
              src={icons.downloadWhite}
              alt=""
              className="h-4 w-4 text-white"
            />
          </button>
        </header>


        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-1 md:hidden p-4 bg-zinc-100">
          <a href="#home" className="text-black hover:text-grey">
            About Me
          </a>
          <a href="#about" className="text-black hover:text-gray">
            Skills
          </a>
          <a href="#contact" className="text-black hover:text-gray">
            Project
          </a>
          <a href="#contact" className="text-black hover:text-gray">
            Contact Me
          </a>
          <button className="text-white bg-black p-3 flex items-center space-x-2 rounded-lg w-[100px] cursor-pointer">
            <div>Resume</div>
            <img
              src={icons.downloadWhite}
              alt=""
              className="h-4 w-4 text-white"
            />
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;