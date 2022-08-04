import React from "react";
import { hosting, hostingTitle } from "../constants";

function Hosting() {
  return (
    <div className="hostingContainer">
      <div className="sharedSubTitle">{hostingTitle}</div>
      <div className="hostingItemContainer">
        {hosting.map((item) => (
          <div className="hostingItem" key={item.id}>
            <div className="hostingIcon">{item.icon}</div>
            <div className="hostingTitle">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hosting;
