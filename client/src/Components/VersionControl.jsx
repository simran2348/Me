import React from "react";
import { versionControl, versionControlTitle } from "../constants";

function VersionControl() {
  return (
    <div className="versionContainer">
      <div className="sharedSubTitle">{versionControlTitle}</div>
      <div className="versionItemContainer">
        {versionControl.map((item) => (
          <div className="versionItem" key={item.id}>
            <div className="versionIcon">{item.icon}</div>
            <div className="versionTitle">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VersionControl;
