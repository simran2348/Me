import React from "react";
import { academicsTitle } from "../constants";

function Acadamics({ academicsRef }) {
  return (
    <div className="academicsContainer" id="academics" ref={academicsRef}>
      <div className="sharedTitle">{academicsTitle}</div>
    </div>
  );
}

export default Acadamics;
