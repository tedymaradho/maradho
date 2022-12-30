import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media ${device.mobileS} {
    gap: 50px;
  }
  @media ${device.tablet} {
    gap: 25px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  opacity: 70%;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 100%;
  }
`;

function Sosmed() {
  return (
    <Container>
      Check out my
      <Wrapper>
        <Link>
          <BsInstagram size="1.5em" />
        </Link>
        <Link>
          <BsLinkedin size="1.5em" />
        </Link>
        <Link>
          <BsYoutube size="2.1em" />
        </Link>
        <Link>
          <BsGithub size="1.8em" />
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Sosmed;
