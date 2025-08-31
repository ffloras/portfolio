import React, { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export type NavItemType = {
  name: string;
  link: React.RefObject<HTMLDivElement | null> | string;
};

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = window.location.href.lastIndexOf("#");
    if (index !== -1) {
      const section = window.location.href.substring(index + 1);
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const navItems = [
    { name: "About me", link: aboutRef },
    { name: "Projects", link: projectRef },
    { name: "Contact", link: contactRef },
  ];

  return (
    <>
      <NavBar items={navItems} />
      <section id="about" className="about-me-container" ref={aboutRef}>
        <About />
      </section>
      <section id="projects" className="projects-container" ref={projectRef}>
        <Projects />
      </section>
      <section id="contact" className="contacts-container" ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
