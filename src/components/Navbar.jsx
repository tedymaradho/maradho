import Logo from "../assets/logo.png";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Navigate = useNavigate();

  const navigateHandler = () => {
    Navigate("/");
    setDropdownOpen(false);
  };

  const dropdownToggleHandler = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navbar">
      <div className="navbar__logo-box" onClick={() => Navigate("/")}>
        <img className="navbar__logo-img" src={Logo} alt="Logo Maradho" />
        <span className="navbar__logo-name">Maradho</span>
      </div>
      <div className="navbar__link-box" dropdownOpen={dropdownOpen}>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#"
          onClick={navigateHandler}
        >
          Home
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#service"
          onClick={navigateHandler}
        >
          Services
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#portfolio"
          onClick={navigateHandler}
        >
          Portfolio
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#testimonial"
          onClick={navigateHandler}
        >
          Testimonials
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#contact"
          onClick={navigateHandler}
        >
          Contact
        </a>
      </div>

      {!dropdownOpen && (
        <FcMenu
          className="icon__menu"
          size="2.5em"
          onClick={dropdownToggleHandler}
        />
      )}
      {dropdownOpen && (
        <AiOutlineClose
          className="icon__close"
          size="2.5em"
          onClick={dropdownToggleHandler}
        />
      )}

      <div className="navbar__dropdown-menu" dropdownOpen={dropdownOpen} />
    </div>
  );
}

export default Navbar;
