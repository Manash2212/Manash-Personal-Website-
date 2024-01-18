// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const navMenus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
      <nav className="bg-secondary dark:bg-gray-900 sticky top-0 shadow-lg">
        <div className=" max-w-screen-xl container flex items-center justify-between py-3 sm:py-0 px-4 ">
          <h1 className="text-3xl text-primary font-instrument italic font-bold">
            Manash-Dev
          </h1>
          {/* Desktopmenu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4">
              {navMenus.map((menu, i) => (
                <li key={i}>
                  <Link
                    to={menu.link}
                    className="text-l font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer dark:text-white uppercase"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer light:bg-gray200 dark:text-white "
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden m-2">
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer light:bg-gray200 dark:text-white "
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="text-3xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            {showMenu && (
              <div className="fixed top-16 left-0 right-0 bg-red-500 bg-opacity-10 shadow-xl rounded-b-xl z-10 py-10 dark:bg-gray-900 dark:text-white">
                <ul className="flex flex-col items-center justify-between">
                  {navMenus.map((menu, i) => (
                    <li key={i}>
                      <Link
                        to={menu.link}
                        className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                      >
                        {menu.name}
                      </Link>
                    </li>
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
