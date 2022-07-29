import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hammer from "react-hammerjs";
import { useState } from "react";
import { MoonImage, SunImage, ProfileImage } from "../Assets/index";
import { socials } from "../constants";

function FabRouter({ isDark, toggleTheme, show }) {
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);
  const isValidPage =
    pathname === "/" || pathname === "/contact-me" || pathname === "/about";

  const pageLinks = [
    {
      label: "Home",
      path: "/",
      icon: (
        <AiFillHome
          size={23}
          className={`${pathname === "/" && "fabIcon"}`}
          color="var(--fabIconColor)"
        />
      ),
      selected: pathname === "/",
    },
    {
      label: "Contact Me",
      path: "/contact-me",
      icon: (
        <MdMail
          size={23}
          className={`${pathname === "/contact-me" && "fabIcon"}`}
          color="var(--fabIconColor)"
        />
      ),
      selected: pathname === "/contact-me",
    },
    {
      label: "Info",
      path: "/about",
      icon: (
        <FaInfo
          size={23}
          className={`${pathname === "/about" && "fabIcon"}`}
          color="var(--fabIconColor)"
        />
      ),
      selected: pathname === "/about",
    },
  ];

  const handleSwipe = () => {
    setVisible(!visible);
  };

  return (
    <div className={isValidPage ? "" : "displayNone"}>
      <div className="fabRouter">
        {show &&
          pageLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`fabIconContainer ${item.selected && "fabSelected"}`}
            >
              {item.icon}
            </Link>
          ))}
      </div>
      <div className="themeController">
        <img
          src={MoonImage}
          alt="moon"
          className={`themeIcon ${isDark ? "appear" : "dissappear"}`}
          onClick={toggleTheme}
        />
        <img
          src={SunImage}
          alt="sun"
          className={`themeIcon ${!isDark ? "appear" : "dissappear"}`}
          onClick={toggleTheme}
        />
      </div>
      <div
        className={visible ? "backdrop" : "displaynone"}
        onClick={handleSwipe}
      />
      <div
        id="hanburgerIcon"
        className={`fabRouterMobile ${visible && "open"}`}
        onClick={handleSwipe}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Hammer onSwipe={handleSwipe} direction="DIRECTION_LEFT">
        <div className="swiperArea" />
      </Hammer>
      <div className={`swiper ${visible && "swiperVisible"}`}>
        <div className="themeControllerMobile">
          <img
            src={MoonImage}
            alt="moon"
            className={`themeIcon ${isDark ? "appear" : "dissappear"}`}
            onClick={toggleTheme}
          />
          <img
            src={SunImage}
            alt="sun"
            className={`themeIcon ${!isDark ? "appear" : "dissappear"}`}
            onClick={toggleTheme}
          />
        </div>
        <div className="swiperProfile">
          <div
            className="profilePicMobile"
            style={{ backgroundImage: `url(${ProfileImage})` }}
          ></div>
          <div className="linksContainerMobile">
            <div className="linkItems">
              {show &&
                pageLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`menuLink ${
                      item.selected && "menuLinkSelected"
                    }`}
                    onClick={handleSwipe}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
            <div className="socialLinksMobile">
              {socials.map((item) => {
                return (
                  item.link !== null && (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="socialLinkItemMobile"
                    >
                      {item.icon}
                    </a>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FabRouter;
