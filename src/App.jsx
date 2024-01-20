import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Contact from "./component/contact/Contact";
// import TiltCard from "./component/about/TiltCard";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
