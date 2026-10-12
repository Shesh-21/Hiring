
import {
  GraduationCap,
  TrendingUp,
  Lightbulb,
  Target,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Users,
  Trophy,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const fresherSteps = [
  {
    number: "01",
    title: "Learn the Ropes",
    description: "Understand your role, build practical skills and gain exposure.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Build Confidence",
    description: "Take responsibility, solve problems and turn learning into experience.",
    icon: Target,
  },
  {
    number: "03",
    title: "Grow with Purpose",
    description: "Develop your strengths and prepare for bigger challenges.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const experiencedSteps = [
  {
    number: "01",
    title: "Bring Your Expertise",
    description: "Apply your knowledge and experience to meaningful work.",
    icon: Users,
  },
  {
    number: "02",
    title: "Expand Your Impact",
    description: "Refine your skills, collaborate and tackle new challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Take the Next Step",
    description: "Explore greater responsibility and new possibilities.",
    icon: Target,
  },
];

function GrowthPath({ type, label, description, steps }) {
  const isFresher = type === "fresher-path";

  return (
    <article className={`career-path-card ${type}`}>
      <div className="career-path-top">
        <div className="career-path-icon">
          {isFresher ? (
            <GraduationCap size={31} />
          ) : (
            <ChartNoAxesColumnIncreasing size={30} />
          )}
        </div>

        <span className="career-path-tag">{label}</span>
      </div>

      <div className="career-path-title">
        <h3>
          {isFresher ? (
            <>
              Start Your Career
              <br />
              <span>with Confidence.</span>
            </>
          ) : (
            <>
              Take Your Career
              <br />
              <span>to the Next Level.</span>
            </>
          )}
        </h3>

        <p>{description}</p>
      </div>

      <div className="career-staircase">
        {/* The rising path behind the staircase */}
        <svg
          className="staircase-arrow"
          viewBox="0 0 600 210"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`${type}-arrow-gradient`} x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--path-light-line)" />
              <stop offset="100%" stopColor="var(--path-color)" />
            </linearGradient>
          </defs>

          <path
            d="M 18 188 C 155 178, 225 142, 315 110 S 465 65, 548 20"
            fill="none"
            stroke={`url(#${type}-arrow-gradient)`}
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M 527 21 L 550 18 L 544 41"
            fill="none"
            stroke="var(--path-color)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="staircase-finish">
          {/* <div className="staircase-trophy">
            <Trophy size={25} />
          </div> */}
          {/* <span>
            {isFresher
              ? "A STRONG FOUNDATION"
              : "GREATER IMPACT"}
          </span> */}
        </div>

        <div className="staircase-steps">
          {steps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <div
                className={`stair-step stair-step-${index + 1}`}
                key={step.number}
              >
                <div className="stair-step-top">
                  <span className="stair-step-number">
                    {step.number}
                  </span>

                  <StepIcon size={22} strokeWidth={2.3} />
                </div>

                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="career-path-footer">
        <div className="career-footer-message">
          {isFresher ? (
            <Sparkles size={19} />
          ) : (
            <CheckCircle2 size={19} />
          )}

          <span>
            {isFresher
              ? "Your potential is a starting point."
              : "Your experience can create new possibilities."}
          </span>
        </div>

        <a
          href="#openings"
          aria-label={`Explore opportunities for ${label.toLowerCase()}`}
        >
          <ArrowUpRight size={22} />
        </a>
      </div> */}
    </article>
  );
}

function CareersIntro() {
  return (
    <section className="careers-intro" id="career-growth">
      <div className="container career-growth-container">
        <header className="career-growth-heading">
          <div className="growth-eyebrow">
            <span />
            YOUR GROWTH JOURNEY
            <span />
          </div>

          <h2>
            Different beginnings.
            <br />
            <span className="heading-orange">A brighter future</span>{" "}
            <span className="heading-blue">together.</span>
          </h2>

          <p>
            Whether you're starting your professional journey or
            bringing years of experience, The Fire Wala gives you a
            platform to learn, contribute and grow.
          </p>
        </header>

        <div className="career-paths-grid">
          <GrowthPath
            type="fresher-path"
            label="FOR FRESHERS"
            description="You don't need to know everything on day one. Bring curiosity, commitment and a willingness to learn."
            steps={fresherSteps}
          />

          <GrowthPath
            type="experienced-path"
            label="FOR EXPERIENCED PROFESSIONALS"
            description="Bring your expertise, explore new challenges and strengthen your skills through meaningful work."
            steps={experiencedSteps}
          />
        </div>
      </div>
    </section>
  );
}

export default CareersIntro;
