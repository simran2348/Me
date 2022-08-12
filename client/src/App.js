import { useContext, useEffect, useState, useRef } from "react";
import ThemeContext from "./Context/ThemeContext";
import FabRouter from "./Components/FabRouter";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const aboutMeRef = useRef();
  const academicsRef = useRef();
  const certificationsRef = useRef();
  const projectsRef = useRef();
  const careerRef = useRef();
  const refs = [
    aboutMeRef,
    careerRef,
    academicsRef,
    certificationsRef,
    projectsRef,
  ];

  const handleVisibility = () => {
    setVisible(true);
    localStorage.setItem("website", true);

    setTimeout(() => {
      const header = document.getElementById("header");

      if (header) {
        header.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 200);
  };

  useEffect(() => {
    const website = JSON.parse(localStorage.getItem("website"));

    if (website) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  return (
    <Provider store={store}>
      <div data-theme={isDark && "dark"} className="app" id="app">
        <Router>
          <FabRouter
            show={visible}
            isDark={isDark}
            toggleTheme={toggleTheme}
            refs={refs}
          />
          <AppRoutes
            visible={visible}
            handleVisibility={handleVisibility}
            refs={refs}
          />
        </Router>
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={true}
          closeOnClick
          draggable
          className={"appToastContainer"}
          toastClassName={"appToast"}
          bodyClassName={"appToastBody"}
          closeButton={false}
        />
      </div>
    </Provider>
  );
}

export default App;
