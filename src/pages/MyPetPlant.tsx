import ProjectsPage from "../components/ProjectsPage";
import { MyPlantPlantInfo, plantVideos } from "../store/myPetPlant";
import NavBar from "../components/NavBar";
import VideoScroller from "../components/VideoScroller";
import { navItems } from "../store/nav";

const MyPetPlant = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...MyPlantPlantInfo} />
      <div>
        <VideoScroller {...plantVideos} />
      </div>
    </div>
  );
};

export default MyPetPlant;
