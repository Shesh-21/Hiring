import { useState } from "react";
import { Upload, Send } from "lucide-react";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    previousCompany: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application submitted:", formData);

    alert("Thank you! Your application has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      position: "",
      experience: "",
      previousCompany: "",
      message: "",
      resume: null,
    });
  };

  return (
    <section className="application-section" id="apply">
      <div className="container">

        <div className="application-grid">

          {/* LEFT CONTENT */}

          <div className="application-intro">

            <div className="section-label">
              Apply Now
            </div>

            <h2>
              Ready to take the
              <br />
              <span>next step?</span>
            </h2>

            <p>
              Tell us a little about yourself and the opportunity
              you're interested in. Our team will review your
              application and get in touch if your profile matches
              our requirements.
            </p>

            <div className="application-note">
              <strong>Before you apply</strong>

              <p>
                Please make sure your information is accurate and
                your resume is updated before submitting your
                application.
              </p>
            </div>

          </div>


          {/* FORM */}

          <div className="application-form-wrapper" id="apply">

            <form
              className="application-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>


              {/* PHONE + EMAIL */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              {/* POSITION */}

              <div className="form-group">
                <label htmlFor="position">
                  Applying For <span>*</span>
                </label>

                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a position
                  </option>

                  <option value="Human Resources Executive">
                    Human Resources Executive
                  </option>

                  <option value="Purchase Executive">
                    Purchase Executive
                  </option>

                  <option value="Project Executive">
                    Project Executive
                  </option>

                  <option value="Administration Executive">
                    Administration Executive
                  </option>

                  <option value="Sales Executive">
                    Sales Executive
                  </option>

                  <option value="Data Operator">
                    Data Operator
                  </option>

                  <option value="Accounts Executive">
                    Accounts Executive
                  </option>
                </select>
              </div>


              {/* EXPERIENCE */}

              <div className="form-group">
                <label>
                  Experience <span>*</span>
                </label>

                <div className="experience-options">

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="experience"
                      value="Fresher"
                      checked={
                        formData.experience === "Fresher"
                      }
                      onChange={handleChange}
                      required
                    />
                    <span>Fresher</span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="experience"
                      value="Experienced"
                      checked={
                        formData.experience === "Experienced"
                      }
                      onChange={handleChange}
                    />
                    <span>Experienced</span>
                  </label>

                </div>
              </div>


              {/* PREVIOUS COMPANY */}

              {formData.experience === "Experienced" && (
                <div className="form-group">
                  <label htmlFor="previousCompany">
                    Previous Company
                  </label>

                  <input
                    id="previousCompany"
                    name="previousCompany"
                    type="text"
                    placeholder="Enter previous company name"
                    value={formData.previousCompany}
                    onChange={handleChange}
                  />
                </div>
              )}


              {/* RESUME */}

              <div className="form-group">
                <label htmlFor="resume">
                  Resume <span>*</span>
                </label>

                <label
                  htmlFor="resume"
                  className="resume-upload"
                >
                  <Upload size={20} />

                  <div>
                    <strong>
                      {formData.resume
                        ? formData.resume.name
                        : "Upload your resume"}
                    </strong>

                    <small>
                      PDF only · Maximum 5 MB
                    </small>
                  </div>
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                  hidden
                />
              </div>


              {/* MESSAGE */}

              <div className="form-group">
                <label htmlFor="message">
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us anything else you would like us to know..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="application-submit"
              >
                Submit Application
                <Send size={17} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ApplicationForm;