import ProjectsPage from "../components/ProjectsPage";
import { MyPlantPlantInfo, plantVideos } from "../store/myPetPlant";
import NavBar from "../components/NavBar";
import VideoScroller from "../components/VideoScroller";
import { navItems } from "../store/nav";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MyPetPlant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...MyPlantPlantInfo} />
      <VideoScroller {...plantVideos} />
      <Footer />
    </div>
  );
};

export default MyPetPlant;
