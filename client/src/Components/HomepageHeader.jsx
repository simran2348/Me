/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { name, segments } from "../constants";

function HomepageHeader({ refs }) {
  const [navsegment, setNavSegment] = useState(segments);

  const scrollToSegment = (id) => {
    const app = document.getElementById("app");
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
        app.scrollTo({
          top: segment.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const app = document.getElementById("app");
    const handleScroll = (e) => {
      if (app.scrollTop < window.innerHeight) {
        const tempSegment = [...navsegment];
        refs.map((ref) => {
          if (ref) {
            if (
              ref.current.offsetTop - app.scrollTop <
              window.innerHeight / 2
            ) {
              tempSegment.map((segment) => {
                if (ref.current.id === segment.id) {
                  segment.selected = false;
                }
                return segment;
              });
              setNavSegment(tempSegment);
            }
          }
          return ref;
        });
      } else {
        const tempSegment = [...navsegment];
        refs.map((ref) => {
          if (ref) {
            if (
              ref.current.offsetTop - app.scrollTop <
              window.innerHeight / 2
            ) {
              tempSegment.map((segment) => {
                if (ref.current.id === segment.id) {
                  segment.selected = true;
                } else {
                  segment.selected = false;
                }
                return segment;
              });

              setNavSegment(tempSegment);
            }
          }
          return ref;
        });
      }

      if (app.scrollTop > window.innerHeight + 100.23) {
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
    };
    app.addEventListener("scroll", handleScroll, false);
    return () => {
      app.removeEventListener("scroll", handleScroll);
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
