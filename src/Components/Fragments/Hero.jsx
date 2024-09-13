import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import heroimg from "/img/profile.png";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button/Button";

const Hero = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto md:h-[-70hv] py-8">
      {/* Contetn */}
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimg} alt="hero image" />
      </div>

      <div className="col-span-2 px-5">
        <h1 className={`${isDarkMode ? "text-white" : "text-[#021526]"} text-4xl sm:text-3xl lg:text-5xl font-extrabold`}>
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
          <Button variant="resume" />
          <Button variant="contact" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
