import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/MSD_LOGO_ISO.png";  

function Navbar() {
  const navigate = useNavigate();

  const goToJobs = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("jobs")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 100);
  };

  return (
    <header className="navbar">

      <Link to="/" className="brand">

              <img
                  src={logo}
                  alt="MSD Engineering"
                  className="brand-logo"
              />

          </Link>

      <nav>

        <button onClick={goToJobs}>
          Job Openings
        </button>

        <a href="/#why">
          Why Join Us
        </a>

        <a href="/#about">
          About Us
        </a>

      </nav>

      <button
        className="btn btn-primary"
        onClick={goToJobs}
      >
        View Openings
      </button>

    </header>
  );
}

export default Navbar;