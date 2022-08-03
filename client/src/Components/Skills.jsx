import React from "react";
import { skillsTitle } from "../constants";
import { skills } from "../constants";

function Skills() {
  const skillEntries = Object.entries(skills);

  return (
    <div className="skillsContainer">
      <div className="sharedSubTitle">{skillsTitle}</div>
      <div className="skillGridContainer">
        {skillEntries.map((skill, index) => (
          <div className="skillGridItem" key={index}>
            <div className="gridItemTitle">{skill[0]}</div>
            <div className="gridItemStatsContainer">
              {skill[1].map((stat) => (
                <React.Fragment key={stat.id}>
                  <div className="gridStatTitleContainer">
                    <div className="gridStatTitle">{stat.label}</div>
                    {stat.icon}
                  </div>
                  <div className="statbarContainer">
                    <div
                      className="statbar"
                      style={{ width: `${stat.width}%` }}
                    />
                    <span className="statPercentage">{stat.width}%</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
