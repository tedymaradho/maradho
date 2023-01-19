import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="home">
      <div className="home__section--navbar">
        <div className="home__wrapper">
          <Navbar />
        </div>
      </div>
      <div className="home__section home__section--header" ref={ref}>
        <div className="home__wrapper">
          {inView === true && <Header />}
          <div className="home__shape home__shape--header"></div>
        </div>
      </div>
      <div className="home__section home__section--service" id="service">
        <div className="home__wrapper">
          <Service />
        </div>
        <div className="home__shape home__shape--service" />
      </div>
      <div className="home__section" id="portfolio">
        <div className="home__wrapper">
          <Portfolio />
        </div>
      </div>
      <div className="home__section home__section--footer" id="footer">
        <div className="home__wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
