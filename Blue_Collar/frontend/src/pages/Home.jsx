import { Link } from "react-router-dom";
import { useState } from "react";
import { jobs } from "../data/jobs";


function Home() {

    const [application, setApplication] = useState({
    name: "",
    phone: "",
    email: "",
    jobRole: "",
    experience: "",
    previousCompany: "",
    resume: null,
  });

  const [formMessage, setFormMessage] = useState("");

  const handleApplicationChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setApplication({
        ...application,
        resume: files[0],
      });
    } else {
      setApplication({
        ...application,
        [name]: value,
      });
    }
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();

    if (
      application.resume &&
      application.resume.type !== "application/pdf"
    ) {
      setFormMessage("Please upload your resume in PDF format.");
      return;
    }

    if (
      application.resume &&
      application.resume.size > 5 * 1024 * 1024
    ) {
      setFormMessage("Resume size must be less than 5 MB.");
      return;
    }

    console.log("Application submitted:", application);

    setFormMessage(
      "Thank you! Your application has been submitted successfully."
    );

    setApplication({
      name: "",
      phone: "",
      email: "",
      jobRole: "",
      experience: "",
      previousCompany: "",
      resume: null,
    });

    e.target.reset();
  };

  const scrollToJobs = () => {
    document
      .getElementById("jobs")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <main>

      {/* HERO */}
<section className="hero-new">

  {/* Background overlay */}
  <div className="hero-overlay"></div>

  <div className="hero-container">

    {/*LEFT CONTENT*/}

    <div className="hero-content">

      {/* <div className="hero-badge-new">
        <span className="hero-status-dot"></span>
        
      </div> */}

      <h1 data-aos="fade-up">
         Hum Hire Kar Rahe Hain
        <br />
        <span>Humare Saath Jodein</span>
      </h1>

      <p className="hero-description">
        Hum apni growing team mein join karne ke liye skilled aur motivated logon ki talaash kar rahe hain. 
        Chahe aap ek experienced professional hon ya fresher, aapka next opportunity yahin se start ho sakta hai.
      </p>

      <div className="hero-points">

        <div data-aos="fade-left">
          <span>✓</span>
          Skilled & Experienced Team
        </div>

        <div data-aos="fade-left" data-aos-delay="300">
          <span>✓</span>
          Freshers Welcome
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <span>✓</span>
          Real Industry Experience
        </div>

      </div>

      <div className="hero-bottom-text">
        <strong>Multiple Opportunities</strong>
        <span>
          Welders · Fitters · Drivers · Supervisors · Technicians
        </span>
      </div>

    </div>

          <div className="hero-apply-cta" data-aos="fade-up" data-aos-delay="600">
            <div className="hero-apply-text">
              <strong>Ready to Join Us?</strong>
              <span>Take the first step towards your next opportunity.</span>
            </div>

            <a
              href="https://forms.gle/XCAo3TJoW5sd6a989"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-google-btn"
            >
              Abhi Apply Karein
              <span>↗</span>
            </a>
          </div>


    {/*APPLICATION FORM*/}

    

    {/* <div className="hero-form-wrapper" data-aos="fade-left" data-aos-delay="700">

      <div className="hero-form-header">

        <div>
          <h2>
            Abhi Apply Karein
          </h2>
        </div>
      </div>

     <form
        className="hero-application-form"
        onSubmit={handleApplicationSubmit}
      >
      
        <div className="form-field">

          <label htmlFor="hero-name">
            Aapka Naam (Full Name)
          </label>

          <input
            id="hero-name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={application.name}
            onChange={handleApplicationChange}
            required
          />

        </div>


        <div className="form-field">

          <label htmlFor="hero-phone">
            Aapka Phone Number
          </label>

          <input
            id="hero-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={application.phone}
            onChange={handleApplicationChange}
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

        </div>

        <div className="form-field">

          <label htmlFor="hero-job-role">
            Konse Pad par kaam karna chahte hain? (Job Role)
          </label>

          <select
            id="hero-job-role"
            name="jobRole"
            value={application.jobRole}
            onChange={handleApplicationChange}
            required
          >

            <option value="">
              Select the position you're applying for
            </option>
            <option value="Welder">
              Welder
            </option>
            <option value="Fitter">
              Fitter
            </option>
            <option value="Driver">
              Driver
            </option>
            <option value="Site Supervisor">
              Site Supervisor
            </option>
            <option value="Store In-charge">
              Store In-charge
            </option>
            <option value="Technician">
              Technician
            </option>
          </select>
        </div>
        <div className="form-two-column">
          <div className="form-field">
            <label htmlFor="hero-experience">
              Aapke paas kitna anubhav hai? (Experience)
            </label>
            <select
              id="hero-experience"
              name="experience"
              value={application.experience}
              onChange={handleApplicationChange}
              required
            >
              <option value="">
                Select
              </option>
              <option value="Fresher">
                Naya hu 
              </option>
              <option value="0-1 Years">
                0–1 saal
              </option>
              <option value="1-3 Years">
                1–3 saal
              </option>
              <option value="3-5 Years">
                3–5 saal
              </option>
              <option value="5+ Years">
                5+ saal
              </option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="hero-company">
              Pichli Company ka naam (Previous Company)
            </label>
            <input
              id="hero-company"
              type="text"
              name="previousCompany"
              placeholder="Company name"
              value={application.previousCompany}
              onChange={handleApplicationChange}
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="hero-resume">
            Resume dalein (PDF)
          </label>
          <div className="resume-upload">
            <input
              id="hero-resume"
              type="file"
              name="resume"
              accept=".pdf,application/pdf"
              onChange={handleApplicationChange}
            />
            <div className="upload-content">
              <span className="upload-icon">
                ↑
              </span>
              <div>
                <strong>
                  Upload your resume
                </strong>
                <small>
                  PDF only · Maximum 5 MB
                </small>
              </div>
            </div>
          </div>
        </div>

        {formMessage && (
          <div className="hero-form-message">
            {formMessage}
          </div>
        )}

        <button
          type="submit"
          className="hero-submit-btn"
        >
          Submit Application
          <span>→</span>
        </button>
        <p className="form-note">
          By submitting this form, you agree to be contacted
          regarding suitable job opportunities.
        </p>
      </form>
    </div> */}
  </div>
</section>



      {/* JOB OPENINGS */}

      <section
        className="section"
        id="jobs"
      >

        <div className="section-heading">

          <div className="eyebrow" data-aos="fade-up">
            Explore Our Open Positions
            
          </div>

          <h2 data-aos="fade-up">
           JOB OPPORTUNITIES
          </h2>

          <p data-aos="fade-up" data-aos-delay="100">
            Choose a role that matches your skills
            and start your journey with us.
          </p>

        </div>


        <div className="jobs-grid" >

          {jobs.map((job) => (

            <Link
              to={`/jobs/${job.id}`}
              className="job-card"
              key={job.id}
              data-aos="fade-right" data-aos-delay="200"
            >

              <img
                src={job.image}
                alt={job.title}
              />

              <div className="job-card-body">

                <h3>
                  {job.title}
                </h3>

                <p>
                  {job.short}
                </p>

                <div className="card-link">
                  View Role Details →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

          

{/*WHY JOIN US*/}

<section className="why-section" id="why">

  <div className="why-container">

    {/* LEFT SIDE */}
    <div className="why-visual">


      <h2 data-aos="fade-up" data-aos-delay="80">
        WHY 
        <span> JOIN US</span>
      </h2>

      <p className="why-intro">
        Your skills deserve the right environment to grow.
        At MSD Engineering, we bring together skilled people,
        meaningful work and opportunities to build a better career.
      </p>

      {/* Career Journey */}
      <div className="career-path">

        <div className="career-step" data-aos="fade-up" data-aos-delay="100">
          <div className="step-number">01</div>
          <div>
            <strong>Learn</strong>
            <span>Build practical skills</span>
          </div>
        </div>

        <div className="career-line"></div>

        <div className="career-step" data-aos="fade-up" data-aos-delay="300">
          <div className="step-number">02</div>
          <div>
            <strong>Grow</strong>
            <span>Take on new challenges</span>
          </div>
        </div>

        <div className="career-line"></div>

        <div className="career-step" data-aos="fade-up" data-aos-delay="500">
          <div className="step-number">03</div>
          <div>
            <strong>Lead</strong>
            <span>Make an impact</span>
          </div>
        </div>

      </div>

    </div>


    {/* RIGHT SIDE */}
<div className="why-points">
  <div className="why-points-heading">
    <span>WHAT YOU CAN EXPECT</span>
    <h3>
      A workplace where your
      <strong> skills can grow.</strong>
    </h3>
  </div>
  <div className="why-points-list">
    {/* Point 1 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="900">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Hands-on Industry Experience</h4>
        <p>
          Work on real engineering and industrial projects
          and gain practical experience that strengthens
          your professional skills.
        </p>
      </div>
    </div>
    {/* Point 2 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="1000">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Skill Development</h4>
        <p>
          Learn new techniques, improve your technical
          knowledge and continuously develop your abilities
          through practical work.
        </p>
      </div>
    </div>
    {/* Point 3 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="1100">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Career Growth Opportunities</h4>
        <p>
          Take on new responsibilities, gain experience and
          build a career with opportunities to grow within
          your role.
        </p>
      </div>
    </div>
    {/* Point 4 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="1200">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Safety-Focused Workplace</h4>
        <p>
          Be part of a work environment where safety,
          responsibility and quality are important in
          everything we do.
        </p>
      </div>
    </div>
    {/* Point 5 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="1300">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Supportive Team Environment</h4>
        <p>
          Work alongside experienced professionals in a
          team where collaboration, respect and contribution
          are valued.
        </p>
      </div>
    </div>
    {/* Point 6 */}
    <div className="why-point" data-aos="fade-left" data-aos-delay="1400">
      <div className="why-point-icon">
        ✓
      </div>
      <div>
        <h4>Opportunities for Freshers & Experienced</h4>
        <p>
          Explore suitable opportunities whether you are
          starting your career or bringing valuable industry
          experience.
        </p>
      </div>
    </div>
  </div>
</div>

  </div>

</section>



      {/* ABOUT */}

      <section
        className="section about"
        id="about"
      >

        <div>

          <div className="eyebrow">
            WHY MSD ENGINEERING
          </div>

          <h2>
            People are at the heart
            of our work.
          </h2>

          <p>
            We believe good engineering starts
            with good people. Our teams work
            together on real projects where
            safety, quality and responsibility matter.
          </p>

          <button
            className="btn btn-primary"
            onClick={scrollToJobs}
            data-aos="fade-right" data-aos-delay="200"
          >
            Find Your Role →
          </button>

        </div>


        <div className="about-box">

          <h3>
            Who can apply?
          </h3>

          <p>
            We welcome both experienced professionals
            and freshers for suitable positions.
            Each job page clearly explains the role,
            responsibilities and requirements before
            you apply.
          </p>

          <p>
            <b>
              Application:
            </b>{" "}
            Fill the online form and upload your
            latest resume in PDF format.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;