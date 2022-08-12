import AboutMe from "../Components/AboutMe";
import Certifications from "../Components/Certifications";
import CoverPage from "../Components/CoverPage";
import HomepageHeader from "../Components/HomepageHeader";
import Acadamics from "../Components/Academics";
import Projects from "../Components/Projects";
import Career from "../Components/Career";
import HomeFooter from "../Components/HomeFooter";
import WrapUp from "../Components/WrapUp";

function Homepage({ handleVisibility, visible, refs }) {
  return (
    <>
      <CoverPage handleVisibility={handleVisibility} />
      {visible && (
        <>
          <HomepageHeader refs={refs} />
          <div className="container">
            <AboutMe aboutMeRef={refs[0]} />
            <Career careerRef={refs[1]} />
            <Acadamics academicsRef={refs[2]} />
            <Certifications certificationsRef={refs[3]} />
            <Projects projectsRef={refs[4]} />
            <WrapUp />
            <HomeFooter />
          </div>
        </>
      )}
    </>
  );
}

export default Homepage;
