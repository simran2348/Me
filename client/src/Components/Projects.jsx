import React from "react";
import { projectTitle } from "../constants";

function Projects({ projectsRef }) {
  return (
    <div className="projectContainer" id="projects" ref={projectsRef}>
      <div className="sharedTitle">{projectTitle}</div>
    </div>
  );
}

export default Projects;
