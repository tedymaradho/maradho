import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Client from "../components/Client";
import Sosmed from "../components/Sosmed";
import Portfolio from "../components/Portfolio";
import Testimoni from "../components/Testimoni";
import Footer from "../components/Footer";
import { device } from "../styles/Device";
import { AiFillHome } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(81, 115, 78, 0.9);

  > * {
    background-color: white;
  }
`;

const Wrapper = styled.div`
  width: 1085px;
  margin: 0 auto;
`;

const SectionDefault = css`
  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 100%;
  }

  height: 650px;
`;

const SectionHeader = styled.div`
  ${SectionDefault}
  position: relative;
  background-color: transparent;
`;

const HeaderShape = styled.div`
  width: 85%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media ${device.mobileS} {
    clip-path: polygon(81.75% 57.3%, 100% 57.3%, 100% 100%, 9.25% 100%);
  }
  @media ${device.tablet} {
    clip-path: polygon(71% 0%, 100% 0%, 100% 100%, 45.25% 100%);
  }

  background-color: #51734e;
`;

const SectionClient = styled.div`
  height: 258px;
  display: flex;
  align-items: center;
  opacity: 80%;
`;

const SectionService = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.bg};
  position: relative;
  z-index: -1;
`;

const ServiceShape = styled.div`
  height: 100%;
  position: absolute;

  right: 0;
  z-index: -2;
  background-color: #51734e;

  @media ${device.mobileS} {
    width: 100%;
    top: 50%;
  }
  @media ${device.tablet} {
    width: 55%;
    top: 0;
  }
`;

const SectionPortfolio = styled.div`
  ${SectionDefault}
`;

const SectionTestimoni = styled.div`
  ${SectionDefault}
  background-color: transparent;
  position: relative;
  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TestiShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: #51734e;

  @media ${device.mobileS} {
    width: 100%;
    height: 45%;
  }
  @media ${device.tablet} {
    width: 45%;
    height: 100%;
  }
`;

const SectionSosmed = styled(SectionClient)``;

const SectionFoot = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.main};
`;

const HomeIcon = styled(AiFillHome)`
  position: fixed;
  bottom: 50px;
  @media ${device.mobileS} {
    right: 5px;
  }
  @media ${device.tablet} {
    right: 10px;
  }
  cursor: pointer;
  color: ${(props) => props.theme.main};
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 20px -15px rgba(81, 115, 78, 1);
  opacity: 0.7;
`;

const HomeLink = styled.a`
  content: "";
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 50px;
  @media ${device.mobileS} {
    right: 5px;
  }
  @media ${device.tablet} {
    right: 10px;
  }
  z-index: 4;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
`;

function Home() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <SectionHeader ref={ref}>
        <Wrapper>
          <Navbar />
          <Header />
          <HeaderShape />
        </Wrapper>
      </SectionHeader>
      <SectionClient>
        <Wrapper>
          <Client />
        </Wrapper>
      </SectionClient>
      <SectionService id="service">
        <Wrapper>
          <Service />
        </Wrapper>
        <ServiceShape />
      </SectionService>
      <SectionPortfolio id="portfolio">
        <Wrapper>
          <Portfolio />
        </Wrapper>
      </SectionPortfolio>
      <SectionTestimoni id="testimonial">
        <Wrapper>
          <Testimoni />
        </Wrapper>
        <TestiShape />
      </SectionTestimoni>
      <SectionSosmed id="contact">
        <Wrapper>
          <Sosmed />
        </Wrapper>
      </SectionSosmed>
      <SectionFoot id="footer">
        <Wrapper>
          <Footer />
        </Wrapper>
      </SectionFoot>
      {inView === false && <HomeIcon size="2.5em" />}
      {inView === false && <HomeLink href="#" />}
    </Container>
  );
}

export default Home;
