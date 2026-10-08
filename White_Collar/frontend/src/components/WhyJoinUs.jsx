import {
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";

function WhyJoinUs() {
  const reasons = [
    {
      number: "01",
      icon: BriefcaseBusiness,
      title: "Meaningful Work",
      text: "Work on real projects and responsibilities that contribute directly to the growth of the organisation.",
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Learning & Growth",
      text: "Build your skills through practical experience, new challenges and opportunities to take on greater responsibility.",
    },
    {
      number: "03",
      icon: Users,
      title: "Collaborative Culture",
      text: "Work alongside people from different teams and contribute in an environment where collaboration matters.",
    },
    {
      number: "04",
      icon: Target,
      title: "Ownership & Impact",
      text: "Take ownership of your work, solve problems and see the direct impact of your contribution.",
    },
  ];

  return (
    <section className="why-join" id="culture">
      <div className="container">

        <div className="why-join-header">

          <div>
            <div className="section-label">
              Why Join Us
            </div>

            <h2>
              Build your career
              <br />
              <span>with purpose.</span>
            </h2>
          </div>

          <p>
            At The Fire Wala, we believe good people are the foundation
            of a growing organisation. We want our team members to
            learn, contribute and grow along with the company.
          </p>

        </div>


        <div className="why-join-list">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (
              <div
                className="why-join-item"
                key={reason.number}
              >

                <div className="why-number">
                  {reason.number}
                </div>

                <div className="why-icon">
                  <Icon size={22} />
                </div>

                <div className="why-content">
                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>

                <ArrowUpRight
                  className="why-arrow"
                  size={22}
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyJoinUs;