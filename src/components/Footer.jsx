import { ButtonInverse } from "../styles/Button";
import Logo from "../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { device } from "../styles/Device";
import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.bg};
  height: 650px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  @media ${device.mobileS} {
    width: 100vh;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
  }
  justify-content: space-between;

  &:first-child {
    gap: 30px;

    @media ${device.mobileS} {
      width: 100vw;
    }
    @media ${device.tablet} {
      width: 100%;
    }
  }

  &:last-child {
    @media ${device.mobileS} {
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    @media ${device.tablet} {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    align-items: center;
    width: 100vh;
    gap: 10px;
  }
  @media ${device.tablet} {
    align-items: flex-start;
    width: 100%;
    gap: 20px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Title = styled.h1`
  @media ${device.mobileS} {
    font-size: 50px;
    line-height: 70px;
  }
  @media ${device.tablet} {
    font-size: 60px;
    line-height: 80px;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
`;

const Reserved = styled.p`
  opacity: 50%;
`;

const Right = styled.div`
  display: flex;
  @media ${device.mobileS} {
    width: 100vh;
    justify-content: center;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 550px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    width: 350px;
    gap: 10px;
  }
  @media ${device.tablet} {
    gap: 20px;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.bg};

  @media ${device.mobileS} {
    font-size: 14px;
    height: 30px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    height: 35px;
  }

  padding: 0 10px;

  border-radius: 8px;
  border: none;
  outline: none;
`;

const Area = styled.textarea`
  background-color: ${(props) => props.theme.bg};
  font-family: "Inter", sans-serif;
  border-radius: 8px;
  border: none;
  outline: none;

  @media ${device.mobileS} {
    height: 90px;
    padding: 5px;
    font-size: 14px;
  }
  @media ${device.tablet} {
    height: 180px;
    padding: 10px;
    font-size: 16px;
  }
`;

const ButtonMessage = styled(ButtonInverse)`
  width: fit-content;
  @media ${device.mobileS} {
    font-size: 12px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
    font-size: 14px;
    margin: 0;
  }
`;

const Dev = styled.p`
  opacity: 50%;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoBox>
            <LogoImage src={Logo} alt="Logo Maradho" />
            <LogoName>Maradho</LogoName>
          </LogoBox>
          <Title>
            Let’s Discuss
            <br />
            Your Project
          </Title>
          <Email>
            <AiOutlineMail size="1.5em" />
            &nbsp;maradho@gmail.com
          </Email>
          <Address>
            <CiLocationOn size="1.8em" />
            &nbsp;Sidoarjo, Indonesia
          </Address>
        </Left>
        <Right>
          <Form>
            <Input placeholder="Your Name" type="text" name="name" id="name" />
            <Input
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
            />
            <Area placeholder="Project Details" id="message" name="message" />
            <ButtonMessage>
              Send Message&nbsp;
              <FiSend />
            </ButtonMessage>
          </Form>
        </Right>
      </Wrapper>
      <Wrapper>
        <Reserved>@2022 All Right Reserved</Reserved>
        <Dev>Designed & Built by Tedy</Dev>
      </Wrapper>
    </Container>
  );
}

export default Footer;
