import React from "react";
import icons from "../constant/icons";
import svgs from "../constant/svgs";
import images from "../constant/images";
function Contact() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-full p-8 bg-gray-100 text-black">
        <div className="w-full md:w-1/2 bg-zinc-100 p-8 rounded-lg shadow-lg">
          <form action="" method="post" className="space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-zinc-400 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

       
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <div className=" md:text-left">
            <h2 className="text-3xl font-bold mb-4">Let’s <span className="text-white"  style={{ WebkitTextStroke: "1px black" }}>talk</span>  about something special</h2>
            <p className="text-gray-600 mb-6">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="text-lg font-semibold mb-4">
              <div>Email: <span className="text-blue-500">covenantekundayo@gmail.com</span></div>
              <div>Phone: <span className="text-blue-500">+234(0)9049082096</span></div>
            </div>
          </div>

          <div className="flex  md:justify-start space-x-4 mt-6">
            <img
              src={icons.facebookWhite}
              alt="Facebook"
              className="w-10 bg-black p-2 rounded-lg hover:scale-110 transition duration-300"
            />
            <img
              src={icons.discord}
              alt="Discord"
              className="w-10 p-2 border-black border-2 rounded-lg hover:scale-110 transition duration-300"
            />
            <img
              src={icons.behance}
              alt="Behance"
              className="w-10 p-2 border-black border-2 rounded-lg hover:scale-110 transition duration-300"
            />
            <img
              src={svgs.git}
              alt="GitHub"
              className="w-10 p-2 border-black border-2 rounded-lg hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
      <div className="bg-black w-full justify-between flex flex-row items-center p-4 ">
        <img src={images.logoWhite} alt="" />
        <div>
          <div className="text-2sm text-white md:text-2xl ">&copy 2025</div>
        </div>
      </div>
    </>
  );
}

export default Contact;