import NavBar from "../components/NavBar";
import { TheEscapeInfo } from "../store/theEscape";
import ProjectsPage from "../components/ProjectsPage";
import { navItems } from "../store/nav";
import Footer from "../components/Footer";
import { theEscapeVideos } from "../store/theEscape";
import { useEffect } from "react";
import VideoScroller from "../components/VideoScroller";

const TheEscape = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...TheEscapeInfo} />
      <VideoScroller {...theEscapeVideos} />
      <Footer />
    </div>
  );
};

export default TheEscape;
