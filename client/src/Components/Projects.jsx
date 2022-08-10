import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { projects, projectTitle } from "../constants";
import RippleButton from "../Shared/RippleButton";

function Projects({ projectsRef }) {
  return (
    <div className="projectContainer" id="projects" ref={projectsRef}>
      <div className="sharedTitle">{projectTitle}</div>
      <div className="projectItemContainer">
        {projects.map((project) => (
          <div className="projectItem" key={project.id}>
            {/* <div className="projectDisplayImageContainer">
              <img
                className="projectDisplayImage"
                src={project.displayImage}
                alt={project.title}
              />
            </div> */}
            <div className="projectItemInfo">
              <div className="projectTitle">{project.title}</div>
              <div className="projectSummary">{project.summary}</div>
              <div className="projectActions">
                <RippleButton
                  label={"View on Github"}
                  path={project.githubLink}
                  icon={<AiFillGithub size={22} />}
                  buttonClass="projectActionButton"
                />
                {project.demoLink && (
                  <RippleButton
                    label={"View Demo"}
                    path={project.demoLink}
                    icon={<BsPlayFill size={22} />}
                    buttonClass="projectActionButton"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
