import FirstPortfolio from "../assets/portfolio-1.png";
import { ButtonInverse } from "../styles/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { device } from "../styles/Device";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 650px;

  @media ${device.mobileS} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
  @media ${device.laptop} {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 80%;

  @media ${device.mobileS} {
    align-items: center;
    text-align: center;
  }

  @media ${device.laptop} {
    align-items: start;
    text-align: left;
  }

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
  color: ${(props) => props.theme.main};

  @media ${device.mobileS} {
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    margin-bottom: 40px;
  }
`;

const ButtonLink = styled(ButtonInverse)`
  border: 1px solid ${(props) => props.theme.main}; ;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    order: -1;
    justify-content: center;
  }
  @media ${device.laptop} {
    order: 1;
    justify-content: right;
  }
`;

const Image = styled.img`
  @media ${device.mobileS} {
    height: 240px;
  }
  @media ${device.laptop} {
    height: 400px;
  }

  box-shadow: 5px 35px 32px -30px rgba(81, 115, 78, 0.9);
`;

function Portfolio() {
  const Navigate = useNavigate();

  const ToPortfolioHandler = () => Navigate("/portfolio");

  return (
    <Container>
      <Left>
        <Company>Bluder Tunjungan, Surabaya, Indonesia</Company>
        <Title>
          Website
          <br />
          Design & Build
        </Title>
        <ButtonLink as="a" href="#" onClick={ToPortfolioHandler}>
          See this project&nbsp;
          <BsArrowUpRight />
        </ButtonLink>
      </Left>
      <Right>
        <Image src={FirstPortfolio} alt="First Portfolio" />
      </Right>
    </Container>
  );
}

export default Portfolio;
