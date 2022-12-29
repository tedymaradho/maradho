import LogoBluderTunjungan from "../assets/logo-bluder-tunjungan.png";
import LogoLapisTugu from "../assets/logo-lapis-tugu.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LogoBT = styled.img`
  width: 125px;
  height: 96px;
  filter: grayscale();
  opacity: 50%;
`;

const LogoLTS = styled.img`
  width: 124px;
  height: 122px;
  filter: grayscale();
  opacity: 50%;
`;

function Client() {
  return (
    <Container>
      My Clients
      <LogoBT src={LogoBluderTunjungan} alt="Logo Bluder Tunjungan" />
      <LogoLTS src={LogoLapisTugu} alt="Logo Lapis Tugu Surabaya" />
    </Container>
  );
}

export default Client;
