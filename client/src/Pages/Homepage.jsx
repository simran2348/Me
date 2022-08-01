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
  return (
    <div className="container">
      <CoverPage handleVisibility={handleVisibility} />
      {visible && (
        <>
          <HomepageHeader />
          <AboutMe />
          <Acadamics />
          <Certifications />
          <Projects />
          <Career />
          <WrapUp />
          <HomeFooter />
        </>
      )}
    </div>
  );
}

export default Homepage;
