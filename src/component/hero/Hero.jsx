import Person from "../../../public/Manash.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="w-full bg-secondary dark:bg-gray-900 dark:text-white box-border"
      >
        <div className=" max-w-screen-xl px-5 container h-screen grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 pb-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              {" "}
              {/* border-2 border-black */}
              <p className="uppercase text-xl font-bold text-black/80 dark:text-white">
                Hello,
              </p>
              <p className="text-xl md:text-5xl font-bold text-black/80 dark:text-white">
                I&apos;m Manash Halder
              </p>
              <p className="text-2xl text-gray-700 font-instrument italic tracking-wide dark:text-white mt-3">
                Frontend Developer and UI Designer
              </p>
              <p className="text-gray-700 dark:text-white  text-justify font-roboto mt-2">
                Motivated and innovative Front-End Developer with a strong
                foundation in HTML, CSS, and JavaScript. Eager to contribute
                technical skills in creating responsive and visually appealing
                web applications.
              </p>
              <Link
                to="manashhalder2212@gmial.com"
                className=" border-red-800 rounded-md  font-bold dark:text-white cursor-pointer primary-btn !px-6"
              >
                <p className=" hover:scale-125">Hire me</p>
              </Link>
            </div>
          </div>
          {/* Image Container */}
          <div className="">
            <img
              src={Person}
              alt="Hero-img"
              className="w-full max-h-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
