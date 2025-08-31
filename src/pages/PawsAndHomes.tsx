import ProjectsPage from "../components/ProjectsPage";
import { PawsAndHomesInfo, pawsAndHomesVideos } from "../store/pawsAndHomes";
import NavBar from "../components/NavBar";
import VideoScroller from "../components/VideoScroller";
import { navItems } from "../store/nav";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PawsAndHomes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...PawsAndHomesInfo} />
      <VideoScroller {...pawsAndHomesVideos} />
      <Footer />
    </div>
  );
};

export default PawsAndHomes;
