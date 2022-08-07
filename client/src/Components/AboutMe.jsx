import React from "react";
import {
  aboutMeTitle,
  aboutMeDescription,
  hobbiesTitle,
  hobbies,
} from "../constants";
import Database from "./Database";
import Skills from "./Skills";
import Hosting from "./Hosting";
import VersionControl from "./VersionControl";
import Software from "./Software";

function AboutMe({ aboutMeRef }) {
  return (
    <div className="aboutMeContainer" id="aboutMe" ref={aboutMeRef}>
      <div className="sharedTitle">{aboutMeTitle}</div>
      <div className="aboutMeDescription">{aboutMeDescription}</div>
      <div className="hobbyContainer">
        <div className="hobbyTitle">{hobbiesTitle}</div>
        <ul className="hobbyItemContainer">
          {hobbies.map((hobby, index) => (
            <li className="hobbyItem" key={index}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <Skills />
      <Database />
      <Hosting />
      <VersionControl />
      <Software />
    </div>
  );
}

export default AboutMe;
