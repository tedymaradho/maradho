import { useInView } from 'react-intersection-observer';

function Service() {
  const { ref: serviceRef, inView: serviceIsVisible } = useInView();

  return (
    <div className="service">
      <div className="service__left-box" ref={serviceRef}>
        <h1
          className={`heading heading__primary heading--dark ${
            serviceIsVisible ? 'animation--left' : ''
          }`}
        >
          Solving
          <br />
          problems&nbsp;
          <span className="heading--weak">by</span>
          <br />
          <span className="heading--weak">the</span>
          &nbsp;services
        </h1>

        <p className={`subtitle ${serviceIsVisible ? 'animation--left' : ''}`}>
          Provide solutions to your problems, and
          <br />
          provide support for the long term.
        </p>
      </div>
      <div className="service__right-box">
        <div>
          <div
            className={`service__list-box ${
              serviceIsVisible ? 'animation--right' : ''
            }`}
          >
            <h1 className="service__number">1</h1>
            <h2 className="service__text">
              <span>Web</span>
              <br />
              <span>Design</span>
            </h2>
          </div>

          <div
            className={`service__list-box ${
              serviceIsVisible
                ? 'animation--right animation__duration--midlow'
                : ''
            }`}
          >
            <h1 className="service__number">2</h1>
            <h2 className="service__text">
              <span>Web</span>
              <br />
              <span>Development</span>
            </h2>
          </div>

          <div
            className={`service__list-box ${
              serviceIsVisible
                ? 'animation--right animation__duration--low'
                : ''
            }`}
          >
            <h1 className="service__number">3</h1>
            <h2 className="service__text">
              <span>Web</span>
              <br />
              <span>Optimization</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
