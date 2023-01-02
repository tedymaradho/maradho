import { useNavigate } from "react-router-dom";
import { ButtonInverse, ButtonInverseSmall } from "../styles/Button";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
`;

const ButtonBack = styled(ButtonInverse)`
  width: fit-content;
  height: fit-content;
  justify-self: center;
`;

function NotFound() {
  const Navigate = useNavigate();

  const backToHomeHandler = () => Navigate("/");

  return (
    <Container>
      <Title>Page Not Found</Title>
      <Desc>Sorry, this website is currently under development. 🙏</Desc>
      <ButtonBack onClick={backToHomeHandler}>Back to home</ButtonBack>
    </Container>
  );
}

export default NotFound;
