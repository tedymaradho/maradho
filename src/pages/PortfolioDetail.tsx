import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

function PortfolioDetail() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="portfolio-detail">
      <div className="portfolio-detail__section--navbar" ref={ref}>
        <div className="portfolio-detail__wrapper">
          <Navbar />
        </div>
      </div>
      <div className="portfolio-detail__section--design">
        <div className="portfolio-detail__wrapper">
          <h1 className="heading heading__primary heading--light">
            Bluder Tunjungan
          </h1>
          <p className="subtitle heading--light">
            Bluder tunjungan is a retail company that sells semi cakes. I use
            the dominant color yellow, because the branding color uses yellow,
            as requested by the owner. I slightly gradient it with a brown color
            like the color of the topping.
          </p>
          <img
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            className="portfolio-detail__img"
            src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Fdesign-1.png?alt=media&token=77c8cf4a-1101-4344-9119-aeaae480e409"
          />
        </div>
      </div>
      <div
        className="portfolio-detail__section portfolio-detail__section--foot"
        id="footer"
      >
        <div className="portfolio-detail__wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
