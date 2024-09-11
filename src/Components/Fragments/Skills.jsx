import React, { useContext } from "react";
import CardImg from "./CardImg";
import { DarkMode } from "../../context/DarkMode";

const dataSkills = [
  {
    id: 1,
    name: "html",
    img: "/img/html.png",
  },
  {
    id: 2,
    name: "html",
    img: "/img/css.png",
  },
  {
    id: 3,
    name: "html",
    img: "/img/javascript.png",
  },
  {
    id: 4,
    name: "html",
    img: "/img/react.png",
  },
  {
    id: 5,
    name: "html",
    img: "/img/tailwind.png",
  },
];

const Skills = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

  return (
    <div className={`${isDarkMode ? "border-gray-700" : "border-gray-400"} border md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center`}>
      <h2 className={`${isDarkMode ? "text-white" : "text-gray-500"} text-2xl md:text-4xl font-bold m-4`}>
        My <br />
        Tech <br /> Stack
      </h2>

      {dataSkills.map((data) => (
        <CardImg.ImgSkill img={data.img} key={data.id} name={data.name} />
      ))}
    </div>
  );
};

export default Skills;
