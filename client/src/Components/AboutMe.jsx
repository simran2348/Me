import React from "react";
import { aboutMeTitle, aboutMeDescription } from "../constants";

function AboutMe() {
  return (
    <div className="aboutMeContainer" id="aboutMe">
      <div className="sharedTitle aboutMeTitle">{aboutMeTitle}</div>
      <div className="aboutMeDescription">{aboutMeDescription}</div>
    </div>
  );
}

export default AboutMe;
