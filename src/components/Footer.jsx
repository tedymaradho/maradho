import { ButtonInverse } from "../styles/Button";
import Logo from "../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.theme.bg};
`;

const Left = styled.div`
  height: 100vh;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  font-size: 60px;
  line-height: 80px;
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
  height: 100%;
  display: flex;
  align-items: flex-end;
  opacity: 50%;
`;

const Right = styled.div`
  height: 100vh;
  padding: 150px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & button {
    width: fit-content;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.bg};
  font-size: 16px;
  padding: 0 10px;
  height: 35px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const Area = styled.textarea`
  background-color: ${(props) => props.theme.bg};
  font-family: "Inter", sans-serif;
  padding: 10px;
  font-size: 16px;
  height: 180px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const Dev = styled.p`
  height: 100%;
  display: flex;
  align-items: flex-end;
  opacity: 50%;
`;

function Footer() {
  return (
    <Container>
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
        <Reserved>@2022 All Right Reserved</Reserved>
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
          <ButtonInverse>
            Send Message&nbsp;
            <FiSend />
          </ButtonInverse>
        </Form>
        <Dev>Designed & Built by Tedy</Dev>
      </Right>
    </Container>
  );
}

export default Footer;
