import { React, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    //navbar
    <div className={`${isDarkMode ? "text-gray-300" : "text-slate-800"} h-[100px] max-w-[1200px] mx-auto flex justify-between items-center`}>
      <h1 className="text-3xl font-bold primary-color ml-4">Iam</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About Me</a>
        </li>
        <li className="p-5">
          <a href="#project">Project</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-5">
          <button className="cursor-pointer ml-1 rounded-lg hover:text-slate-600" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>

      <div className="block md:hidden mr-6" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }>
        <h1 className="text-3xl primary-color m-4">Iam</h1>
        <ul className="p-8 text-2xl">
          <li>
            <button className="cursor-pointer ml-1 rounded-lg hover:text-slate-600" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li className="p-2">
            <a href="#home">Home</a>
          </li>
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
