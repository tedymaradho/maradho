import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import { FaQuoteLeft } from "react-icons/fa";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  @media ${device.mobileS} {
    width: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

const Left = styled.div``;

const TitleBox = styled.div`
  height: 325px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 0 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.bg};

  @media ${device.mobileS} {
    font-size: 60px;
    line-height: 75px;
  }
  @media ${device.tablet} {
    font-size: 70px;
    line-height: 80px;
  }
`;

const BgSpan = styled.span`
  background-color: ${(props) => props.theme.main}; ;
`;

const Right = styled.div`
  display: flex;

  @media ${device.mobileS} {
    height: 325px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }

  @media ${device.tablet} {
    gap: 60px;
  }
`;

const TestiBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
    width: 80vw;
    gap: 10px;
  }

  @media ${device.tablet} {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: lightgray;

  @media ${device.mobileS} {
    size: 1em;
  }
  @media ${device.tablet} {
    size: 1.5em;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  opacity: 80%;

  @media ${device.mobileS} {
    align-items: flex-start;
    text-align: left;
    width: 100vw;
    gap: 10px;
  }
  @media ${device.tablet} {
    width: 100%;
    gap: 20px;
  }
`;

const Photo = styled.img`
  @media ${device.mobileS} {
    width: 80px;
    height: 80px;
  }
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const Text = styled.p`
  @media ${device.mobileS} {
    font-size: 12px;
    line-height: 20px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Owner = styled.span`
  color: ${(props) => props.theme.main};
  @media ${device.mobileS} {
    font-size: 9px;
  }
  @media ${device.tablet} {
    font-size: 10px;
  }
`;

function Testimoni() {
  return (
    <Container>
      <Left>
        <TitleBox>
          <Title>
            <BgSpan>What’s</BgSpan>
            <br />
            <BgSpan>my client</BgSpan>
            <br />
            <BgSpan>say</BgSpan>
          </Title>
        </TitleBox>
      </Left>
      <Right>
        <TestiBox>
          <Photo src={Person1} alt="Person Photo 1" />
          <TextBox>
            <QuoteIcon />
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
            <QuoteIcon />
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
