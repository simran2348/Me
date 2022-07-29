import React from "react";

function Typewriter(props) {
  return <div className={`typewriter ${props.class}`}>{props.label}</div>;
}

export default Typewriter;
