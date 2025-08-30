import ProjectsPage from "../components/ProjectsPage";
import { PawsAndHomesInfo, pawsAndHomesVideos } from "../store/pawsAndHomes";
import NavBar from "../components/NavBar";
import VideoScroller from "../components/VideoScroller";
import { navItems } from "../store/nav";

const PawsAndHomes = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...PawsAndHomesInfo} />
      <div>
        <VideoScroller {...pawsAndHomesVideos} />
      </div>
    </div>
  );
};

export default PawsAndHomes;
