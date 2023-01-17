function Service() {
  return (
    <div className="service">
      <div className="service__left-box">
        <h1 className="heading heading__primary heading--dark">
          Solving
          <br />
          problems&nbsp;
          <span className="heading--weak">by</span>
          <br />
          <span className="heading--weak">the</span>
          &nbsp;services
        </h1>
        <p className="subtitle">
          Provide solutions to your problems, and
          <br />
          provide support for the long term.
        </p>
      </div>
      <div className="service__right-box">
        <div className="service__list-box">
          <h1 className="service__number">1</h1>
          <h2 className="service__text">
            Web
            <br />
            Design
          </h2>
        </div>
        <div className="service__list-box">
          <h1 className="service__number">2</h1>
          <h2 className="service__text">
            Web
            <br />
            Development
          </h2>
        </div>
        <div className="service__list-box">
          <h1 className="service__number">3</h1>
          <h2 className="service__text">
            Web
            <br />
            Optimization
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Service;
