/* eslint-disable react-hooks/exhaustive-deps */
import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Hammer from "react-hammerjs";
import React, { useState, useEffect } from "react";
import { MoonImage, SunImage, ProfileImage, Instagram } from "../Assets/index";
import { segments, socials } from "../constants";
import { BsChevronDown } from "react-icons/bs";
import useMediaQuery from "../Utility/UseMediaQuery";

function FabRouter({ isDark, toggleTheme, show, refs }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);
  const [navsegment, setNavSegment] = useState(segments);
  const [menuExtend, setMenuExtend] = useState(false);
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
          color="var(--primary)"
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
          color="var(--primary)"
        />
      ),
      selected: pathname === "/contact-me",
    },
  ];

  const handleSwipe = () => {
    setVisible(!visible);
  };

  const scrollToSegment = (id) => {
    const app = document.getElementById("app");
    const segment = document.getElementById(id);

    if (segment) {
      app.scrollTo({
        top: segment.offsetTop - 100,
        behavior: "smooth",
      });
    }
    handleSwipe();
  };

  useEffect(() => {
    const app = document.getElementById("app");
    const handleScroll = () => {
      if (app.scrollTop < window.innerHeight) {
        const tempSegment = [...navsegment];
        refs.map((ref) => {
          if (ref) {
            if (
              ref.current.offsetTop - app.scrollTop <
              window.innerHeight / 2
            ) {
              tempSegment.map((segment) => {
                if (ref.current.id === segment.id) {
                  segment.selected = false;
                }
                return segment;
              });
              setNavSegment(tempSegment);
            }
          }
          return ref;
        });
      } else {
        const tempSegment = [...navsegment];
        refs.map((ref) => {
          if (ref) {
            if (
              ref.current.offsetTop - app.scrollTop <
              window.innerHeight / 2
            ) {
              tempSegment.map((segment) => {
                if (ref.current.id === segment.id) {
                  segment.selected = true;
                } else {
                  segment.selected = false;
                }
                return segment;
              });

              setNavSegment(tempSegment);
            }
          }
          return ref;
        });
      }
    };
    app.addEventListener("scroll", handleScroll, false);
    return () => {
      app.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuExtend = () => {
    setMenuExtend(!menuExtend);
  };

  return (
    <div className={isValidPage ? "" : "displayNone"}>
      {isMobile ? (
        <>
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
                      <React.Fragment key={index}>
                        <Link
                          to={item.path}
                          className={`menuLink ${
                            item.selected && "menuLinkSelected"
                          }`}
                          onClick={handleSwipe}
                        >
                          {item.label}
                        </Link>
                        <div
                          className={`menuNotExtend ${
                            menuExtend && "menuExtend"
                          }`}
                        >
                          {item.label === "Home" &&
                            navsegment.map((segment) => (
                              <div
                                key={segment.id}
                                className={`scrollSegmentMobile ${
                                  segment.selected && "segmentSelectedMobile"
                                }`}
                                onClick={() => scrollToSegment(segment.id)}
                              >
                                {segment.label}
                              </div>
                            ))}
                        </div>
                        {item.label === "Home" && (
                          <div className="downArrowContainer">
                            <BsChevronDown
                              strokeWidth={3}
                              className={`${menuExtend && "rotateUpside"}`}
                              onClick={handleMenuExtend}
                              size={20}
                              color="var(--theme)"
                            />
                          </div>
                        )}
                      </React.Fragment>
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
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="fabRouter">
            {show &&
              pageLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`fabIconContainer ${
                    item.selected && "fabSelected"
                  }`}
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
        </>
      )}
      <div
        className={visible ? "backdrop" : "displaynone"}
        onClick={handleSwipe}
      />
    </div>
  );
}

export default FabRouter;
