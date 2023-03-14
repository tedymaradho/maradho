import Logo from '../assets/logo.png';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FiSend } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { useState } from 'react';

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const emailCopyHandler = () => {
    navigator.clipboard.writeText('maradho@gmail.com');
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 1200);
  };

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
          <div className="footer__email" onClick={emailCopyHandler}>
            <span className="footer__email--tooltip">Click to copy</span>
            <AiOutlineMail size="1.5em" />
            &nbsp;
            {emailCopied === true ? 'Email copied ✅' : 'maradho@gmail.com'}
          </div>
          <div className="footer__address">
            <CiLocationOn size="1.8em" />
            &nbsp;Indonesia
          </div>
        </div>
        <div className="footer__right-box">
          <form className="footer__form" onSubmit={sendMessageHandler}>
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
            <button type="submit" className="btn btn__inverse">
              Send Message&nbsp;
              <FiSend />
            </button>
          </form>
        </div>
      </div>
      <div className="footer__wrapper">
        <div className="footer__sosmed--box">
          <a
            className="footer__sosmed--link opacity--50"
            href="https://www.linkedin.com/in/tedy-maradho-pasa-220731233/"
            target="_blank"
          >
            <BsLinkedin size="2.4rem" />
          </a>
          <a
            className="footer__sosmed--link opacity--50"
            href="https://github.com/tedymaradho"
            target="_blank"
          >
            <BsGithub size="2.7rem" />
          </a>
          <a
            className="footer__sosmed--link opacity--50"
            href="https://www.youtube.com/channel/UCaWfnzdzI9T4nGRq1TR_fMg"
            target="_blank"
          >
            <BsYoutube size="3rem" />
          </a>
        </div>
        <p className="footer__developer">
          Built using <FaReact className="icon__react" />
          &nbsp;
          <SiTypescript className="icon__typescript" /> by Tedy Maradho
        </p>
      </div>
    </div>
  );
}

export default Footer;
