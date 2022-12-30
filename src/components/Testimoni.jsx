import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import { FaQuoteLeft } from "react-icons/fa";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  height: 650px;

  @media ${device.mobileS} {
    width: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media ${device.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: left;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    width: 100vh;
    height: 100%;
    justify-content: center;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 100%;
  }
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobileS} {
    gap: 10px;
  }
  @media ${device.tablet} {
    gap: 50px;
  }
`;

const TestiBox = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    width: 100vw;
    flex-direction: column;
  }

  @media ${device.tablet} {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 80%;

  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 100%;
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
          <Photo src={Person1} alt="Person Photo 1" />
          <TextBox>
            <QuoteIcon size="1.5em" color="lightgray" />
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
            <QuoteIcon size="1.5em" color="lightgray" />
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
