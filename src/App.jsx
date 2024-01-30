import "./App.css";
// import { useEffect, useRef, useState } from "react";
// import Home from "./component/Home";
// import About from "./component/About";
// import Skills from "./component/Skills";
// import Contact from "./component/Contact";
// import Portfolio from "./component/Portfolio";
// import Footer from "./component/Footer";

import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

// import { Link } from "react-router-dom";
// import { RiMenu4Line } from "react-icons/ri";
// import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
// import MobileNavbar from "./component/MobileNavbar";
// import TiltCard from "./component/about/TiltCard";
function App() {
  // const [isMenuOpen, setisMenuOpen] = useState(true);

  // 1-Start for Page Routings
  // const home = useRef();
  // const about = useRef();
  // const skills = useRef();
  // const portfolio = useRef();
  // const contact = useRef();

  // const scrollHandler = (elmRef) => {
  //   console.log(elmRef);
  //   window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  // };
  // // 1-End

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // const toggleMenu = () => {
  //   setisMenuOpen(!isMenuOpen);
  // };

  // useEffect(() => {
  //   console.log("useEffect is Called");
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);

  //
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      {/* {isMenuOpen && <MobileNavbar setisMenuOpen={setisMenuOpen} />}
      <nav className="w-full  bg-secondary  fixed ">
        <div className="container max-w-screen-xl flex intems-center justify-between py-3 px-2 border-2 border-black">
          <div className="logo">
            <Link to="/" onClick={() => scrollHandler(home)}>
              <h1 className="uppercase text-3xl font-bold text-primary font-instrument italic cursor-pointer">
                Manash-Dev
              </h1>
            </Link>
          </div>
          <div className="nav-items flex items-center justify-center gap-5 cursor-pointer">
            <ul className="hidden md:flex items-center justify-center gap-10 cursor-pointer">
              <li className="menu" onClick={() => scrollHandler(home)}>
                Home
              </li>
              <li className="menu" onClick={() => scrollHandler(about)}>
                About
              </li>
              <li className="menu" onClick={() => scrollHandler(skills)}>
                SKills
              </li>
              <li className="menu" onClick={() => scrollHandler(portfolio)}>
                PortFolio
              </li>
              <li className="menu" onClick={() => scrollHandler(contact)}>
                Contact
              </li>
            </ul>
            {theme === "dark" ? (
              <BsFillSunFill onClick={() => setTheme("light")} />
            ) : (
              <BsFillMoonStarsFill onClick={() => setTheme("dark")} />
            )}
            <button
              onClick={() => setisMenuOpen(true)}
              className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50"
            >
              <RiMenu4Line />
            </button>
          </div>
        </div>
      </nav> */}

      {/* For Rounting the Page */}

      {/*       
      <div className="app">
        <section ref={home}>
          <Home />
        </section>
        <section ref={about}>
          <About />
        </section>
        <section ref={skills}>
          <Skills />
        </section>
        <section ref={portfolio}>
          <Portfolio />
        </section>
        <section ref={contact}>
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </div> */}
    </>
  );
}

export default App;
