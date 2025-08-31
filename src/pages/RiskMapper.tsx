import NavBar from "../components/NavBar";
import ProjectsPage from "../components/ProjectsPage";
import { RiskMapperInfo, riskMapperVideos } from "../store/riskMapper";
import { navItems } from "../store/nav";
import VideoScroller from "../components/VideoScroller";
import Footer from "../components/Footer";
import { useEffect } from "react";

const RiskMapper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...RiskMapperInfo} />
      <VideoScroller {...riskMapperVideos} />
      <Footer />
    </div>
  );
};

export default RiskMapper;
