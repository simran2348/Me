import React from "react";
import { WrapUpDescription, WrapUpTitle } from "../constants";

function WrapUp() {
  return (
    <div className="wrapUpContainer" id="aboutMe">
      <div className="sharedTitle">{WrapUpTitle}</div>
      <div className="wrapUpDescription">{WrapUpDescription}</div>
    </div>
  );
}

export default WrapUp;
