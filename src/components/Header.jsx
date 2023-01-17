import { FiSend } from "react-icons/fi";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Web Designer", "Frontend Web Developer"],
      cursorChar: "_",
    });
  }, []);

  return (
    <div className="header">
      <div className="header__left-box">
        <h1 className="heading heading__primary heading--dark">
          <span>Tedy</span>
          <br />
          <span>Maradho&nbsp;Pasa</span>
        </h1>
        <p className="subtitle">
          Hi, I'm a <span ref={textRef}></span>
          <br />
          Serving web design, creation and development to become a stunning
          website.
        </p>
        <div className="header__button-box">
          <a className="btn btn__primary" href="#footer">
            Let's Discuss&nbsp;
            <FiSend />
          </a>
        </div>
      </div>
      <div className="header__right-box"></div>
    </div>
  );
}

export default Header;
