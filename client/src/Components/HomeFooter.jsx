import React from "react";
import { FaSlackHash } from "react-icons/fa";

function HomeFooter() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="footerContainer">
      <div>
        <FaSlackHash size={50} color="var(--primary)" />
      </div>
      <div>{date}</div>
    </div>
  );
}

export default HomeFooter;
