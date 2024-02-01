// import React from "react";
// import Img1 from "../../../public/Project_1.jpg";
// import { Link } from "react-router-dom";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="w-full h-screen max-sm:h-fit text-center text-6xl font-bold dark:bg-slate-900 py-10  bg-secondary  px-2"
      >
        <div className=" ">
          <h1 className="text-6xl font-bold text-black dark:text-secondary pb-2 max-sm:text-5xl">
            PORTFOLIO
          </h1>
          <p className="text-black dark:text-gray-400 font-normal max-sm:text-lg text-center md:w-[50%] mx-auto text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            quidem iure? Nesciunt quo soluta quod fuga voluptatem, corrupti eius
            libero.
          </p>
          <div className="max-w-screen-xl mx-auto px-2 ">
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
