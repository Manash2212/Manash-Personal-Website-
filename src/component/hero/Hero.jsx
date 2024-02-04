import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const leftVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },

    scrollButton: {
      x: 0,
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 2,
      },
    },
  };

  return (
    <>
      <section
        id="hero"
        className="w-full bg-secondary h-[calc(100% - 24px)] dark:bg-gray-900 dark:text-white box-border max-sm:pt-10"
      >
        <div className=" max-w-screen-xl px-5 py-10 container h-screen grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 pb-12 sm:py-0 ">
          <div className="">
            <motion.div className="space-y-2 grid justify-items-center sm:justify-items-start">
              {" "}
              {/* border-2 border-black */}
              <motion.p
                className="uppercase text-xl font-bold text-black/80 dark:text-white"
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 * 0.01,
                  },
                }}
              >
                Hello,
              </motion.p>
              <motion.p
                className="text-xl md:text-5xl font-bold text-black/80 dark:text-white"
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 * 0.03,
                  },
                }}
              >
                I&apos;m Manash Halder
              </motion.p>
              <motion.p
                className="text-2xl text-center text-gray-700 font-instrument italic tracking-wide dark:text-white mt-3"
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 * 0.05,
                  },
                }}
              >
                Frontend Developer and UI Designer
              </motion.p>
              <motion.p
                className="text-gray-700 dark:text-white  text-justify font-roboto mt-2"
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 * 0.07,
                  },
                }}
              >
                Motivated and innovative Front-End Developer with a strong
                foundation in HTML, CSS, and JavaScript. Eager to contribute
                technical skills in creating responsive and visually appealing
                web applications.
              </motion.p>
              <motion.div
                className="hireme border-red-800 rounded-md  font-bold dark:text-white cursor-pointer primary-btn !px-6"
                initial={{
                  x: -500,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 * 0.2,
                  },
                }}
              >
                <Link to="manashhalder2212@gmial.com" className=" ">
                  <p className=" hover:scale-125">Hire me</p>
                </Link>
              </motion.div>
              <motion.div
                className="imgScroll"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.8,
                  },
                }}
              >
                <motion.img
                  src="https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030091/scrol1_xigjkm.png"
                  className="w-8 h-8 "
                  variants={leftVariants}
                  initial={{
                    x: 0,
                  }}
                  animate="scrollButton"
                />
              </motion.div>
            </motion.div>
          </div>
          {/* Image Container */}
          <motion.div
            className=" ml-10 max-sm:ml-0"
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030937/Manash_f0wbfw.png"
              alt="Hero-img"
              className="w-full max-h-full md:max-w-lg mx-auto "
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
