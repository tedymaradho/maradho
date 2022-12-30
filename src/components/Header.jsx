import MyPhoto from "../assets/me.png";
import { ButtonInverse, ButtonPrimary } from "../styles/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { init } from "ityped";
import { device } from "../styles/Device";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(650px - 124px);

  @media ${device.mobileS} {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.main};

  @media ${device.mobileS} {
    font-size: 50px;
  }
  @media ${device.tablet} {
    font-size: 70px;
  }
`;

const MaradhoSpan = styled.span`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${(props) => props.theme.bg};
    z-index: -1;
  }
`;

const Desc = styled.p`
  margin-bottom: 50px;
  line-height: 33px;
  opacity: 85%;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    @media ${device.mobileS} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 90%;
    }
    opacity: 0.6;
    background-color: ${(props) => props.theme.bg};
    z-index: -1;
  }
`;

const ButtonBox = styled.div`
  gap: 33px;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MyPhoto});
  background-repeat: no-repeat;
  @media ${device.mobileS} {
    background-size: 56.7%;
    background-position: center 10%;
  }
  @media ${device.tablet} {
    background-size: 529px 690px;
    background-position: -10% 10%;
  }
`;

function Header() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Web Designer", "Frontend Web Developer"],
      cursorChar: "_",
    });
  }, []);

  return (
    <Container>
      <Left>
        <Title>
          Tedy
          <br />
          <MaradhoSpan>Maradho&nbsp;Pasa</MaradhoSpan>
        </Title>
        <Desc>
          Hi, I'm a <span ref={textRef}></span>
          <br />
          Serving design and development to become a stunning website.
        </Desc>
        <ButtonBox>
          <ButtonPrimary>
            Let's Discuss&nbsp;
            <FiSend />
          </ButtonPrimary>
          <ButtonInverse>
            Portfolio&nbsp;
            <BsArrowUpRight />
          </ButtonInverse>
        </ButtonBox>
      </Left>
      <Right></Right>
    </Container>
  );
}

export default Header;
