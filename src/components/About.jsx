import React from "react";
import images from "../constant/images";

function About() {
  return (
    <>
      <div className="container mx-auto flex flex-col mt-12 md:flex-row justify-around items-center p-4 pb-12 bg-white text-black">
        <div className="flex flex-col justify-center items-center w-full h-full md:items-center md:justify-center">
          <img
            src={images.aboutMe}
            alt=""
            className="h-100 w-auto md:h-100 md:w-400"
          />
        </div>
        <div className="flex flex-col space-y-4 justify-center items-start w-full h-full pl-12">
          <div>
            <div className="text-4xl font-semibold text-black pt-12 ">
              <div>
                About <span className="font-bold text-black">Me</span>
              </div>
            </div>
            <p className="text-black pt-4">
             I'm Covenant Ekundayo, a <span className="font-bold">UI/UX Designer</span> and
            <span className="font-bold"> Mobile App Developer</span> passionate about creating seamless digital
              experiences. With a strong foundation in <span className="font-bold">React Native, Laravel,
              and Next.js</span>, I specialize in designing and developing intuitive
              web and mobile applications. I have worked on diverse projects,
              including <span className="font-bold">e-commerce platforms, task management apps, logistics
              solutions, and movie streaming applications</span>, ensuring both
              functionality and user-centric design. As a participant in
              <span className="font-bold"> HNG12</span> and an active contributor to{" "}
              <span className="font-bold">hackathons</span>, I continuously seek
              to innovate and refine my skills. Whether building <span className="font-bold">scalable
              backend systems</span> or crafting{" "}
              <span className="font-bold">engaging UI/UX experiences</span>, I
              strive to deliver solutions that enhance user interaction and
              business efficiency. Let’s connect and build something great
              together! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
