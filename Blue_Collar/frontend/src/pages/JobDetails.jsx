import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { jobs } from "../data/jobs";

function JobDetails() {

  const { jobId } = useParams();

  const job = jobs.find(
    (item) => item.id === jobId
  );

  const [submitted, setSubmitted] = useState(false);


  if (!job) {

    return (
      <section className="job-detail">

        <h2>
          Job not found
        </h2>

        <Link
          to="/"
          className="btn btn-primary"
        >
          Back to Careers
        </Link>

      </section>
    );
  }


  const submitApplication = (event) => {

    event.preventDefault();

    const form = event.currentTarget;

    const file =
      form.resume.files[0];


    // Check PDF

    if (
      !file ||
      file.type !== "application/pdf"
    ) {

      alert(
        "Please upload a PDF resume."
      );

      return;
    }


    // Check file size

    if (
      file.size >
      5 * 1024 * 1024
    ) {

      alert(
        "Resume must be under 5 MB."
      );

      return;
    }


    setSubmitted(true);

    form.reset();
  };


  return (

    <section className="job-detail">

      {/* BREADCRUMB */}

      <div className="breadcrumb">

        <Link to="/">
          Home
        </Link>

        {" › "}

        Job Openings

        {" › "}

        <span>
          {job.title}
        </span>

      </div>


      {/* HEADER */}

      <div className="detail-header">

        <div>

          <div className="eyebrow">
            OPEN POSITION
          </div>

          <h2>
            {job.title}
          </h2>

          <p>
            <h3>
              Location- {job.Location.join("")}
            </h3>
            
          </p>


          <div className="badges">

            <span>
              On-site
            </span>

            <span>
              Full-time
            </span>

            <span>
              Freshers / Experienced
            </span>

          </div>

        </div>


        <button
          className="btn btn-primary"
          onClick={() =>
            document
              .getElementById("application")
              ?.scrollIntoView({
                behavior: "smooth"
              })
          }
        >
          Apply Now ↓
        </button>

      </div>


      {/* CONTENT + FORM */}

      <div className="detail-grid">


        {/* LEFT */}

        <div>
        
          <article className="info-card">
            <h3>
              Job Description
            </h3>
            <p>
              {job.description}
            </p>
          </article>


          <article className="info-card">
            <h3>
              Key Responsibilities
            </h3>
            <ul>
              {job.responsibilities.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </article>


          <article className="info-card">
            <h3>
              Requirements
            </h3>
            <ul>
              {job.requirements.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </article>

          <article className="info-card">
            <h3>
              Working Hours & Benefits
            </h3>
           <ul>
              {job.workingHours.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </article>

           <article className="info-card">
            <h3>
              Salary
            </h3>
           <ul>
              {job.salary.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </article>
            

        
        </div>


        {/* APPLICATION FORM */}

        <aside
          className="form-card"
          id="application"
        >

          <h3>
            Apply for this Position
          </h3>

          <p className="form-note">
            Fill in your details and upload
            your resume. Our recruitment team
            will review your application.
          </p>


          {submitted && (

            <div className="success">

              Demo submission successful.
              Connect this form to your backend
              before production.

            </div>

          )}


          <form
            onSubmit={submitApplication}
          >

            <label>
              Full Name *
            </label>

            <input
              name="name"
              required
              placeholder="Enter your full name"
            />


            <label>
              Phone Number *
            </label>

            <input
              name="phone"
              required
              type="tel"
              placeholder="Enter your phone number"
            />


            <label>
              Email Address *
            </label>

            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email address"
            />


            <label>
              Experience *
            </label>

            <select
              name="experience"
              required
              defaultValue=""
            >

              <option
                value=""
                disabled
              >
                Select experience
              </option>

              <option>
                Fresher
              </option>

              <option>
                1–2 Years
              </option>

              <option>
                3–5 Years
              </option>

              <option>
                5+ Years
              </option>

            </select>


            <label>
              Previous Company
            </label>

            <input
              name="previousCompany"
              placeholder="Enter previous company (if any)"
            />


            <label>
              Upload Resume (PDF) *
            </label>

            <input
              name="resume"
              required
              type="file"
              accept=".pdf,application/pdf"
            />

            <small className="file-note">
              PDF only • Maximum 5 MB
            </small>


            <button
              className="btn btn-primary submit-btn"
              type="submit"
            >
              Submit Application →
            </button>

          </form>

        </aside>

      </div>

    </section>
  );
}

export default JobDetails;