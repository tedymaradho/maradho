import Logo from "../assets/logo.png";
import { ButtonInverseSmall } from "../styles/Button";
import { device } from "../styles/Device";
import { FcMenu } from "react-icons/fc";
import styled from "styled-components";

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
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 80%;
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

function Navbar() {
  return (
    <Container>
      <LogoBox>
        <LogoImage src={Logo} alt="Logo Maradho" />
        <LogoName>Maradho</LogoName>
      </LogoBox>
      <Navlink>
        <ButtonInverseSmall>Home</ButtonInverseSmall>
        <ButtonInverseSmall>Services</ButtonInverseSmall>
        <ButtonInverseSmall>Portfolio</ButtonInverseSmall>
        <ButtonInverseSmall>Testimonials</ButtonInverseSmall>
        <ButtonInverseSmall>Tools</ButtonInverseSmall>
        <ButtonInverseSmall>Contact</ButtonInverseSmall>
      </Navlink>
      <MenuIcon size="2.5em" />
    </Container>
  );
}

export default Navbar;
