import React from "react";

//List Car for Project image
const CardImg = (props) => {
  const { img, id, name } = props;
  return (
    <div
      className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-hover realative"
      key={id}>
      <img src={img} layout="fill" cover="object-fit" alt={name} />
      <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
        <span className="text-2xl font-bold text-white tracking-wider">
          <div className="pt-8 text-center">
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

//List card for skills image
const ImgSkill = (props) => {
  const { img, id, name } = props;
  return (
    <div
      className="flex flex-col items-center m-4 sm:my-0 w-[65px] md:w-[110px]"
      key={id}>
      <img src={img} alt={name} width={100} height={100} />
      <p className="mt-2"></p>
    </div>
  );
};

CardImg.ImgSkill = ImgSkill;
export default CardImg;
