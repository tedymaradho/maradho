import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

function Sosmed() {
  return (
    <div className="sosmed">
      Check out my
      <div className="sosmed__wrapper">
        <a
          className="sosmed__link"
          href="https://www.instagram.com/maradhopasa/"
          target="_blank"
        >
          <BsInstagram size="2rem" />
        </a>
        <a
          className="sosmed__link"
          href="https://www.linkedin.com/in/tedy-maradho-pasa-220731233/"
          target="_blank"
        >
          <BsLinkedin size="2rem" />
        </a>
        <a
          className="sosmed__link"
          href="https://www.youtube.com/channel/UCaWfnzdzI9T4nGRq1TR_fMg"
          target="_blank"
        >
          <BsYoutube size="2.6rem" />
        </a>
        <a
          className="sosmed__link"
          href="https://github.com/tedymaradho"
          target="_blank"
        >
          <BsGithub size="2.3rem" />
        </a>
      </div>
    </div>
  );
}

export default Sosmed;
