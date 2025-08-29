import ProjectButton from "../components/ProjectButton";
import { projectList } from "../store/projects";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-list-container">
        {projectList.map((project, index) => (
          <ProjectButton {...project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </>
  );
};

export default Projects;
