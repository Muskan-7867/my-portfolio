import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    work: workRef,
    contact: contactRef,
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar refs={refs} />

      <div className="flex-1 transition-all duration-300 ease-in-out">
        <section ref={homeRef}><Home /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={workRef}><Work /></section>
        <section ref={contactRef}><Contact /></section>
      </div>
    </div>
  );
}

export default App;
