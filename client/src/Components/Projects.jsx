import React from "react";
import { projects, projectTitle } from "../constants";

function Projects({ projectsRef }) {
  return (
    <div className="projectContainer" id="projects" ref={projectsRef}>
      <div className="sharedTitle">{projectTitle}</div>
      <div className="projectItemContainer">
        {projects.map((project) => (
          <div className="projectItem" key={project.id}>
            <div className="projectDisplayImageContainer">
              <img
                className="projectDisplayImage"
                src={project.displayImage}
                alt={project.title}
              />
            </div>
            {/* <div className="projectItemInfo">
              <div className="projectTitle">{project.title}</div>
              <div className="projectSummary">{project.summary}</div>
              <div className="projectActions"></div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
