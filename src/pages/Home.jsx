import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RectangleHeader from "../assets/rectangle-header.png";
import RectangleTestimoni from "../assets/rectangle-testimoni.png";
import Service from "../components/Service";
import Client from "../components/Client";
import Sosmed from "../components/Sosmed";
import Portfolio from "../components/Portfolio";
import Testimoni from "../components/Testimoni";
import Footer from "../components/Footer";
import { device } from "../styles/Device";
import styled, { css } from "styled-components";

const Container = styled.div`
  scroll-snap-type: y mandatory;

  > * {
    scroll-snap-align: start;
  }
`;

const SectionDefault = css`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 1085px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.bg};
  background-image: url(${RectangleHeader});
  background-repeat: no-repeat;
  background-size: 664px 768px;
  background-position: right;
`;

const SectionClient = styled.div`
  height: 258px;
  display: flex;
  align-items: center;
  opacity: 80%;
`;

const SectionService = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.main};
`;

const SectionProject = styled.div`
  ${SectionDefault}
`;

const SectionTestimoni = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.bg};
  background-image: url(${RectangleTestimoni});
  background-repeat: no-repeat;
  background-position: left;
  background-size: 48.61%;
  @media ${device.laptopL} {
    background-size: 60%;
  }
  @media ${device.desktop} {
    background-size: 65%;
  }
`;

const SectionSosmed = styled(SectionClient)``;

const SectionFoot = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.main};
`;

function Home() {
  return (
    <Container>
      <SectionHeader>
        <Wrapper>
          <Navbar />
          <Header />
        </Wrapper>
      </SectionHeader>
      <SectionClient>
        <Wrapper>
          <Client />
        </Wrapper>
      </SectionClient>
      <SectionService>
        <Wrapper>
          <Service />
        </Wrapper>
      </SectionService>
      <SectionProject>
        <Wrapper>
          <Portfolio />
        </Wrapper>
      </SectionProject>
      <SectionTestimoni>
        <Wrapper>
          <Testimoni />
        </Wrapper>
      </SectionTestimoni>
      <SectionSosmed>
        <Wrapper>
          <Sosmed />
        </Wrapper>
      </SectionSosmed>
      <SectionFoot>
        <Wrapper>
          <Footer />
        </Wrapper>
      </SectionFoot>
    </Container>
  );
}

export default Home;
