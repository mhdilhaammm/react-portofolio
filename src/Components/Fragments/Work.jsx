import { useContext } from "react";
import CardImg from "./CardImg";
import { DarkMode } from "../../context/DarkMode";

const dataImg = [
  {
    id: 1,
    name: "project 1",
    img: "./img/proj1.png",
  },
  {
    id: 2,
    name: "project 2",
    img: "/img/proj2.png",
  },
  {
    id: 3,
    name: "project 3",
    img: "/img/proj3.png",
  },
  {
    id: 4,
    name: "project 4",
    img: "/img/proj4.png",
  },
  {
    id: 5,
    name: "project 5",
    img: "/img/proj5.png",
  },
  {
    id: 6,
    name: "project 6",
    img: "/img/proj6.png",
  },
];

const Work = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Project</p>
        <p className={isDarkMode ? "text-white" : "text-[#021526]"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          consequuntur laborum laudantium ipsam iste. Veniam eum facilis
          incidunt repudiandae expedita!
        </p>
      </div>

      <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
        {dataImg.map((data) => (
          <CardImg img={data.img} key={data.id} name={data.name}></CardImg>
        ))}
      </div>
    </div>
  );
};

export default Work;
