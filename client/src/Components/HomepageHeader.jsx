import React from "react";
import { name, segments } from "../constants";

function HomepageHeader() {
  const scrollToSegment = (id) => {
    const segment =
      id === "aboutMe"
        ? document.getElementById("header")
        : document.getElementById(id);

    if (segment) {
      if (id === "aboutMe") {
        segment.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        segment.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
          block: "center",
        });
      }
    }
  };
  return (
    <>
      <div className="headerContainer" id="header">
        <div className="titleContainer">
          <span className="atTheRate">@</span>
          <span className="headerTitle">{name}</span>
        </div>
      </div>
      <div className="scrollToContainer">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className="scrollSegment"
            onClick={() => scrollToSegment(segment.id)}
          >
            {segment.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomepageHeader;
