import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function JobDetails() {
  const { slug } = useParams();

  const jobs = {
    hr: {
      department: "HR",
      title: "Human Resources Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for a motivated Human Resources professional who can support recruitment, employee coordination, documentation and day-to-day HR operations. The ideal candidate should have good communication skills, a positive attitude and the ability to work effectively with different teams.",

      responsibilities: [
        "Manage the recruitment and hiring process.",
        "Coordinate interviews and communicate with candidates.",
        "Maintain employee records and HR documentation.",
        "Support onboarding and joining formalities.",
        "Coordinate attendance, leave and employee-related activities.",
        "Assist management with HR reports and internal communication.",
      ],

      skills: [
        "Good communication and interpersonal skills",
        "Basic knowledge of HR processes",
        "MS Office / Google Workspace",
        "Good organisational skills",
        "Ability to maintain confidentiality",
      ],

      qualification:
        "Bachelor's degree in Human Resources, Business Administration or a related field.",

      experience:
        "Freshers and experienced candidates can apply.",
    },

    purchase: {
      department: "PURCHASE",
      title: "Purchase Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for a Purchase Executive who can manage procurement activities, coordinate with suppliers and ensure timely availability of required materials. The candidate should be organised, detail-oriented and capable of maintaining good vendor relationships.",

      responsibilities: [
        "Identify and coordinate with suppliers and vendors.",
        "Prepare and compare quotations from vendors.",
        "Create and maintain purchase-related documentation.",
        "Coordinate material requirements with internal departments.",
        "Follow up on purchase orders and material deliveries.",
        "Maintain vendor records and procurement reports.",
      ],

      skills: [
        "Vendor coordination",
        "Good negotiation skills",
        "MS Excel and documentation",
        "Good communication skills",
        "Attention to detail",
      ],

      qualification:
        "Bachelor's degree in Business Administration, Commerce or a related field.",

      experience:
        "Freshers with good communication skills and experienced candidates can apply.",
    },

    project: {
      department: "PROJECT",
      title: "Project Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for a Project professional to support project planning, coordination and execution. The candidate will work closely with internal teams, clients and site personnel to ensure projects progress smoothly and are completed on time.",

      responsibilities: [
        "Coordinate project activities and schedules.",
        "Communicate with project teams and site personnel.",
        "Track project progress and prepare regular updates.",
        "Coordinate material and manpower requirements.",
        "Maintain project documentation and reports.",
        "Support management in monitoring project timelines.",
      ],

      skills: [
        "Project coordination",
        "Good communication skills",
        "Planning and organisational ability",
        "MS Excel and documentation",
        "Problem-solving skills",
      ],

      qualification:
        "Bachelor's degree or diploma in a relevant field.",

      experience:
        "Freshers and candidates with relevant project experience can apply.",
    },

    administration: {
      department: "ADMIN",
      title: "Administration Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for an organised Administration Executive to support daily office operations, documentation and coordination activities. The candidate should be responsible, organised and comfortable working with different departments.",

      responsibilities: [
        "Manage day-to-day administrative activities.",
        "Maintain office records and documentation.",
        "Coordinate with internal departments.",
        "Handle correspondence and administrative communication.",
        "Support meetings and internal coordination.",
        "Maintain required reports and records.",
      ],

      skills: [
        "Good organisational skills",
        "MS Office / Google Workspace",
        "Communication skills",
        "Documentation management",
        "Time management",
      ],

      qualification:
        "Bachelor's degree in Business Administration or a related field.",

      experience:
        "Freshers and experienced candidates can apply.",
    },

    sales: {
      department: "SALES",
      title: "Sales Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for an enthusiastic Sales Executive who can build strong customer relationships, identify business opportunities and contribute to company growth. The candidate should be confident, communicative and target-oriented.",

      responsibilities: [
        "Identify and develop new business opportunities.",
        "Communicate with prospective and existing customers.",
        "Understand customer requirements and provide suitable solutions.",
        "Prepare quotations and coordinate with internal teams.",
        "Maintain customer and sales records.",
        "Achieve assigned sales targets.",
      ],

      skills: [
        "Excellent communication skills",
        "Customer relationship management",
        "Negotiation skills",
        "Sales and business development",
        "Confidence and positive attitude",
      ],

      qualification:
        "Bachelor's degree in Business Administration, Marketing or a related field.",

      experience:
        "Freshers and experienced candidates can apply.",
    },

    "data-operator": {
      department: "DATA",
      title: "Data Operator",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for a detail-oriented Data Operator who can maintain accurate records, enter information efficiently and support different departments with organised data management.",

      responsibilities: [
        "Enter and update data accurately.",
        "Maintain digital and physical records.",
        "Verify data for accuracy and completeness.",
        "Prepare basic reports and spreadsheets.",
        "Organise documents and information.",
        "Coordinate with departments regarding data requirements.",
      ],

      skills: [
        "Good typing and data entry skills",
        "MS Excel and Google Sheets",
        "Attention to detail",
        "Basic computer knowledge",
        "Good organisational skills",
      ],

      qualification:
        "Bachelor's degree or equivalent qualification.",

      experience:
        "Freshers can apply. Previous data entry experience will be an advantage.",
    },

    accounts: {
      department: "ACCOUNTS",
      title: "Accounts Executive",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for an Accounts professional to support day-to-day accounting activities, documentation and financial record maintenance. The candidate should have good attention to detail and basic knowledge of accounting processes.",

      responsibilities: [
        "Maintain accounting records and documentation.",
        "Assist with invoices, bills and payment records.",
        "Support day-to-day accounting activities.",
        "Maintain financial documents and reports.",
        "Coordinate with internal departments regarding accounts-related requirements.",
        "Assist senior team members with accounting tasks.",
      ],

      skills: [
        "Basic accounting knowledge",
        "MS Excel",
        "Good numerical ability",
        "Attention to detail",
        "Knowledge of accounting software is an advantage",
      ],

      qualification:
        "Bachelor's degree in Commerce, Accounting or a related field.",

      experience:
        "Freshers and experienced candidates can apply.",
    },

     "sm-manager": {
      department: "MARKETING",
      title: "Social Media Manager",
      location: "Raipur",
      employment: "Full Time",

      description:
        "We are looking for an Accounts professional to support day-to-day accounting activities, documentation and financial record maintenance. The candidate should have good attention to detail and basic knowledge of accounting processes.",

      responsibilities: [
        "Maintain accounting records and documentation.",
        "Assist with invoices, bills and payment records.",
        "Support day-to-day accounting activities.",
        "Maintain financial documents and reports.",
        "Coordinate with internal departments regarding accounts-related requirements.",
        "Assist senior team members with accounting tasks.",
      ],

      skills: [
        "Basic accounting knowledge",
        "MS Excel",
        "Good numerical ability",
        "Attention to detail",
        "Knowledge of accounting software is an advantage",
      ],

      qualification:
        "Bachelor's degree in Commerce, Accounting or a related field.",

      experience:
        "Freshers and experienced candidates can apply.",
    },
  };

  const job = jobs[slug];

  // If someone enters an invalid job URL
  if (!job) {
    return (
      <section className="job-not-found">
        <div className="container">
          <h1>Job Not Found</h1>

          <p>
            The job description you are looking for does not exist
            or may no longer be available.
          </p>

          <Link to="/" className="job-back-button">
            <ArrowLeft size={18} />
            Back to Careers
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="job-details-page">

      {/* HERO */}

      <section className="job-details-hero">
        <div className="container">

          <Link to="/#openings" className="back-link">
            <ArrowLeft size={17} />
            Back to Open Positions
          </Link>

          <div className="job-hero-content">

            <span className="job-department">
              {job.department}
            </span>

            <h1>{job.title}</h1>

            <div className="job-meta">
              <span>{job.location}</span>
              <span>{job.employment}</span>
            </div>

          </div>

        </div>
      </section>


      {/* CONTENT */}

      <section className="job-content-section">
        <div className="container job-content-grid">

          {/* LEFT SIDE */}

          <div className="job-main-content">

            <section className="job-section">
              <h2>Job Description</h2>

              <p>{job.description}</p>
            </section>


            <section className="job-section">
              <h2>Key Responsibilities</h2>

              <ul className="job-list">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={19} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>


            <section className="job-section">
              <h2>Required Skills</h2>

              <ul className="job-list">
                {job.skills.map((skill, index) => (
                  <li key={index}>
                    <CheckCircle2 size={19} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>


            <section className="job-section">
              <h2>Qualification</h2>

              <p>{job.qualification}</p>
            </section>


            <section className="job-section">
              <h2>Experience</h2>

              <p>{job.experience}</p>
            </section>

          </div>


          {/* RIGHT SIDE */}

          <aside className="job-apply-card">

            <span>INTERESTED IN THIS ROLE?</span>

            <h3>
              Ready to join
              <br />
              our team?
            </h3>

            <p>
              Apply for this position and take the next step
              in your career with The Fire Wala.
            </p>

            <Link
              to={`/apply/${job.slug}`}
              className="job-apply-button"
            >
              Apply for this Position
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/#openings"
              className="job-view-all"
            >
              View all openings
            </Link>

          </aside>

        </div>
      </section>

    </main>
  );
}

export default JobDetails;