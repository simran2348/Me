import React, { useState, useEffect } from "react";
import { ProfileImage } from "../Assets";
import { bio, greeting, launchButtonText, name } from "../constants";
import Typewriter from "../Shared/Typewriter";

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
    }, 1000);
    setTimeout(() => {
      handleMenu();
    }, 1000);
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
      <div className="coverPageContainer">
        <div className="coverContentContainer">
          <div className="firstContainer">
            <div>
              <div className="firstText">{greeting}</div>
              <Typewriter label={name} class="secondText" />
              <div className="bioText">{bio}</div>
            </div>
            <div className="liftoffContainer">
              <button
                className="liftoffButton"
                onClick={() => handleLiftoff()}
              />
              <div className="launchButtonText">{launchButtonText}</div>
            </div>
          </div>
          <div className="secondContainer">
            <img className="coverImage" src={ProfileImage} alt="profile" />
          </div>
        </div>
        <div className="coverPageContainerMobile">hello</div>
      </div>
    </div>
  );
}

export default CoverPage;
