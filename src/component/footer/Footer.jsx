// import React from 'react'
import Logo from "../../../public/Logo1.png";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GrMapLocation } from "react-icons/gr";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "hero" },
    { name: "About", link: "about" },
    { name: "Skills", link: "kills" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
  ];

  const socialLinks = [
    {
      link: "https://twitter.com/always_manash",
      image:
        "https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030090/Link-5_b3gyno.png",
      alt: "twitter",
    },
    {
      link: "https://github.com/Manash2212/",
      image:
        "https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030111/Link-4_dbv01i.png",
      alt: "gitHub",
    },
    {
      link: "https://www.linkedin.com/in/manash-link2212/",
      image:
        "https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030088/Link-3_vlmwsq.png",
      alt: "Linkedin",
    },
    {
      link: "https://www.instagram.com/alwaysmanash/",
      image:
        "https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030097/Link-2_kkx9f3.png",
      alt: "insta",
    },
    {
      link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0hVrqJBbPpWCi1knRD1sCNrXuxJHS6bHo1aBYBxbAgWTmczRS9AZgDExRa7SaXpzrl&id=100080939478681",
      image:
        "https://res.cloudinary.com/dxmozxqyt/image/upload/v1707030085/Link-1_tcu9tv.png",
      alt: "facebook",
    },
  ];

  const textVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const footDesc = {
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <footer className="footer w-full bg-gray-300 dark:bg-gray-300">
        <div className="footerSection">
          <div className="container max-w-screen-xl py-4 flex items-center justify-between max-sm:flex-col  ">
            <div className="myLogo">
              <img
                src={Logo}
                alt="myLogo"
                className="max-w-60 max-h-60 max-sm:max-w-40 max-sm:max-h-40 rounded-full"
              />
            </div>
            <div className="  col1 max-sm:mt-4">
              <h1 className="col1Heading py-3 text-xl font-bold ">
                Quick Links
              </h1>
              {quickLinks.map((items, i) => (
                <div className="mapElm" key={i}>
                  <LinkScroll to={items.link}>
                    <motion.h3
                      className="col1Title font-medium text-center cursor-pointer hover:text-primary"
                      variants={textVariants}
                      initial="initial"
                      whileInView="animate"
                      transition={{
                        duration: 0.4,
                        delay: i * 0.2,
                      }}
                      viewport={{
                        once: true,
                      }}
                    >
                      {items.name}
                    </motion.h3>
                  </LinkScroll>
                </div>
              ))}
            </div>

            <div className="col2  flex flex-col items-center justify-between max-sm:mt-4 ">
              <h2 className="col2Heading pb-2 text-xl font-bold">Address</h2>
              <span className="col2Desc font-medium flex items-center gap-2 ">
                <FaLocationDot className="text-sm " />
                Kolkata
              </span>
              <span className="col2Desc font-medium flex items-center gap-2 ">
                <FaSearchLocation className="text-sm " />
                West Bengal
              </span>
              <span className="col2Desc flex items-center gap-2 font-medium">
                <GrMapLocation className="text-sm " />
                INDIA
              </span>
            </div>
            <div className="col3  max-sm:mt-4 flex flex-col items-center justify-between">
              <div className="headContainer">
                <h2 className="col3Heading text-center pb-5 max-sm:pb-2 text-xl font-bold">
                  Social
                </h2>
              </div>
              <div className="linksContainer flex items-center justify-between">
                {socialLinks.map((e, i) => (
                  <motion.div
                    className="links  "
                    key={i}
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                      duration: 0.4,
                      delay: i * 0.2,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <Link to={e.link} target="_blank">
                      <img
                        src={e.image}
                        alt={e.alt}
                        className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="copyRight text-secondary w-full py-5 bg-slate-700 text-center">
            <motion.div
              className="footerDesc"
              variants={footDesc}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView="animate"
              transition={{
                duration: 0.9,
                delay: 1.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <span className="footerDesc">&copy; 2024 Manash Halder</span>

              <span className="footerDesc"> All rights reserved</span>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
