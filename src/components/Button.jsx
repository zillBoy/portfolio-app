/**
 * Internal Dependencies
 *
 */
import { useRef } from "react";

const Button = ({ title, type = "" }) => {
  const btnFill = useRef();
  const btnText = useRef();

  const onMouseOver = () => {
    const btnFillElement = btnFill.current;
    const btnTextElement = btnText.current;

    btnFillElement.classList.add("btn-fill");
    btnFillElement.style.width = `${btnTextElement.offsetWidth}px`;
    btnFillElement.style.transform = "translate(0px, 0%)";
    btnTextElement.style.borderColor = "#455CE9";
  };

  const onMouseLeave = () => {
    const btnFillElement = btnFill.current;
    const btnTextElement = btnText.current;

    btnFillElement.style.transform = "translate(0px, -76%)";
    btnTextElement.style.borderColor = "#525354";

    setTimeout(() => {
      btnFillElement.classList.remove("btn-fill");
      btnFillElement.style.transform = "translate(0px, 76%)";
    }, 500);
  };

  return (
    <div className="btn-container">
      <div
        className="btn"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div ref={btnFill} className="btn-fill"></div>
        <span ref={btnText} className="btn-text">
          {type === "tel" ? (
            <a className="btn-text--tel" href="tel:+923343371186">
              {title}
            </a>
          ) : type === "mail" ? (
            <a className="btn-text--tel" href={`mailto:${title}`}>
              {title}
            </a>
          ) : (
            title
          )}
        </span>
      </div>
    </div>
  );
};

export default Button;
