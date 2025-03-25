import React from "react";
import icons from "../constant/icons";

function Experiences() {
  return (
    <>
      <div className="bg-black pt-12 text-white flex flex-col justify-center items-center w-full h-full">
        <div className="text-4xl">
          My <span className="text-4xl font-bold">Experience</span>
        </div>

        {/* Responsive Container */}
        <div className="flex flex-col space-y-8 pt-12 pb-24 px-4 w-full">
          {/* Google Experience */}
          <div className="flex flex-col space-y-4 w-full h-full border border-white rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img src={icons.google} alt="" className="h-6 w-6" />
                <div>Lead Software Engineer at Google</div>
              </div>
              <div>Nov 2019 - Present</div>
            </div>
            <div>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </div>
          </div>

          {/* YouTube Experience */}
          <div className="flex flex-col space-y-4 w-full h-full bg-zinc-500 rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img src={icons.youtube} alt="" className="h-6 w-6" />
                <div>Software Engineer at YouTube</div>
              </div>
              <div>Nov 2019 - Present</div>
            </div>
            <div>
              At YouTube, I served as a Software Engineer, focusing on the
              design and implementation of backend systems for the social media
              giant's dynamic platform. Working on projects that involved
              large-scale data processing and user engagement features, I
              leveraged my expertise to ensure seamless functionality and
              scalability.
            </div>
          </div>

          {/* Apple Experience */}
          <div className="flex flex-col space-y-4 w-full h-full border border-white rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img src={icons.apple} alt="" className="h-6 w-6" />
                <div>Junior Software Engineer at Apple</div>
              </div>
              <div>Nov 2019 - Present</div>
            </div>
            <div>
              During my tenure at Apple, I held the role of Software Architect,
              where I played a key role in shaping the architecture of
              mission-critical software projects. Responsible for designing
              scalable and efficient systems, I provided technical leadership
              to a cross-functional team.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;