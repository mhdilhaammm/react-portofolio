import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import heroimg from "/img/profile.png";
import { DarkMode } from "../../context/DarkMode";

const Hero = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto md:h-[-70hv] py-8">
      {/* Contetn */}
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimg} alt="hero image" />
      </div>

      <div className="col-span-2 px-5">
        <h1 className={`${isDarkMode ? "text-white" : "text-[#021526]"} text-4xl sm:text-5xl lg:text-8xl font-extrabold`}>
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Frontend",
              1000,
              "Data Analyst",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className={`${isDarkMode ? "text-white" : "text-[#021526]"} sm:text-lg my-6 lg:text-lg`}>
          My name is Muhammad Ilham and i'm interested in Web Development and
          Data Analyst.
        </p>

        <div className="my-8">
          <a
            href=""
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white">
            Download CV
          </a>
          <a
            href=""
            className={`px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-pink-500 ${isDarkMode ? "text-white" : "text-[#021526] hover:text-white"}`}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
