import FirstPortfolio from "../assets/portfolio-1.png";
import styled from "styled-components";
import { ButtonInverse } from "../styles/Button";
import { BsArrowUpRight } from "react-icons/bs";

const Container = styled.div`
  height: 650px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 80%;

  & button {
    width: fit-content;
    border: 1px solid ${(props) => props.theme.main};
  }
`;

const Company = styled.p`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.main}; ;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const Image = styled.img`
  height: 400px;
  box-shadow: 5px 35px 32px -30px rgba(81, 115, 78, 0.9);
`;

function Portfolio() {
  return (
    <Container>
      <Left>
        <Company>Bluder Tunjungan, Surabaya, Indonesia</Company>
        <Title>
          Website
          <br />
          Design & Build
        </Title>
        <ButtonInverse>
          See this project&nbsp;
          <BsArrowUpRight />
        </ButtonInverse>
      </Left>
      <Right>
        <Image src={FirstPortfolio} alt="First Portfolio" />
      </Right>
    </Container>
  );
}

export default Portfolio;
