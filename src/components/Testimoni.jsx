import { FaQuoteLeft } from "react-icons/fa";

function Testimoni() {
  return (
    <div className="testimoni">
      <div className="testimoni__left-box">
        <h1 className="heading heading__primary heading--light">
          <span>What’s</span>
          <br />
          <span>my client</span>
          <br />
          <span>say</span>
        </h1>
      </div>
      <div className="testimoni__right-box">
        <div className="testimoni__list-box">
          <img
            className="testimoni__img"
            src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Fperson-1.png?alt=media&token=7c85d056-e04a-473f-bfd8-26c8878eb021"
            alt="Person Photo 1"
          />
          <div className="testimoni__item-box">
            <FaQuoteLeft className="icon__quote" />
            <p className="testimoni__text">
              Tedy is a freelancer who prioritizes client support, he provides
              support in the form of solutions and good ideas, I was greatly
              helped while being his client.
            </p>
            <span>Ahmad Dawam - Manager at Bluder Tunjungan</span>
          </div>
        </div>
        <div className="testimoni__list-box">
          <img
            className="testimoni__img"
            src="https://firebasestorage.googleapis.com/v0/b/maradho-8c79e.appspot.com/o/img%2Fperson-2.png?alt=media&token=d65bfd4d-8bf1-4eaa-81de-4eefafa52e53"
            alt="Person Photo 2"
          />
          <div className="testimoni__item-box">
            <FaQuoteLeft className="icon__quote" />
            <p className="testimoni__text">
              I've seen some of our competitor's website designs, but I think
              Tedy's design is more pleasing to the eye, more modern, simple,
              and familiar.
            </p>
            <span>Sudaryanto - Manager at Lapis Tugu Surabaya</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
