import MyPhoto from "../assets/me.png";
import { ButtonInverse, ButtonPrimary } from "../styles/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { init } from "ityped";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: calc(650px - 124px);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.main};
`;

const MaradhoSpan = styled.span`
  background-color: ${(props) => props.theme.bg};
`;

const Desc = styled.p`
  opacity: 80%;
  margin-bottom: 50px;
  line-height: 33px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 33px;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MyPhoto});
  background-repeat: no-repeat;
  background-size: 529px 690px;
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
          serving design and development to become a stunning website.
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
