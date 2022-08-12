import React from "react";
import { Instagram, ProfileImage } from "../Assets";
import { bio, greeting, launchButtonText, name, socials } from "../constants";
import Typewriter from "../Shared/Typewriter";

function CoverPage({ handleVisibility }) {
  return (
    <div className="coverPage">
      <div className="coverPageContainer">
        <div className="coverContentContainer">
          <div className="firstContainer">
            <div>
              <div className="firstText">{greeting}</div>
              <Typewriter label={name} class="secondText" />
              <div className="bioText">{bio}</div>
              <div className="socialLinksCoverPage">
                {socials.map((item) => {
                  return (
                    item.link !== null && (
                      <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLinkItemCover"
                      >
                        {item.label === "Instagram" ? (
                          <Instagram size={30} />
                        ) : (
                          item.icon
                        )}
                      </a>
                    )
                  );
                })}
              </div>
            </div>
            <div className="liftoffContainer">
              <button
                className="liftoffButton"
                onClick={() => handleVisibility()}
              />
              <div className="launchButtonText">{launchButtonText}</div>
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
