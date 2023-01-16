import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media ${device.laptop} {
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
  @media ${device.mobileS} {
    height: 70px;
  }
  @media ${device.laptop} {
    width: 125px;
    height: 96px;
  }

  filter: grayscale();
  opacity: 50%;
`;

const LogoLTS = styled.img`
  @media ${device.mobileS} {
    height: 85px;
  }
  @media ${device.laptop} {
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
        <LogoBT
          src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Flogo-bluder-tunjungan.png?alt=media&token=6d074bee-7cf9-46d4-b134-b3c4fdc9725c"
          alt="Logo Bluder Tunjungan"
        />
        <LogoLTS
          src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Flogo-lapis-tugu.png?alt=media&token=60ea2570-c1b2-4023-ba4d-18dc0ca10e2f"
          alt="Logo Lapis Tugu Surabaya"
        />
      </LogoBox>
    </Container>
  );
}

export default Client;
