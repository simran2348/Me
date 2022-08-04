import React from "react";
import { softwares, softwareTitle } from "../constants";

function Software() {
  return (
    <div className="softwareContainer">
      <div className="sharedSubTitle">{softwareTitle}</div>
      <div className="softwareItemContainer">
        {softwares.map((item) => (
          <div className="softwareItem" key={item.id}>
            <div className="softwareIcon">{item.icon}</div>
            <div className="softwareTitle">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Software;
