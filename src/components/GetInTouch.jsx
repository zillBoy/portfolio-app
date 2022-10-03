/**
 * Internal Dependencies
 *
 */
import Button from "./Button";
import MobileHeroHeaderImage from "../assets/images/mobile-hero-header-1.jpg";
import { ReactComponent as ArrowDownLeftSvg } from "../assets/images/arrow-down-left.svg";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-contacts-container">
        <div className="get-in-touch-contacts">
          <div className="get-in-touch-contacts-main">
            <img
              className="get-in-touch-contacts-image"
              src={MobileHeroHeaderImage}
              alt="person"
            />
            <p className="get-in-touch-contacts-para">Let’s work</p>
          </div>
          <div>
            <p className="get-in-touch-contacts-para">together</p>
          </div>
        </div>

        <div className="get-in-touch-contacts-arrow-icon-container">
          <ArrowDownLeftSvg />
        </div>
      </div>

      <div className="get-in-touch-hr">
        <p className="get-in-touch-hr-top" />
        <p className="get-in-touch-hr-bottom" />
      </div>

      <div className="get-in-touch-buttons">
        <div className="get-in-touch-buttons--inner-container">
          <Button type="mail" title="musman0741@gmail.com" />
          <Button type="tel" title="+92 33 43 37 11 86" />
        </div>
        <div />
      </div>
    </div>
  );
};

export default GetInTouch;
