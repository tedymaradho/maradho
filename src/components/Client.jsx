import LogoBluderTunjungan from "../assets/logo-bluder-tunjungan.png";
import LogoLapisTugu from "../assets/logo-lapis-tugu.png";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  @media ${device.mobileL}, ${device.mobileS} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LogoBT = styled.img`
  @media ${device.mobileL}, ${device.mobileS} {
    height: 70px;
  }
  @media ${device.tablet} {
    width: 125px;
    height: 96px;
  }

  filter: grayscale();
  opacity: 50%;
`;

const LogoLTS = styled.img`
  @media ${device.mobileL}, ${device.mobileS} {
    height: 85px;
  }
  @media ${device.tablet} {
    width: 124px;
    height: 122px;
  }

  filter: grayscale();
  opacity: 50%;
`;

function Client() {
  return (
    <Container>
      My Clients
      <LogoBox>
        <LogoBT src={LogoBluderTunjungan} alt="Logo Bluder Tunjungan" />
        <LogoLTS src={LogoLapisTugu} alt="Logo Lapis Tugu Surabaya" />
      </LogoBox>
    </Container>
  );
}

export default Client;
