// React Dependencies
import { useState, useEffect } from "react";

// External Dependencies
import Marquee from "react-fast-marquee";

// Internal Dependencies
import useWindowSize from "../hooks/useWindowSize";

import heroImage from "../assets/images/hero-header-3.jpg";
import mobileHeroImage from "../assets/images/mobile-hero-header-2.jpg";
import { ReactComponent as ArrowDownRightSvg } from "../assets/images/arrow-down-right.svg";
import { ReactComponent as GlobeSvg } from "../assets/images/globe.svg";

const HeroHeader = () => {
  const screenSize = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (screenSize.width <= 820) setIsMobile(true);
    else setIsMobile(false);
  }, [screenSize]);

  return (
    <div className="hero-header-container">
      <div className="hero-header-image-container">
        <img
          className="hero-header-image"
          src={isMobile ? mobileHeroImage : heroImage}
          alt="hero"
        />
      </div>

      <div className="personal-maincontainer">
        <section className="personal-info-container">
          <div className="personal-info-location">
            <p className="personal-info-location--geo">
              Located in Islamabad, Pakistan
            </p>
            <div className="personal-info-location--globe">
              <GlobeSvg />
            </div>
          </div>

          <div className="personal-info-career">
            <div className="personal-info-career--arrow">
              <ArrowDownRightSvg />
            </div>
            <div className="personal-info-career--designation">
              <p>Software Engineer</p>
              <p></p>
            </div>
          </div>
        </section>
      </div>

      <Marquee speed={100}>
        <div className="author-container">
          <h1 className="name">Muhammad</h1>
          <h1 className="name">Usman</h1>
          <span className="spacer">&ndash;</span>

          <h1 className="name">Muhammad</h1>
          <h1 className="name">Usman</h1>
          <span className="spacer">&ndash;</span>
        </div>
      </Marquee>
    </div>
  );
};

export default HeroHeader;
