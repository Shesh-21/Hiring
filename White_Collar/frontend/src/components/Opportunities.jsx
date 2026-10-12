
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import "./opportunities.css";

const roles = [
  { number: "01", title: "Purchase Executive" },
  { number: "02", title: "Project" },
  { number: "03", title: "Sales Executive" },
  { number: "04", title: "Data Operator" },
  { number: "05", title: "Sales coordinator" },
  { number: "06", title: "Social Media Manager" },
  {title: "And many more.." },
];

function Opportunities() {
  return (
    <section className="opportunities-section" id="opportunities">
      <div className="opportunities-container">
        <div className="opportunities-heading">
          <span className="opportunities-eyebrow">
            <BriefcaseBusiness size={17} />
            CAREER OPPORTUNITIES
          </span>

          <h2>Areas of Opportunity</h2>

          <p>
            Every great career starts with a willingness to learn,
            contribute and grow. Discover the opportunities waiting
            for passionate people at The Fire Wala.
          </p>
        </div>

        <div className="opportunities-grid">
          {roles.map((role) => (
            <div className="opportunity-card" key={role.number}>
              <span className="opportunity-number">
                {role.number}
              </span>
              <h3>{role.title}</h3>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
