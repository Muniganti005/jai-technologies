export default function CareersPage() {
  const openings = [
    "Java Full Stack Developer",
    "AI / ML Engineer",
    "Cloud DevOps Engineer",
    "Data Engineer",
    "Business Analyst",
    "Software QA Engineer",
  ];

  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CAREERS</small>
          <h1>Build the Future with JAI Technologies</h1>
          <p>
            Join a team focused on AI, cloud engineering, automation, software
            development, data solutions, and enterprise digital transformation.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>WHY JOIN US</small>
            <h2>Grow Your Career in AI, Cloud & Software Engineering</h2>
            <p>
              We work with modern technologies, enterprise clients, and
              innovative digital solutions that help businesses scale.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>Modern Technology</h3>
              <p>Work on AI, cloud, automation, DevOps, and data platforms.</p>
            </div>

            <div className="clean-card">
              <h3>Growth Culture</h3>
              <p>Learn continuously, take ownership, and grow with the team.</p>
            </div>

            <div className="clean-card">
              <h3>Enterprise Projects</h3>
              <p>Contribute to scalable technology solutions for businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OPEN POSITIONS</small>
            <h2>Current Opportunities</h2>
            <p>
              We are always looking for talented engineers, consultants, and
              technology professionals.
            </p>
          </div>

          <div className="cards-grid">
            {openings.map((role) => (
              <div className="clean-card" key={role}>
                <h3>{role}</h3>
                <p>
                  Interested candidates can share their resume with JAI
                  Technologies for future opportunities.
                </p>
                <span className="learn-more">Apply Soon →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}