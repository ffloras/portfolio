import NavBar from "../components/NavBar";
import { TheEscapeInfo } from "../store/theEscape";
import ProjectsPage from "../components/ProjectsPage";
import { navItems } from "../store/nav";
import Footer from "../components/Footer";
import { useEffect } from "react";

const TheEscape = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...TheEscapeInfo} />
      <div style={{ paddingBottom: "400px" }}>div</div>
      <Footer />
    </div>
  );
};

export default TheEscape;
