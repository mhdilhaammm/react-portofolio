import { React, useState, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ListNav from "../Elements/List/ListNav";

function Navbar() {
  const [nav, setNav] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`${isDarkMode ? "text-gray-300" : "text-slate-800"} h-[100px] max-w-[1200px] mx-auto flex justify-between items-center`}>
      {/* list navbar */}
      <ListNav />

      {/* humburger icon for sidebar */}
      <div className="block md:hidden mr-6" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] bg-[#061b2e] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }>
        {/* list sidebar */}
        <ListNav.SideBar />
      </div>
    </div>
  );
}

export default Navbar;
