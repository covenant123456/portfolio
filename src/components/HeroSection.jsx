import React, { useState, useEffect } from "react";
import images from "../constant/images";
import icons from "../constant/icons";
import svgs from "../constant/svgs";

function HeroSection() {
  const [currentText, setCurrentText] = useState("Frontend Developer");
  const roles = React.useMemo(
    () => ["Frontend Developer", "Mobile-App Developer", "UI/UX Designer"],
    []
  );

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentText(roles[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles]);

  const [firstWord, ...restWords] = currentText.split(" ");

  return (
    <>
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-around items-center p-4 align-center bg-white text-black">
        {/* Text Content */}
        <div className="flex flex-col space-y-4 justify-center items-start w-full h-full">
          <div className="flex flex-col space-y-4 justify-center items-start w-full">
            <div className="text-4xl font-semibold text-black pt-12">
              <div>
                Hello I’m{" "}
                <span className="font-bold text-black">Ekundayo Covenant.</span>
              </div>
              <div className="font-bold text-black">
                {firstWord}
                <span
                  className="font-bold text-white pl-2"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {restWords.join(" ")}
                </span>
              </div>
              <div>
                Based in <span className="font-bold text-black">Nigeria.</span>
              </div>
            </div>
            <p className="text-black pt-4">
              I am a{" "}
              <span className="font-bold text-lg">Frontend Developer</span> with
              experience in building web and mobile applications using React,
              React Native, JavaScript, and TypeScript. I am also a{" "}
              <span className="font-bold text-lg">UI/UX designer</span>{" "}
              passionate about creating user-friendly, responsive, and visually
              appealing designs. Additionally, I have a strong interest in Web3
              development and its potential to reshape digital experiences.
            </p>
          </div>
          <div className="flex flex-row space-x-4 pt-12">
            <div>
              <img
                src={icons.facebookWhite}
                alt=""
                className="w-10 bg-black p-2 rounded-lg"
              />
            </div>
            <div>
              <img
                src={icons.discord}
                alt=""
                className="w-10 p-2 border-black border-2 rounded-lg"
              />
            </div>
            <div>
              <img
                src={icons.behance}
                alt=""
                className="w-10 p-2 border-black border-2 rounded-lg"
              />
            </div>
            <div>
              <img
                src={svgs.git}
                alt=""
                className="w-10 p-2 border-black border-2 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-full md:items-center md:justify-center">
          <img
            src={images.banner}
            alt=""
            className="h-64 w-auto md:h-100 md:w-full justify-center items-center"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;