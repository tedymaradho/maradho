import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.main};
  font-size: 60px;
  line-height: 80px;
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
  margin-top: 35px;
`;

const Right = styled.div`
  color: white;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  &:first-child {
    gap: 47px;
  }
`;

const Number = styled.h1`
  font-size: 135px;
  font-weight: 300;
  opacity: 10%;
`;

const Text = styled.h1`
  font-size: 50px;
  opacity: 70%;
  font-weight: 300;
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
