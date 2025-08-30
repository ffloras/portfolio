import NavBar from "../components/NavBar";
import ProjectsPage from "../components/ProjectsPage";
import { RiskMapperInfo, riskMapperVideos } from "../store/riskMapper";
import { navItems } from "../store/nav";
import VideoScroller from "../components/VideoScroller";

const RiskMapper = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...RiskMapperInfo} />
      <VideoScroller {...riskMapperVideos} />
    </div>
  );
};

export default RiskMapper;
