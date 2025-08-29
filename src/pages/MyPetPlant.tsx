import ProjectsPage from "../components/ProjectsPage";
import { MyPlantPlantInfo } from "../store/projects";
import NavBar from "../components/NavBar";
import VideoScroller, {
  type VideoScrollerType,
} from "../components/VideoScroller";
import myPetPlantVid1 from "../assets/myPetPlantVid1.mp4";
import { navItems } from "../store/nav";

const plantVideos: VideoScrollerType = {
  videos: [myPetPlantVid1, myPetPlantVid1, myPetPlantVid1],
};

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
