import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  @media ${device.mobileS} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 55px;
  }
  @media ${device.laptop} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  align-items: center;
  height: 650px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.laptop} {
    text-align: left;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.main};

  @media ${device.mobileS} {
    font-size: 50px;
    line-height: 60px;
  }
  @media ${device.laptop} {
    font-size: 60px;
    line-height: 80px;
  }
`;

const TitleSpan = styled.span`
  background-color: ${(props) => props.theme.bg}; ;
`;

const Low = styled.span`
  opacity: 50%;
`;

const Desc = styled.p`
  opacity: 80%;
  line-height: 30px;
  margin-top: 20px;
`;

const Right = styled.div`
  color: white;
  line-height: 1.1;
`;

const List = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    gap: 20px;

    &:first-child {
      gap: 37px;
    }
  }
  @media ${device.laptop} {
    gap: 30px;

    &:first-child {
      gap: 47px;
    }
  }
`;

const Number = styled.h1`
  font-weight: 300;
  opacity: 10%;

  @media ${device.mobileS} {
    font-size: 79px;
  }
  @media ${device.laptop} {
    font-size: 135px;
  }
`;

const Text = styled.h1`
  opacity: 70%;
  font-weight: 300;

  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
`;

function Service() {
  return (
    <Container>
      <Left>
        <Title>
          <TitleSpan>Solving</TitleSpan>
          <br />
          <TitleSpan>
            problems&nbsp;
            <Low>by</Low>
          </TitleSpan>
          <br />
          <TitleSpan>
            <Low>the</Low>
            &nbsp; services
          </TitleSpan>
        </Title>
        <Desc>
          Provide solutions to your problems, and
          <br />
          provide support for the long term.
        </Desc>
      </Left>
      <Right>
        <List>
          <Number>1</Number>
          <Text>
            Web
            <br />
            Design
          </Text>
        </List>
        <List>
          <Number>2</Number>
          <Text>
            Web
            <br />
            Development
          </Text>
        </List>
        <List>
          <Number>3</Number>
          <Text>
            Web
            <br />
            Optimization
          </Text>
        </List>
      </Right>
    </Container>
  );
}

export default Service;
