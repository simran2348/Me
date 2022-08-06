import React from "react";
import { academicsJourney, academicsTitle } from "../constants";

function Acadamics({ academicsRef }) {
  return (
    <div className="academicsContainer" id="academics" ref={academicsRef}>
      <div className="sharedTitle">{academicsTitle}</div>
      <div className="academicsItemContainer">
        {academicsJourney.map((item) => (
          <div className="academicItem" key={item.id}>
            <div className="pathRing" />
            <div className="academicInfoContainer">
              <div
                dangerouslySetInnerHTML={{ __html: item.field }}
                className="academicField"
              />
              <div className="academicFromTo">
                <i>
                  {item.from} - {item.to}
                </i>
              </div>
              <div className="academicInstitution">{item.institution}</div>
              <div className="academicArea">
                {item.city}, {item.country}
              </div>
              <div className="academicMarks">
                <span className="marksStyle">{item.marks}</span>{" "}
                {item.marksTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acadamics;
