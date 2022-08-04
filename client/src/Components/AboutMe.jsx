import React from "react";
import { aboutMeTitle, aboutMeDescription } from "../constants";
import Database from "./Database";
import Skills from "./Skills";
import Hosting from "./Hosting";
import VersionControl from "./VersionControl";
import Software from "./Software";

function AboutMe() {
  return (
    <div className="aboutMeContainer" id="aboutMe">
      <div className="sharedTitle">{aboutMeTitle}</div>
      <div className="aboutMeDescription">{aboutMeDescription}</div>
      <Skills />
      <Database />
      <Hosting />
      <VersionControl />
      <Software />
    </div>
  );
}

export default AboutMe;
