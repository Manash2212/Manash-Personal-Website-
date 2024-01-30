// import React from "react";

import { Link } from "react-router-dom";

const Links = () => {
  const navMenus = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div className="links">
        {navMenus.map((items, i) => (
          <Link
            to={`#${items.name}`}
            key={i}
            className="text-l font-semibold px-2 py-4 md:py-6  inline-block cursor-pointer dark:text-white uppercase hover:scale-125 duration-500"
          >
            {items.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Links;
