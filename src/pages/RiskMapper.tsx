import NavBar from "../components/NavBar";
import ProjectsPage from "../components/ProjectsPage";
import { RiskMapperInfo } from "../store/projects";
import { navItems } from "../store/nav";

const RiskMapper = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...RiskMapperInfo} />
    </div>
  );
};

export default RiskMapper;
