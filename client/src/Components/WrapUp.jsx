import React from "react";
import {
  WrapUpContactMessage,
  WrapUpDescription,
  WrapUpTitle,
} from "../constants";
import RippleButton from "../Shared/RippleButton";

function WrapUp() {
  return (
    <div className="wrapUpContainer" id="aboutMe">
      <div className="sharedTitle">{WrapUpTitle}</div>
      <div className="wrapUpDescription">{WrapUpDescription}</div>
      <RippleButton
        label={"Download Resume"}
        align={"justifyStart"}
        type="button"
        id={"downloadResume"}
      />
      <div className="wrapUpContactContainer">
        <div className="wrapUpDescription">{WrapUpContactMessage}</div>
        <RippleButton
          label={"Contact Me"}
          buttonClass="wrapUpContactButton"
          align={"justifyStart"}
          type="button"
          id={"wrapUpContact"}
        />
      </div>{" "}
    </div>
  );
}

export default WrapUp;
