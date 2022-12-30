import Logo from "../assets/logo.png";
import { ButtonInverseSmall } from "../styles/Button";
import { device } from "../styles/Device";
import { FcMenu } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 124px;
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
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

  @media ${device.mobileS} {
    flex-direction: column;
    position: absolute;
    top: ${(props) => props.dropdownOpen && "10%"};
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

  gap: 10px;
`;

const ButtonLink = styled(ButtonInverseSmall)`
  @media ${device.mobileS} {
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
  border-radius: 50%;

  @media ${device.mobileS} {
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
  border-radius: 50%;
  z-index: 3;

  @media ${device.mobileS} {
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
  height: 400px;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: white;
  opacity: 0.95;

  @media ${device.mobileS} {
    display: inline-block;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggleHandler = () => setDropdownOpen(!dropdownOpen);

  return (
    <Container>
      <LogoBox>
        <LogoImage src={Logo} alt="Logo Maradho" />
        <LogoName>Maradho</LogoName>
      </LogoBox>
      <Navlink dropdownOpen={dropdownOpen}>
        <ButtonLink>Home</ButtonLink>
        <ButtonLink>Services</ButtonLink>
        <ButtonLink>Portfolio</ButtonLink>
        <ButtonLink>Testimonials</ButtonLink>
        <ButtonLink>Tools</ButtonLink>
        <ButtonLink>Contact</ButtonLink>
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
