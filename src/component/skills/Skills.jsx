import { motion } from "framer-motion";

const Skills = () => {
  const Item = ({ name, x, y }) => {
    return (
      <motion.div
        className=" absolute flex is-center justify-center rounded-full font-semibold text-secondary text-semibold bg-black px-6 py-3 text-center   cursor-pointer max-md:px-2 max-md:py-3  max-md:text-sm max-sm:bg-transparent max-sm:text-black  "
        // max-md:text-sm max-md:text-black max-sm:bg-transparent
        whileHover={{
          scale: 1.1,
        }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
      >
        <h2 className="dark:text-secondary  ">{name}</h2>
      </motion.div>
    );
  };

  // onView Animation
  const tiltVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        // delay: 0.2,
      },
    },
  };

  return (
    <>
      <section
        id="skills"
        className=" w-full h-fit py-10 dark:text-white dark:bg-slate-900 bg-secondary max-md:h-[90vh] max-sm:h-[70vh] "
      >
        <motion.h1
          className="font-bold text-7xl max-sm:text-5xl text-center dark:text-white pb-10  max-md:pb-3 "
          variants={tiltVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          SKILLS
        </motion.h1>
        <div
          className="max-w-screen-xl h-[80vh] relative flex items-center justify-center rounded-full m-auto  pb-10  dark:bg-circularDark bg-circularLight max-md:h-[70vh] max-sm:h-[50vh] max-md:pb-2 max-md:bg-circularLightMD max-sm:bg-circularLightSM 
        dark:max-md:bg-circularDarkMD dark:max-sm:bg-circularDarkSM 
        "
        >
          <motion.div
            className=" absolute flex items-center justify-center rounded-full font-bold text-secondary bg-black text-semibold px-8 py-4  text-center mt-10 cursor-pointer max-md:px-2 max-md:py-3 max-sm:mt-3 max-md:text-sm max-sm:bg-transparent max-sm:text-black dark:text-secondary "
            // max-md:text-sm max-sm:bg-transparent max-md:text-black
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 1.5,
            }}
          >
            <h2 className="">Web</h2>
          </motion.div>
          {/* Passing the Skill Item Value */}
          <Item name="HTML" x="7vw" y="-15vw" />
          <Item name="CSS" x="-35vw" y="-7vw" />
          <Item name="Javascript" x="12vw" y="12vw" />
          <Item name="BootStrap" x="0vw" y="19vw" />
          <Item name="React.js" x="-20vw" y="-15vw" />
          <Item name="Vite.js" x="16vw" y="-20vw" />
          <Item name="Node.js" x="38vw" y="-5vw" />
          <Item name="Tailwind CSS" x="27vw" y="3vw" />
          <Item name="Framer Motion" x="-25vw" y="18vw" />
          <Item name="Redux" x="15vw" y="18vw" />
          <Item name="Redux Toolkit" x="34vw" y="10vw" />
          <Item name="SASS" x="25vw" y="-10vw" />
          <Item name="Chakra UI" x="-28vw" y="5vw" />
          <Item name="Responsive Design" x="-12vw" y="9vw" />
          <Item name="Git" x="-25vw" y="-6vw" />
          <Item name="GitHub" x="15vw" y="-4vw" />
          <Item name="Microservices" x="-5vw" y="-10vw" />
          <Item name="Jest" x="-17vw" y="-2vw" />
          <Item name="Webpack" x="-8vw" y="-18vw" />
        </div>
      </section>
    </>
  );
};

export default Skills;
