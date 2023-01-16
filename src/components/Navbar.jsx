import Logo from "../assets/logo.png";
import { device } from "../styles/Device";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuIcon = styled(FcMenu)`
  padding: 7px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.main};
  border-radius: 50%;

  @media ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.laptop} {
    display: none;
  }

  &:hover {
    background-color: white;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  padding: 7px;
  background-color: white;
  color: ${(props) => props.theme.main};
  border-radius: 50%;
  z-index: 3;

  @media ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.laptop} {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.bg};
  }
`;

const DropdownMenu = styled.div`
  width: 100vw;
  height: 360px;
  z-index: 2;
  background-color: white;
  opacity: 0.98;

  @media ${device.mobileS} {
    display: inline-block;
    position: absolute;
    top: 0;
    left: ${(props) => (props.dropdownOpen ? 0 : "150%")};
  }
  @media ${device.laptop} {
    display: none;
    position: static;
    transform: none;
  }

  transition: all 0.5s;
`;

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Navigate = useNavigate();

  const navigateHandler = () => {
    Navigate("/");
    setDropdownOpen(false);
  };

  const dropdownToggleHandler = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="navigation">
      <div className="navigation__logo-box" onClick={() => Navigate("/")}>
        <img className="navigation__logo-img" src={Logo} alt="Logo Maradho" />
        <span className="navigation__logo-name">Maradho</span>
      </div>
      <div className="navigation__link-box" dropdownOpen={dropdownOpen}>
        <a
          className="btn btn__inverse btn__inverse--sm"
          href="#"
          onClick={navigateHandler}
        >
          Home
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm"
          href="#service"
          onClick={navigateHandler}
        >
          Services
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm"
          href="#portfolio"
          onClick={navigateHandler}
        >
          Portfolio
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm"
          href="#testimonial"
          onClick={navigateHandler}
        >
          Testimonials
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm"
          href="#contact"
          onClick={navigateHandler}
        >
          Contact
        </a>
      </div>

      {!dropdownOpen && (
        <MenuIcon size="2.5em" onClick={dropdownToggleHandler} />
      )}
      {dropdownOpen && (
        <CloseIcon size="2.5em" onClick={dropdownToggleHandler} />
      )}

      <DropdownMenu dropdownOpen={dropdownOpen} />
    </div>
  );
}

export default Navbar;
