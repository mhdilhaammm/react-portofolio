import React, { useContext } from "react";
import aboutimg from "/img/aboutme.png";
import { DarkMode } from "../../context/DarkMode";

const About = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className={`${isDarkMode ? "text-white" : "text-[#021526]"} max-w-[1200px] mx-auto my-12`} id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              eum deleniti! Voluptas corrupti consequuntur, accusamus iusto ut
              quidem sapiente reprehenderit repudiandae quaerat magnam,
              assumenda ipsum aliquam omnis aspernatur debitis velit.
            </p>
          </div>
        </div>

        <img
          src={aboutimg}
          alt="about me image"
          className="mx-auto py-8 md:py-0 rounded-3xl"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
