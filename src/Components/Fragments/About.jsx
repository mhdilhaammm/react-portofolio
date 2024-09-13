import React, { useContext } from "react";
import aboutimg from "/img/aboutme.png";
import { DarkMode } from "../../context/DarkMode";
import Content from "../Elements/Content/Content";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { time } from "framer-motion/client";

const About = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const attributeAnimated = {
    hidden: { item1: { opacity: 0, x: -120 }, item2: { opacity: 0, x: 150 } },
    show: {
      opacity: 1, x: 0,
      transition: { duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] },
    },
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <>
      <div className={`${isDarkMode ? "text-white" : "text-[#021526]"} max-w-[1200px] mx-auto my-12`} id="about">
        <div className="md:grid md:grid-cols-2 sm:py-16" ref={ref}>
          <motion.div variants={attributeAnimated} initial={attributeAnimated.hidden.item1}
            animate={inView ? "show" : {}}>
            <div className="mt-4 md:mt-0 text-left flex">
              <div className=" mx-6 text-justify">
                <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                <Content />
              </div>
            </div>
          </motion.div>

          <div ref={ref} className="mx-auto py-10 md:py-0 sm:max-w-[500px]">
            <motion.div variants={attributeAnimated} initial={attributeAnimated.hidden.item2}
              animate={inView ? "show" : {}}>
              <img
                src={aboutimg}
                className="rounded-3xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
