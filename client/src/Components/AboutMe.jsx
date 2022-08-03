import React from "react";
import { aboutMeTitle, aboutMeDescription } from "../constants";
import Skills from "./Skills";

function AboutMe() {
  return (
    <div className="aboutMeContainer" id="aboutMe">
      <div className="sharedTitle">{aboutMeTitle}</div>
      <div className="aboutMeDescription">{aboutMeDescription}</div>
      <Skills />
    </div>
  );
}

export default AboutMe;
