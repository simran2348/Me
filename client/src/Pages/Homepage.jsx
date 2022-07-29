import AboutMe from "../Components/AboutMe";
import CoverPage from "../Components/CoverPage";
import HomepageHeader from "../Components/HomepageHeader";

function Homepage({ handleVisibility, visible }) {
  return (
    <div className="container">
      <CoverPage handleVisibility={handleVisibility} />
      {visible && (
        <>
          <HomepageHeader />
          {/* <AboutMe /> */}
        </>
      )}
    </div>
  );
}

export default Homepage;
