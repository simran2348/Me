import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Resume,
  WrapUpContactMessage,
  WrapUpDescription,
  WrapUpTitle,
} from "../constants";
import RippleButton from "../Shared/RippleButton";

function WrapUp() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact-me");
  };
  return (
    <div className="wrapUpContainer" id="wrapUp">
      <div className="sharedTitle">{WrapUpTitle}</div>
      <div className="wrapUpDescription">{WrapUpDescription}</div>
      <RippleButton
        label={"Download Resume"}
        align={"justifyStart"}
        type="button"
        id={"downloadResume"}
        path={Resume}
        download={false}
        downloadLabel="Simranjit_Singh"
      />
      <div className="wrapUpContactContainer">
        <div className="wrapUpDescription">{WrapUpContactMessage}</div>
        <RippleButton
          label={"Contact Me"}
          buttonClass="wrapUpContactButton"
          align={"justifyStart"}
          type="button"
          id={"wrapUpContact"}
          handleClick={handleNavigate}
        />
      </div>
    </div>
  );
}

export default WrapUp;
