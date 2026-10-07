function HiringForm() {
  return (
    <section className="hiring-form-section">
      <div className="container">
        <div className="section-heading">
          <span>JOIN OUR TEAM</span>
          <h2>Apply for a Position</h2>
          <p>
            Fill out the application form below and our recruitment
            team will get back to you.
          </p>
        </div>

        <div className="google-form-wrapper">
    
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdFJv5zC0mCHqipjzxQWNo7xv6-WuivVDoNpxlno5TIbGa_IQ/viewform?embedded=true" 
                width="640" 
                height="2384" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
                    Loading…
            </iframe>
        </div>
      </div>
    </section>
  );
}

export default HiringForm;