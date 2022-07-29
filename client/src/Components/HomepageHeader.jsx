import React from "react";
import { name, segments } from "../constants";

function HomepageHeader() {
  const scrollToSegment = (id) => {
    const segment = document.getElementById(id);

    if (segment) {
      segment.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="headerContainer" id="header">
      <div className="titleContainer">
        <span className="atTheRate">@</span>
        <span className="headerTitle">{name}</span>
      </div>
      <div className="scrollToContainer">
        {segments.map((segment) => (
          <div
            className="scrollSegment"
            onClick={() => scrollToSegment(segment.id)}
          >
            {segment.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomepageHeader;
