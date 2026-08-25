export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-row">
        <div className="hero-text">
          <p className="eyebrow">At Amazon since 2018</p>
          <h1>
            I like understanding how complex systems work, and building them
            myself.
          </h1>
          <p className="hero-lede">
            Since 2018 I've moved through Amazon's technology stack: customer
            experience, analytics, machine learning, experimentation, and
            product. Along the way I've shipped front-end experiments to 25
            countries, debugged production issues, and made data-driven
            launch decisions. Now I'm going deeper: learning to build the
            software myself.
          </p>
          <div className="hero-links">
            <a href="mailto:yahyagahbiche@gmail.com" className="btn">
              Say hello
            </a>
            <a
              href="https://www.linkedin.com/in/yahyagahbiche"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
          </div>
          <a href="#journey" className="hero-scroll">
            See how I got here ↓
          </a>
        </div>
        <div className="hero-portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/yahya-portrait.jpeg`}
            alt="Portrait of Yahya Gahbiche"
          />
        </div>
      </div>
    </section>
  );
}
