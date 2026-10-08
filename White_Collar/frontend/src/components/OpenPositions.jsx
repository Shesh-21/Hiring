import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

function OpenPositions() {
  const positions = [
    // {
    //   department: "HR",
    //   title: "Human Resources",
    //   description:
    //     "Help build a strong workplace culture while supporting people, hiring and employee processes.",
    //   slug: "hr",
    // },
    {
      department: "PURCHASE",
      title: "Purchase",
      description:
        "Manage sourcing, vendor coordination and procurement activities that keep our operations moving.",
      slug: "purchase",
    },
    {
      department: "PROJECT",
      title: "Project",
      description:
        "Coordinate project activities, site requirements and execution to ensure smooth project delivery.",
      slug: "project",
    },
    // {
    //   department: "ADMIN",
    //   title: "Administration",
    //   description:
    //     "Support daily business operations, documentation, coordination and administrative activities.",
    //   slug: "administration",
    // },
    {
      department: "SALES",
      title: "Sales Executive",
      description:
        "Build customer relationships, identify opportunities and contribute to business growth.",
      slug: "sales",
    },
    {
      department: "DATA",
      title: "Data/Computer Operator",
      description:
        "Maintain accurate records, manage data and support teams through organised information.",
      slug: "data-operator",
    },
    {
      department: "MARKETING",
      title: "Social Media Manager",
      description:
        "Maintain accurate records, manage data and support teams through organised information.",
      slug: "sm-manager",
    },
    // {
    //   department: "ACCOUNTS",
    //   title: "Accounts",
    //   description:
    //     "Support financial operations, records, documentation and day-to-day accounting activities.",
    //   slug: "accounts",
    // },
  ];

  return (
    <section className="open-positions" id="openings">
      <div className="container">

        <div className="positions-heading">
          <div className="section-label">
            Open Positions
          </div>

          <h2>
            Find your next
            <span> opportunity.</span>
          </h2>

          <p>
            Explore our current openings and find a role where your
            skills, experience and ambition can make a real impact.
          </p>
        </div>

        <div className="positions-grid">

          {positions.map((position) => (
            <div
              className="position-card"
              key={position.department}
            >

              <div className="position-top">

                <div className="position-icon">
                  <BriefcaseBusiness size={22} />
                </div>

                <span className="position-department">
                  {position.department}
                </span>

              </div>

              <h3>{position.title}</h3>

              <p>{position.description}</p>

              <Link
                to={`/jobs/${position.slug}`}
                className="position-link"
              >
                View Job Description
                <ArrowRight size={17} />
              </Link>

            </div>
          ))}

          <div className="resume-card">

            <div className="position-icon resume-icon">
              <ArrowRight size={22} />
            </div>

            <span className="position-department">
              GENERAL APPLICATION
            </span>

            <h3>Don't see your role?</h3>

            <p>
              We're always interested in meeting talented people.
              Send us your resume and we'll keep you in mind for
              future opportunities.
            </p>

            <a href="#apply" className="position-link">
              Send Your Resume
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OpenPositions;