const openings = [
  {
    title: "AI Engineer",
    type: "Future Opportunity",
    description:
      "Build AI-powered automation, chatbots, intelligent workflows, and enterprise AI solutions.",
  },
  {
    title: "Cloud & DevOps Engineer",
    type: "Future Opportunity",
    description:
      "Work on AWS cloud infrastructure, CI/CD pipelines, monitoring, Docker, Kubernetes, and automation.",
  },
  {
    title: "Full Stack Developer",
    type: "Future Opportunity",
    description:
      "Develop modern web applications, APIs, dashboards, portals, and enterprise platforms.",
  },
  {
    title: "Application Support Engineer",
    type: "Future Opportunity",
    description:
      "Support production applications, incidents, monitoring, troubleshooting, RCA, and SLA operations.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CAREERS</small>

          <h1>Build the Future with JAI Technologies</h1>

          <p>
            Join a team focused on AI, cloud, automation, enterprise software,
            and digital transformation.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>JOIN OUR TEAM</small>

            <h2>Future Opportunities</h2>

            <p>
              We are continuously building teams across AI engineering, cloud,
              DevOps, software development, data engineering, and enterprise
              support.
            </p>
          </div>

          <div className="cards-grid">
            {openings.map((job) => (
              <div className="clean-card" key={job.title}>
                <small>{job.type}</small>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}