import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";

const AppRoutes = ({ handleVisibility, visible }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage handleVisibility={handleVisibility} visible={visible} />
        }
      />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
