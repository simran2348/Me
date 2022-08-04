import React from "react";
import { careerTitle } from "../constants";

function Career({ careerRef }) {
  return (
    <div className="careerContainer" id="career" ref={careerRef}>
      <div className="sharedTitle">{careerTitle}</div>
    </div>
  );
}

export default Career;
