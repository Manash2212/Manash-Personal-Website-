// import { useEffect, useRef } from "react";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MyResume from "../../assets/Mansh_Resume_2024.pdf";

const About = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const tiltVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        // delay: 0.2,
      },
    },
  };

  return (
    <>
      <section
        id="about"
        className=" w-full   bg-secondary dark:bg-slate-900 dark:text-white  box-border  "
      >
        <div className="max-w-screen-xl px-5 container h-fit grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-20  ">
          <motion.div
            className=" mr-10 max-sm:mr-0 "
            variants={tiltVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <TiltCard />
          </motion.div>
          <div className=" ">
            <motion.h1
              className="font-bold text-3xl text-gray-800 dark:text-white py-3 max-sm:text-2xl"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 1,
                delay: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              ABOUT ME
            </motion.h1>
            <motion.p
              className="text-justify dark:text-gray-400 max-sm:text-lg "
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 1,
                delay: 1.3,
              }}
              viewport={{
                once: true,
              }}
            >
              I&apos;m a web developer from the{" "}
              <span>City of Joy-KOLKATA, </span>
              Passionate about creating seamless user experiences and staying
              abreast of the latest design trends and technologies. Dedicated to
              continuous learning and expanding my skill set to adapt to the
              ever-evolving landscape of front-end development. As an effective
              communicator and team player, I love to collaborate with designers
              and back-end developers to achieve the project goals.
            </motion.p>
            <motion.p
              className="pt-4 dark:text-gray-400"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 1,
                delay: 1.5,
              }}
              viewport={{
                once: true,
              }}
            >
              Excited about the possibilities of creating innovative and
              user-centric web experiences. Let&apos;s build something amazing
              together!
            </motion.p>
            <motion.div
              className="flex justify-between py-3 max-sm:my-2"
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 1,
                delay: 1.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="details1">
                <h3 className="font-bold uppercase dark:text-gray-200 ">
                  Name
                </h3>
                <p className="dark:text-gray-400">Manash Halder</p>
                <h3 className="font-bold uppercase pt-2 dark:text-gray-200">
                  Nationality
                </h3>
                <p className="dark:text-gray-400">Indian</p>
              </div>
              <div className="details1">
                <h3 className="font-bold uppercase dark:text-gray-200">
                  Email
                </h3>
                <p className="dark:text-gray-400">manashhalder2212@gmail.com</p>
                <h3 className="font-bold uppercase dark:text-gray-200">
                  Employment
                </h3>
                <p className="dark:text-gray-400">Open</p>
              </div>
            </motion.div>
            <motion.div
              className=""
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 1,
                delay: 1.9,
              }}
              viewport={{
                once: true,
              }}
            >
              <Link
                to={MyResume}
                download="Mansh_Resume_2024.pdf"
                target="_blank"
              >
                <button className=" border-red-800 rounded-md  font-bold dark:text-white cursor-pointer primary-btn !px-6">
                  Download Resume
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
