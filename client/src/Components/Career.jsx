import React from "react";
import { careerExperience, careerTitle } from "../constants";

function Career({ careerRef }) {
  return (
    <div className="careerContainer" id="career" ref={careerRef}>
      <div className="sharedTitle">{careerTitle}</div>
      <div className="careerItemContainer">
        {careerExperience.map((career, index) => (
          <div className="companyItem" key={index}>
            <div className="companyLogoContainer">
              <div className="companyLogo">{career.companyLogo}</div>
              <div className="companyName">{career.companyName}</div>
              <div className="companyFromTo">
                <i>
                  {career.from} - {career.to}
                </i>
              </div>
            </div>
            <div className="companySubItemContainer">
              {career.experience.map((exp, index) => (
                <div className="companySubItem" key={index}>
                  <div className="pathRing" />
                  <div className="experienceInfoContainer">
                    <div className="teamName">{exp.teamName}</div>
                    <div className="teamTitle">{exp.teamTitle}</div>
                    <div className="experienceFromTo">
                      <i>
                        {exp.from} - {exp.to}
                      </i>
                    </div>
                    <ul className="experienceItemContainer">
                      {exp.keyPoints.map((point, index) => (
                        <li className="experiancePoint" key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
