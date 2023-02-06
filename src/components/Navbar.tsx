import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function Navbar() {
  const Navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const navigateHandler = () => {
    (document.getElementById('navbar-toggle') as HTMLInputElement).checked =
      false;
    Navigate('/');
  };

  return (
    <div className="navbar" ref={ref}>
      <input type="checkbox" className="navbar__checkbox" id="navbar-toggle" />

      {inView === false && (
        <label htmlFor="navbar-toggle" className="navbar__button">
          <span className="navbar__icon">&nbsp;</span>
        </label>
      )}
      {inView === false && <div className="navbar__background">&nbsp;</div>}

      <div className="navbar__logo-box" onClick={() => Navigate('/')}>
        <img className="navbar__logo-img" src={Logo} alt="Logo Maradho" />
        <span className="navbar__logo-name">Maradho</span>
      </div>
      <div className="navbar__link-box">
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#"
          onClick={navigateHandler}
        >
          Home
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#portfolio"
          onClick={navigateHandler}
        >
          Portfolio
        </a>
        <a
          className="btn btn__inverse btn__inverse--sm border--no"
          href="#footer"
          onClick={navigateHandler}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
