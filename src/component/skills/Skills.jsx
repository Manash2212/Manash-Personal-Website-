import { motion } from "framer-motion";

const Skills = () => {
  const Item = ({ name, x, y }) => {
    return (
      <motion.div
        className=" absolute flex is-center justify-center rounded-full font-semibold text-black text-semibold bg-black  px-6 py-3  text-center mt-10 cursor-pointer "
        whileHover={{ scale: 1.1 }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: x, y: y }}
        transition={{
          duration: 1.5,
        }}
      >
        <h2 className="text-gray-300">{name}</h2>
      </motion.div>
    );
  };
  return (
    <>
      <main className=" min-h-screen pt-10 dark:text-white dark:bg-slate-900 bg-secondary ">
        <h1 className="font-bold text-8xl sm:text-5xl sm:font-bold  text-center dark:text-white pb-10 ">
          SKILLS
        </h1>
        <div className="max-w-screen-xl h-screen relative  flex items-center justify-center rounded-full  m-auto  pb-10  dark:bg-circularDark bg-circularLight ">
          <motion.div
            className=" absolute flex items-center justify-center rounded-full font-semibold text-black text-semibold bg-black  px-8 py-5  text-center mt-10 cursor-pointer "
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="text-gray-300">Web</h2>
          </motion.div>
          {/* Passing the Skill Item Value */}
          <Item name="HTML5" x="-5vw" y="-10vw" />
          <Item name="CSS" x="-35vw" y="-7vw" />
          <Item name="Javascript" x="15vw" y="6vw" />
          <Item name="BootStrap" x="0vw" y="20vw" />
          <Item name="React.js" x="-20vw" y="-15vw" />
          <Item name="Vite.js" x="16vw" y="-20vw" />
          <Item name="Node.js" x="38vw" y="-5vw" />
          <Item name="Tailwind CSS" x="0vw" y="-22vw" />
          <Item name="Framer Motion" x="-25vw" y="18vw" />
          <Item name="Redux" x="15vw" y="18vw" />
          <Item name="Redux Toolkit" x="30vw" y="8vw" />
          <Item name="SASS" x="25vw" y="-10vw" />
          <Item name="Chakra UI" x="-28vw" y="5vw" />
          <Item name="Responsive Design" x="-12vw" y="9vw" />
          <Item name="Git" x="-20vw" y="-6vw" />
          <Item name="GitHub" x="15vw" y="-7vw" />
          <Item name="Microservices" x="-5vw" y="-10vw" />
        </div>
      </main>
    </>
  );
};

export default Skills;
