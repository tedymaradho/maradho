import Logo from "../assets/logo.png";
import { ButtonInverseSmall } from "../styles/Button";
import { device } from "../styles/Device";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 124px;
  display: flex;
  align-items: center;

  @media ${device.mobileL}, ${device.mobileS} {
    width: 100vw;
    padding: 0 10px;
  }
  @media ${device.tablet} {
    width: 100%;
    padding: 0;
  }

  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Navlink = styled.div`
  display: flex;

  @media ${device.mobileL}, ${device.mobileS} {
    flex-direction: column;
    position: absolute;
    top: ${(props) => props.dropdownOpen && "65px"};
    left: ${(props) => (props.dropdownOpen ? "50%" : "150%")};
    transform: translateX(-50%);
    z-index: 3;
  }
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    position: static;
    transform: none;
    opacity: 80%;
    margin-top: 0;
  }

  gap: 18px;
  transition: all 0.5s;
`;

const ButtonLink = styled(ButtonInverseSmall)`
  text-decoration: none;
  font-size: 12px;

  @media ${device.mobileL}, ${device.mobileS} {
    background-color: transparent;
    z-index: 3;
  }
  @media ${device.tablet} {
    background-color: ${(props) => props.theme.bg};
  }
`;

const MenuIcon = styled(FcMenu)`
  padding: 7px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.main};
  border-radius: 50%;

  @media ${device.mobileL}, ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.tablet} {
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

  @media ${device.mobileL}, ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.tablet} {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.bg};
  }
`;

const DropdownMenu = styled.div`
  width: 100vw;
  height: 360px;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: white;
  opacity: 0.98;

  @media ${device.mobileL}, ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Navigate = useNavigate();

  const navigateHadler = () => {
    Navigate("/");
    setDropdownOpen(false);
  };

  const dropdownToggleHandler = () => setDropdownOpen(!dropdownOpen);

  return (
    <Container>
      <LogoBox onClick={() => Navigate("/")}>
        <LogoImage src={Logo} alt="Logo Maradho" />
        <LogoName>Maradho</LogoName>
      </LogoBox>
      <Navlink dropdownOpen={dropdownOpen}>
        <ButtonLink as="a" href="#" onClick={navigateHadler}>
          Home
        </ButtonLink>
        <ButtonLink as="a" href="#service" onClick={navigateHadler}>
          Services
        </ButtonLink>
        <ButtonLink as="a" href="#portfolio" onClick={navigateHadler}>
          Portfolio
        </ButtonLink>
        <ButtonLink as="a" href="#testimonial" onClick={navigateHadler}>
          Testimonials
        </ButtonLink>
        <ButtonLink as="a" href="#contact" onClick={navigateHadler}>
          Contact
        </ButtonLink>
      </Navlink>
      <MenuIcon size="2.5em" onClick={dropdownToggleHandler} />
      {dropdownOpen && (
        <CloseIcon size="2.5em" onClick={dropdownToggleHandler} />
      )}
      {dropdownOpen && <DropdownMenu />}
    </Container>
  );
}

export default Navbar;
