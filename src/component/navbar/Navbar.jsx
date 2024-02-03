// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiX } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import Logo from "../../../public/Logo1.png";
import { motion } from "framer-motion";

const navMenus = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Portfolio",
    link: "portfolio",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    console.log("Use Effect Is Called");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <nav className="w-full fixed bg-navSec backdrop-blur-sm dark:bg-navPrm  shadow-lg max-w-full z-50  ">
        <div className="  max-w-screen-xl container flex items-center justify-between py-1 sm:py-1 px-2  ">
          <div className="author flex">
            <Link to="hero" className="flex items-center gap-2">
              <motion.img
                src={Logo}
                alt="logo"
                className="w-10 h-10 rounded-full cursor-pointer"
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.h1
                className="text-2xl text-primary font-instrument italic font-bold cursor-pointer max-sm:hidden"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Manash-Dev
              </motion.h1>
            </Link>
          </div>
          {/* Desktopmenu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4">
              {navMenus.map((menu, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, translateY: -100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                >
                  <Link
                    to={menu.link}
                    activeClass="active"
                    spy={true}
                    // smooth={true}
                    offset={-20}
                    duration={500}
                    className="text-l font-semibold px-2 py-2 md:py-4  inline-block cursor-pointer dark:text-white uppercase hover:scale-125 duration-500 hover:text-primary "
                  >
                    {menu.name}
                  </Link>
                </motion.li>
              ))}
              {theme === "dark" ? (
                <motion.div
                  className="sun"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BiSolidSun
                    className="text-2xl cursor-pointer dark:text-white"
                    onClick={() => setTheme("light")}
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="moon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BiSolidMoon
                    className="text-2xl cursor-pointer light:bg-gray200 dark:text-white "
                    onClick={() => setTheme("dark")}
                  />
                </motion.div>
              )}
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden ">
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {theme === "dark" ? (
                <motion.div
                  className="mobileSun"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BiSolidSun
                    className="text-2xl cursor-pointer dark:text-white"
                    onClick={() => setTheme("light")}
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="mobielMoon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <BiSolidMoon
                    className="text-2xl cursor-pointer light:bg-gray200 dark:text-white "
                    onClick={() => setTheme("dark")}
                  />
                </motion.div>
              )}

              <div
                className="menu text-2xl outline-none text-black dark:text-secondary"
                onClick={() => setShowMenu(!showMenu)}
              >
                {/* <FiX /> */}
                {showMenu ? <FiX /> : <FiAlignRight />}
              </div>
            </div>
            {/* Hamburger */}
            {showMenu && (
              <div className="absolute top-16 left-0 right-0 bg-primary bg-opacity-6  shadow-xl rounded-b-xl z-10 py-10 dark:bg-gray-900 dark:text-white">
                <ul className="flex flex-col items-center justify-between">
                  {navMenus.map((menu, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, translateY: -100 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    >
                      <Link
                        to={menu.link}
                        activeClass="active"
                        spy={true}
                        // smooth={true}
                        offset={50}
                        duration={500}
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                      >
                        {menu.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
