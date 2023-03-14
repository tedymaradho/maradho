import { FiSend } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

function Header() {
  const { ref: headerRef, inView: headerIsVisible } = useInView();

  return (
    <div className="header">
      <div className="header__left-box" ref={headerRef}>
        <h1
          className={`heading heading__primary heading--dark ${
            headerIsVisible ? 'animation--left' : ''
          }`}
        >
          <span>Tedy</span>
          <br />
          <span>Maradho&nbsp;Pasa</span>
        </h1>

        <p className={`subtitle ${headerIsVisible ? 'animation--right' : ''}`}>
          Hi, I'm a Web Developer
          <br />
          Providing web design, development, and enhancement services to create
          stunning websites.
        </p>

        <div className="header__button-box">
          <a
            className={`btn btn__primary ${
              headerIsVisible ? 'animation--bottom' : ''
            }`}
            href="#footer"
          >
            Let's Discuss&nbsp;
            <FiSend />
          </a>
        </div>
      </div>
      <div className="header__right-box"></div>
    </div>
  );
}

export default Header;
