// import React from 'react'
import Logo from "../../../public/Logo1.png";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

import Link_1 from "../../../public/Link-1.png";
import Link_2 from "../../../public/Link-2.png";
import Link_3 from "../../../public/Link-3.png";
import Link_4 from "../../../public/Link-4.png";
import Link_5 from "../../../public/Link-5.png";

import { GrMapLocation } from "react-icons/gr";
// <GrMapLocation />
import { FaSearchLocation } from "react-icons/fa";
// <FaSearchLocation />
import { FaLocationDot } from "react-icons/fa6";
// <FaLocationDot />

const Footer = () => {
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
              <LinkScroll to="hero">
                <h3 className="col1Title font-medium text-center cursor-pointer">
                  Home
                </h3>
              </LinkScroll>
              <LinkScroll to="about">
                <h3 className="col1Title font-medium text-center cursor-pointer">
                  About
                </h3>
              </LinkScroll>
              <LinkScroll to="skills">
                <h3 className="col1Title font-medium text-center cursor-pointer">
                  Skills
                </h3>
              </LinkScroll>
              <LinkScroll to="portfolio">
                <h3 className="col1Title font-medium text-center cursor-pointer">
                  Portfolio
                </h3>
              </LinkScroll>
              <LinkScroll to="contact">
                <h3 className="col1Title font-medium text-center cursor-pointer">
                  Contact
                </h3>
              </LinkScroll>
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
            <div className="col3  max-sm:mt-4">
              <h2 className="col3Heading text-center pb-5 max-sm:pb-2 text-xl font-bold">
                Social
              </h2>
              <div className="links flex items-center justify-between">
                <Link
                  to="https://www.facebook.com/permalink.php?story_fbid=pfbid0hVrqJBbPpWCi1knRD1sCNrXuxJHS6bHo1aBYBxbAgWTmczRS9AZgDExRa7SaXpzrl&id=100080939478681"
                  target="_blank"
                >
                  <img
                    src={Link_1}
                    alt="Facebook"
                    className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/alwaysmanash/"
                  target="_blank"
                >
                  <img
                    src={Link_2}
                    alt="Insta"
                    className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/manash-link2212/"
                  target="_blank"
                >
                  <img
                    src={Link_3}
                    alt="Linkedin"
                    className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                  />
                </Link>
                <Link to="https://github.com/Manash2212/" target="_blank">
                  <img
                    src={Link_4}
                    alt="GitHub"
                    className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                  />
                </Link>
                <Link to="https://twitter.com/always_manash" target="_blank">
                  <img
                    src={Link_5}
                    alt="Twitter"
                    className="socialLink hover:shadow-lg shadow-lg shadow-slate-500 hover:shadow-slate-900 rounded-full mr-2  w-12 h-12 max-sm:w-12 max-sm:h-12"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="copyRight text-secondary w-full py-5 bg-slate-700 text-center">
            <span className="footerDesc">&copy; 2024 Manash Halder</span>

            <span className="footerDesc"> All rights reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
