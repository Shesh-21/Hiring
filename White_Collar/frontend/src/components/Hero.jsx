import {
  ArrowDownRight,
  ArrowRight,
  Flame,
  MoveUpRight,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="container hero-container">
        {/* Main Message */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            WELCOME TO THE FIRE WALA
          </div>

          <h1>
            WE ARE HIRING.
            <br />
            <span>Build your future with us.</span>
          </h1>

          <p className="hero-description">
            You don't need to know everything on day one.
            <b>Bring your willingness to learn, your commitment to work,</b>
            and the drive to make a difference. Let's grow & learn together.
          </p>

          <div className="hero-actions">
            <a href="#openings" className="hero-primary-button">
              Explore Opportunities
              <ArrowRight size={18} />
            </a>

            <a href="#apply" className="hero-secondary-button">
              Apply Now !!
              <MoveUpRight size={17} />
            </a>
          </div>

          <div className="hero-note">
            {/* <ArrowDownRight size={17} /> */}
            <span>Freshers and experienced candidates are welcome</span>
          </div>
        </div>

        {/* Visual Panel */}
        <div className="hero-visual">
          <div className="hero-visual-glow" />

          <div className="hero-visual-top">
            {/* <span className="hero-visual-dot" />
            <span>YOUR NEXT CHAPTER</span>
            <span className="hero-visual-number">01 / GROW</span> */}
          </div>

          <div className="hero-emblem">
           <a href="#apply">
              Apply Now
            </a>
          </div>

          <div className="hero-visual-copy">
            <span className="hero-visual-label">THE OPPORTUNITY</span>
            <h2>
              Start your
              <br />
              <span>career with us.</span>
            </h2>
            <p>
              Learn. Contribute. Take ownership. Keep moving forward.
            </p>
          </div>

          {/* <div className="hero-visual-footer">
            <span>MSD ENGINEERING</span>
            <span className="hero-footer-mark">
              <Flame size={17} />
            </span>
          </div> */}
        </div>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}

export default Hero;