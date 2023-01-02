import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media ${device.mobileL} {
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

  @media ${device.mobileL} {
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
  color: gray;

  &:hover {
    opacity: 100%;
  }
`;

function Sosmed() {
  return (
    <Container>
      Check out my
      <Wrapper>
        <Link href="https://www.instagram.com/maradhopasa/" target="_blank">
          <BsInstagram size="1.5em" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tedy-maradho-pasa-220731233/"
          target="_blank"
        >
          <BsLinkedin size="1.5em" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCaWfnzdzI9T4nGRq1TR_fMg"
          target="_blank"
        >
          <BsYoutube size="2.1em" />
        </Link>
        <Link href="https://github.com/tedymaradho" target="_blank">
          <BsGithub size="1.8em" />
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Sosmed;
