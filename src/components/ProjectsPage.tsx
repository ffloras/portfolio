import { FaGithub } from "react-icons/fa";
import type { ProjectsPageType } from "../store/projects";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = ({
  img,
  imgAlt,
  title,
  projectType,
  description,
  subDescription,
  link,
  github,
}: ProjectsPageType) => {
  return (
    <div className="project-page-container">
      <div className="project-page-header">
        <img className="project-page-header-img" src={img} alt={imgAlt} />
        <div className="project-page-header-text-container">
          <h2 className="project-page-title">{title}</h2>
          <p className="project-page-subtitle">{projectType}</p>
          <p className="project-page-description">{description}</p>
          {subDescription && (
            <p className="project-page-description">{subDescription}</p>
          )}
          {link && (
            <a className="project-header-link" href={link} target="_blank">
              <FaExternalLinkAlt
                className="project-link-icon"
                size={15}
                color="#9a6626ff"
              />
              Check out {title}
            </a>
          )}
          <br />
          {github && (
            <a className="project-header-link" href={github} target="_blank">
              <FaGithub size={20} color="#9a6626ff" />
              View on Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
