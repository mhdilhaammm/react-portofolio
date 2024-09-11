import { useContext } from "react";
import CardImg from "./CardImg";
import { DarkMode } from "../../context/DarkMode";

const dataImg = [
  {
    id: 1,
    name: "Logistics Portal",
    img: "/img/portal-log.png",
    href: ""
  },
  {
    id: 2,
    name: "KPI Peformance",
    img: "./img/kpi-peformance.png",
    href: ""
  },
  {
    id: 3,
    name: "Shipment Request",
    img: "/img/shipment-request.png",
    href: ""
  },
  {
    id: 4,
    name: "System Information Recruitment Tracker",
    img: "/img/recruitment-tracker.png",
    href: ""
  },
  {
    id: 5,
    name: "Skatboard Store",
    img: "/img/skate-store.png",
    href: "https://mhdilhaammm.github.io/store-skate/"
  },
];

const Work = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8 py-5">
        <p className="text-4xl mb-3 font-bold primary-color">Project</p>
        <p className={isDarkMode ? "text-white" : "text-[#021526]"}>
          During college, I honed my skills by creating several projects to improve my skills as a web developer, especially in the frontend. Here are some projects that I worked on during college and internship. Some themes, I created applications using the ASP.NET Framework and ASP.NET CORE followed by SQL SERVER as the database. And I also created a roller skate shop website using only html, css and javascript. To make it easier to organize data, I used a library from javascript, namely alpine.js. The Project i created during internship can not access on the public site, because that's a internal application company, And is it private.
        </p>
      </div>

      <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
        {dataImg.map((data) => (
          <CardImg img={data.img} key={data.id} name={data.name} href={data.href}>
            {data.name}
          </CardImg>
        ))}
      </div>
    </div>
  );
};

export default Work;
