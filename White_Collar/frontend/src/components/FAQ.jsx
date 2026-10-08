import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I apply for a job?",
      answer:
        "You can explore our open positions, select the role that matches your profile and click on View Job Description. From the job description page, click Apply for this Position and submit your application.",
    },
    {
      question: "Can freshers apply for the available positions?",
      answer:
        "Yes. Freshers can apply for suitable positions where the job requirements allow it. Please review the individual job description for specific qualification and experience requirements.",
    },
    {
      question: "Can I apply for more than one position?",
      answer:
        "Yes. If you believe your skills are suitable for multiple roles, you can submit an application for each relevant position.",
    },
    {
      question: "What documents should I keep ready?",
      answer:
        "Please keep an updated resume in PDF format ready while applying. Additional documents may be requested during the selection or joining process.",
    },
    {
      question: "How will I know if my application is shortlisted?",
      answer:
        "Our recruitment team will review submitted applications. If your profile matches the requirements of the position, our team will contact you using the phone number or email address provided in your application.",
    },
    {
      question: "Can I submit my resume if I don't see a suitable opening?",
      answer:
        "Yes. You can use the general application option to submit your resume. We can consider your profile for suitable future opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">

        <div className="faq-grid">

          {/* LEFT SIDE */}

          <div className="faq-intro">

            <div className="section-label">
              FAQ
            </div>

            <h2>
              Have questions?
              <br />
              <span>We can help.</span>
            </h2>

            <p>
              Here are some common questions candidates may have
              before applying for an opportunity with The Fire Wala.
            </p>

          </div>


          {/* RIGHT SIDE */}

          <div className="faq-list">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  key={index}
                >

                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-icon">
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>
                  </button>


                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;