import NavBar from "../components/NavBar";
import { TheEscapeInfo } from "../store/theEscape";
import ProjectsPage from "../components/ProjectsPage";
import { navItems } from "../store/nav";

const TheEscape = () => {
  return (
    <div>
      <NavBar items={navItems} />
      <ProjectsPage {...TheEscapeInfo} />
      <div style={{ paddingBottom: "400px" }}>div</div>
    </div>
  );
};

export default TheEscape;
