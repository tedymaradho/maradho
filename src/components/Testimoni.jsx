import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import { FaQuoteLeft } from "react-icons/fa";
import styled from "styled-components";
import { device } from "../styles/Device";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
`;

const Left = styled.div``;

const Title = styled.h1`
  line-height: 80px;
  color: ${(props) => props.theme.bg};
  transform: translateY(-20%);

  @media ${device.tablet} {
    font-size: 50px;
  }
  @media ${device.laptop} {
    font-size: 55px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TestiBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:last-child {
    transform: translateX(-18.5%);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 80%;
`;

const Photo = styled.img``;

const Text = styled.p`
  line-height: 27px;
`;

const Owner = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.main};
`;

function Testimoni() {
  return (
    <Container>
      <Left>
        <Title>
          What’s
          <br />
          my client
          <br />
          say
        </Title>
      </Left>
      <Right>
        <TestiBox>
          <Photo src={Person1} alt="Person Photo 1" />
          <TextBox>
            <FaQuoteLeft size="1.5em" color="lightgray" />
            <Text>
              Tedy is a freelancer who prioritizes client support, he provides
              support in the form of solutions and good ideas, I was greatly
              helped while being his client.
            </Text>
            <Owner>Ahamad Dawam - Manager at Bluder Tunjungan</Owner>
          </TextBox>
        </TestiBox>
        <TestiBox>
          <Photo src={Person2} alt="Person Photo 2" />
          <TextBox>
            <FaQuoteLeft size="1.5em" color="lightgray" />
            <Text>
              I've seen some of our competitor's website designs, but I think
              Tedy's design is more pleasing to the eye, more modern, simple,
              and familiar.
            </Text>
            <Owner>Sudaryanto - Manager at Lapis Tugu Surabaya</Owner>
          </TextBox>
        </TestiBox>
      </Right>
    </Container>
  );
}

export default Testimoni;
