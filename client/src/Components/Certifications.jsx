import React from "react";
import { certificates, certificationTitle } from "../constants";

function Certifications({ certificationsRef }) {
  return (
    <div
      className="certificationsContainer"
      id="certifications"
      ref={certificationsRef}
    >
      <div className="sharedTitle">{certificationTitle}</div>
      <div className="certificationGridContainer">
        {certificates.map((item) => (
          <div className="certificationGridItem" key={item.id}>
            <div
              style={{
                background: item.background,
              }}
              className="certificationIconContainer"
            >
              {item.icon}
            </div>
            <div className="certificationInfoContainer">
              <div className="certificateTitle">{item.title}</div>
              <div className="certificateIssuer">{item.issuer}</div>
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="viewCertificate"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
