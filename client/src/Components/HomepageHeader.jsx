import React, { useEffect, useState } from "react";
import { name, segments } from "../constants";

function HomepageHeader({
  aboutMeRef,
  academicsRef,
  certificationsRef,
  projectsRef,
  careerRef,
}) {
  const refs = [
    aboutMeRef,
    academicsRef,
    certificationsRef,
    projectsRef,
    careerRef,
  ];
  const [navsegment, setNavSegment] = useState(segments);

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

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > window.innerHeight + 100.23) {
        const scrollContainer = document.getElementById("scrollContainer");
        const header = document.getElementById("header");
        if (header) {
          header.classList.add("headerFixed");
        }
        if (scrollContainer) {
          scrollContainer.classList.add("scrollSegmentFixed");
        }
      } else {
        const scrollContainer = document.getElementById("scrollContainer");
        const header = document.getElementById("header");
        if (header) {
          header.classList.remove("headerFixed");
        }
        if (scrollContainer) {
          scrollContainer.classList.remove("scrollSegmentFixed");
        }
      }

      // refs.map((ref) => {
      //   if (ref) {
      //     if (ref.current.offsetTop - window.scrollY < window.innerHeight / 2) {
      //       tempSegment.map((segment) => {
      //         if (ref.current.id === segment.id) {
      //           segment.selected = true;
      //         } else {
      //           segment.selected = false;
      //         }
      //       });

      //       setNavSegment(tempSegment);
      //     }
      //   }
      // });
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="headerContainer" id="header">
        <div className="titleContainer">
          <span className="atTheRate">@</span>
          <span className="headerTitle">{name}</span>
        </div>
      </div>
      <div className="scrollToContainer" id="scrollContainer">
        {navsegment.map((segment) => (
          <div
            key={segment.id}
            className={`scrollSegment ${segment.selected && "segmentSelected"}`}
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
