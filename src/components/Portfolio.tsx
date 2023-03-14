import { BsArrowUpRight } from 'react-icons/bs';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__left-box">
        <p className="portfolio__frontend">Frontend : ReactJS, Typescript</p>
        <p className="portfolio__backend">Backend : NodeJS, ExpressJS</p>
        <p className="portfolio__database">Database : Mongodb</p>
        <h1 className="heading heading__secondary heading--dark">Ecommerce</h1>
        <a
          href="http://shop.maradho.com"
          target="_blank"
          className="btn btn__inverse"
        >
          Live Demo&nbsp;
          <BsArrowUpRight />
        </a>
      </div>
      <div className="portfolio__right-box">
        <img
          className="portfolio__img"
          src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Fecommerce.webp?alt=media&token=8a6daa1a-eda8-42cc-a756-99ea70168a23"
          alt="First Portfolio"
        />
      </div>
    </div>
  );
}

export default Portfolio;
