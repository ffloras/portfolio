import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProjectButtonType } from "../store/projects";

const ProjectButton = ({
  title,
  description,
  img,
  link,
}: ProjectButtonType) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div
      className="project-button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleClick(link)}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div
        className="project-button-filter"
        style={{
          opacity: isHover ? 1 : 0,
        }}
      >
        <h2 className="project-button-title">{title}</h2>
        <p className="project-button-desc">{description}</p>
      </div>
    </div>
  );
};

export default ProjectButton;
