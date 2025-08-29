import NavBar from "../components/NavBar";
import { TheEscapeInfo } from "../store/projects";
import ProjectsPage from "../components/ProjectsPage";
import { navItems } from "../store/nav";

const TheEscape = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...TheEscapeInfo} />
    </div>
  );
};

export default TheEscape;
