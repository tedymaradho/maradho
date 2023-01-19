import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const Navigate = useNavigate();

  const toPortfolioHandler = () => Navigate("/portfolio");

  return (
    <div className="portfolio">
      <div className="portfolio__left-box">
        <p className="subtitle">Bluder Tunjungan, Surabaya, Indonesia</p>
        <h1 className="heading heading__secondary heading--dark">
          Website
          <br />
          Design & Build
        </h1>
        <a className="btn btn__inverse" href="#" onClick={toPortfolioHandler}>
          See this project&nbsp;
          <BsArrowUpRight />
        </a>
      </div>
      <div className="portfolio__right-box">
        <img
          className="portfolio__img"
          src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Fportfolio-1.png?alt=media&token=e76746ee-d87a-4bb9-b500-ff7665e5dbcc"
          alt="First Portfolio"
        />
      </div>
    </div>
  );
}

export default Portfolio;
