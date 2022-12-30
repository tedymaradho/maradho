import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import { FaQuoteLeft } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  height: 650px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const Left = styled.div``;

const Title = styled.h1`
  line-height: 80px;
  color: ${(props) => props.theme.bg};
  font-size: 70px;
`;

const BgSpan = styled.span`
  background-color: ${(props) => props.theme.main}; ;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TestiBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 80%;
`;

const Photo = styled.img``;

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
`;

const Owner = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.main};
`;

function Testimoni() {
  return (
    <Container>
      <Left>
        <Title>
          <BgSpan>What’s</BgSpan>
          <br />
          <BgSpan>my client</BgSpan>
          <br />
          <BgSpan>say</BgSpan>
        </Title>
      </Left>
      <Right>
        <TestiBox>
          <Photo
            src={Person1}
            alt="Person Photo 1"
            width="150px"
            height="150px"
          />
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
          <Photo
            src={Person2}
            alt="Person Photo 2"
            width="150px"
            height="150px"
          />
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
