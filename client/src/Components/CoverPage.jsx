import React, { useState, useEffect } from "react";
import { ProfileImage } from "../Assets";

function CoverPage({ handleMenu }) {
  const [liftoff, setLiftoff] = useState(false);
  const [reloadLiftoff, setReloadLiftoff] = useState(false);
  const handleLiftoff = () => {
    setLiftoff(true);
    localStorage.setItem("liftoff", true);
    setTimeout(() => {
      const element = document.getElementById("liftoff");
      if (element) {
        element.classList.add("displayNone");
      }
    }, 1500);
    setTimeout(() => {
      handleMenu();
    }, 1200);
  };

  useEffect(() => {
    setReloadLiftoff(JSON.parse(localStorage.getItem("liftoff")));
  }, []);

  return (
    <div
      id="liftoff"
      className={`coverPage ${liftoff && "coverPageLiftoff"} ${
        reloadLiftoff && "displayNone"
      }`}
    >
      <div className="container coverPageContainer">
        <div className="coverContentContainer">
          <div className="firstContainer">
            <div className="firstText">Hello, I am</div>
            <div className="secondText">Simranjit Singh</div>
            <div className="liftoffContainer">
              <button
                className="liftoffButton"
                onClick={() => handleLiftoff()}
              />
            </div>
          </div>
          <div className="secondContainer">
            <img className="coverImage" src={ProfileImage} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
