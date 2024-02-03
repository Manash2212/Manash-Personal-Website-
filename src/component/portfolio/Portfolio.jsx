// import React from "react";
// import Img1 from "../../../public/Project_1.jpg";
// import { Link } from "react-router-dom";
import Projects from "./Projects";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="w-full h-screen max-sm:h-fit text-center text-6xl font-bold dark:bg-slate-900 py-10  bg-secondary  px-2"
      >
        <div className=" ">
          <motion.h1
            className="text-6xl font-bold text-black dark:text-secondary pb-2 max-sm:text-5xl"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            PORTFOLIO
          </motion.h1>
          <motion.p
            className="text-black dark:text-gray-400 font-normal max-sm:text-lg text-center md:w-[50%] mx-auto text-sm"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            I&apos;m excited to showcase my diverse skill set through a
            portfolio of projects that demonstrate my proficiency in a
            lot&apos;s of Frontend technologies.
          </motion.p>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
