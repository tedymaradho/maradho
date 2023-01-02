import Design1 from "../assets/design-1.png";
import Navbar from "../components/Navbar";
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
  @media ${device.laptop} {
    width: 100%;
  }

  height: 650px;
`;

const SectionNavbar = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 1px solid lightgray;
`;

const SectionDesign = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.bg}; ;
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

const Desc = styled.p`
  opacity: 80%;
  line-height: 30px;
  margin: 20px;

  @media ${device.mobileS} {
    font-size: 14px;
    width: 90%;
  }
  @media ${device.laptop} {
    font-size: 16px;
    width: 60%;
  }
`;

const ImageDesign = styled.img`
  @media ${device.mobileS} {
    height: 1000px;
  }
  @media ${device.laptop} {
    height: 3000px;
  }

  box-shadow: 0 0 20px -15px rgba(81, 115, 78, 1);
`;

const SectionFoot = styled.div`
  ${SectionDefault}
  background-color: ${(props) => props.theme.main};
`;

const HomeIcon = styled(AiFillHome)`
  position: fixed;
  bottom: 50px;
  right: 5px;
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
  right: 5px;
  z-index: 4;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
`;

function PortfolioDetail() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <Container>
      <SectionNavbar ref={ref}>
        <Wrapper>
          <Navbar />
        </Wrapper>
      </SectionNavbar>
      <SectionDesign>
        <Title>Bluder Tunjungan</Title>
        <Desc>
          Bluder tunjungan is a retail company that sells semi cakes called
          bluder, this company is located in Surabaya, Indonesia.
          <br />I use the dominant color yellow, because the branding color uses
          yellow, as requested by the owner. I slightly gradient it with a brown
          color like the color of the topping.
        </Desc>
        <ImageDesign src={Design1} />
      </SectionDesign>
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

export default PortfolioDetail;
