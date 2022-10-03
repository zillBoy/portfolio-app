/**
 * Internal Dependencies
 *
 */
import { useState, useEffect } from "react";
// import NavigationLink from "./NavigationLink";
import useWindowSize from "../hooks/useWindowSize";

const Navigation = ({ textColor = "" }) => {
  // States
  const [animation, setAnimation] = useState("");
  const [navigationLinkAnimation, setNavigationLinkAnimation] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Hooks
  const screenSize = useWindowSize();

  // Methods
  const activeAnimation = (name) => setAnimation(name);
  const activeNavigationLinkAnimation = (name) =>
    setNavigationLinkAnimation(name);

  // Constants
  const navigationLinks = [
    {
      id: 1,
      title: "Home",
      to: "/",
      textColor: textColor,
      animation: navigationLinkAnimation,
      setAnimation: activeNavigationLinkAnimation,
    },
    {
      id: 2,
      title: "About",
      to: "about",
      textColor: textColor,
      animation: navigationLinkAnimation,
      setAnimation: activeNavigationLinkAnimation,
    },
    {
      id: 3,
      title: "Contact",
      to: "contact",
      textColor: textColor,
      animation: navigationLinkAnimation,
      setAnimation: activeNavigationLinkAnimation,
    },
  ];

  useEffect(() => {
    if (screenSize.width <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenSize]);

  return (
    <nav className="navigation-container">
      <div className={`navigation-title navigation-title--${textColor}`}>
        <div
          className="navigation-title--author"
          onMouseOver={() => activeAnimation("active")}
          onMouseLeave={() => activeAnimation("unactive")}
        >
          <span
            id="navigation-title-copyright"
            className={`navigation-title--copyright navigation-title--copyright--${animation}`}
          >
            &copy;
          </span>
          <div className="navigation-title--author--container">
            <span
              className={`navigation-title--author--code navigation-title--author--code--${animation}`}
            >
              Code by
            </span>
            <span
              className={`navigation-title--author--firstname navigation-title--author--firstname--${animation}`}
            >
              Muhammad
            </span>
            <span
              className={`navigation-title--author--lastname navigation-title--author--lastname--${animation}`}
            >
              Usman
            </span>
          </div>
        </div>
      </div>

      {/* <div className="navigation-links">
        {isMobile ? (
          <>
            <div className="navigation-links--menuinner">
              <p className="navigation-links--link--menu--dot">&#x2022;</p>
              <p
                className={`navigation-links--link navigation-links--link--menu navigation-links--link--${textColor}`}
              >
                Menu
              </p>
            </div>
          </>
        ) : (
          navigationLinks.map((link, index) => (
            <NavigationLink
              key={index}
              id={link.id}
              index={index}
              title={link.title}
              to={link.to}
              animation={link.animation}
              setAnimation={link.setAnimation}
              textColor={link.textColor}
            />
          ))
        )}
      </div> */}
    </nav>
  );
};

export default Navigation;
