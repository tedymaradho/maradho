import Logo from "../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left-box">
          <div className="footer__logo-box">
            <img className="footer__logo-img" src={Logo} alt="Logo Maradho" />
            <span className="footer__logo-name">Maradho</span>
          </div>
          <div className="heading heading__primary heading--light">
            Let’s Discuss
            <br />
            Your Project
          </div>
          <div className="footer__email">
            <AiOutlineMail size="1.5em" />
            &nbsp;maradho@gmail.com
          </div>
          <div className="footer__address">
            <CiLocationOn size="1.8em" />
            &nbsp;Sidoarjo, Indonesia
          </div>
        </div>
        <div className="footer__right-box">
          <form className="footer__form">
            <input
              className="footer__form--input"
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              required
            />
            <input
              className="footer__form--input"
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
              required
            />
            <textarea
              className="footer__form--text-area"
              placeholder="Project Details"
              id="message"
              name="message"
              required
            />
            <a className="btn btn__inverse">
              Send Message&nbsp;
              <FiSend />
            </a>
          </form>
        </div>
      </div>
      <div className="footer__wrapper">
        <p className="opacity--50">@2022 All Right Reserved</p>
        <p className="opacity--50">Designed & Built by Tedy</p>
      </div>
    </div>
  );
}

export default Footer;
