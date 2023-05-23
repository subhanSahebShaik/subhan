import React from "react";
import bg from "../../images/project-kiddie.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      className="projectsContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>Projects</div>
    </div>
  );
};

export default Projects;
