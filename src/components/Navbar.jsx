import Logo from "../assets/logo.png";
import { ButtonInverseSmall } from "../styles/Button";
import styled from "styled-components";

const Container = styled.div`
  height: 124px;
  display: flex;
  align-items: center;
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
  align-items: center;
  gap: 10px;
  opacity: 80%;
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
    </Container>
  );
}

export default Navbar;
