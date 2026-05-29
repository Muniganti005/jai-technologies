export default function CaseStudiesPage() {
  const studies = [
    {
      title: "AI Banking Automation Platform",
      industry: "Banking",
      description:
        "Built an AI-powered workflow automation platform that reduced manual processing time by 60% and improved operational efficiency.",
    },
    {
      title: "Healthcare Analytics Dashboard",
      industry: "Healthcare",
      description:
        "Developed a cloud-native analytics solution for healthcare providers with real-time reporting and operational insights.",
    },
    {
      title: "Retail Recommendation Engine",
      industry: "Retail",
      description:
        "Implemented AI-driven product recommendations that improved customer engagement and increased conversions.",
    },
  ];

  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CASE STUDIES</small>
          <h1>Real Solutions. Measurable Results.</h1>
          <p>
            Explore how JAI Technologies helps organizations transform operations
            using AI, cloud engineering, automation, and modern software solutions.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="cards-grid">
            {studies.map((study) => (
              <div className="clean-card" key={study.title}>
                <small>{study.industry}</small>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}