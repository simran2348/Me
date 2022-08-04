import { useRef } from "react";
import AboutMe from "../Components/AboutMe";
import Certifications from "../Components/Certifications";
import CoverPage from "../Components/CoverPage";
import HomepageHeader from "../Components/HomepageHeader";
import Acadamics from "../Components/Academics";
import Projects from "../Components/Projects";
import Career from "../Components/Career";
import HomeFooter from "../Components/HomeFooter";
import WrapUp from "../Components/WrapUp";

function Homepage({ handleVisibility, visible }) {
  const aboutMeRef = useRef();
  const academicsRef = useRef();
  const certificationsRef = useRef();
  const projectsRef = useRef();
  const careerRef = useRef();
  return (
    <>
      <CoverPage handleVisibility={handleVisibility} />
      {visible && (
        <>
          <HomepageHeader
            aboutMeRef={aboutMeRef}
            academicsRef={academicsRef}
            certificationsRef={certificationsRef}
            projectsRef={projectsRef}
            careerRef={careerRef}
          />
          <div className="container">
            <AboutMe aboutMeRef={aboutMeRef} />
            <Acadamics academicsRef={academicsRef} />
            <Certifications certificationsRef={certificationsRef} />
            <Projects projectsRef={projectsRef} />
            <Career careerRef={careerRef} />
            <WrapUp />
            <HomeFooter />
          </div>
        </>
      )}
    </>
  );
}

export default Homepage;
