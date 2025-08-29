import React, { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Projects from "../sections/Projects";

export type NavItemType = {
  name: string;
  link: React.RefObject<HTMLDivElement | null> | string;
};

const Home = () => {
  const navigate = useNavigate();
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
      <section id="about" className="about-container" ref={aboutRef}>
        About Me
      </section>
      <section id="projects" className="projects-container" ref={projectRef}>
        <Projects />
      </section>
      <section id="contact" className="contact" ref={contactRef}>
        My Contact
      </section>
      <button onClick={() => navigate("/MyPetPlant")}>
        Go to my pet plant
      </button>
    </>
  );
};

export default Home;
