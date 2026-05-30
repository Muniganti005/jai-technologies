export default function CaseStudiesPage() {
  const studies = [
    {
      title: "AI Banking Automation Platform",
      industry: "Banking",
      challenge:
        "Manual loan and customer onboarding processes caused delays and operational overhead.",
      solution:
        "Implemented AI-powered workflow automation and document intelligence.",
      result:
        "Reduced processing time by 60% and improved operational efficiency.",
    },
    {
      title: "Healthcare Analytics Dashboard",
      industry: "Healthcare",
      challenge:
        "Healthcare teams lacked real-time visibility into operational metrics.",
      solution:
        "Built a cloud-native analytics platform with centralized reporting.",
      result:
        "Enabled real-time decision-making and improved reporting accuracy.",
    },
    {
      title: "Retail Recommendation Engine",
      industry: "Retail",
      challenge:
        "Low customer engagement and limited product discovery.",
      solution:
        "Developed an AI recommendation engine using customer behavior analytics.",
      result:
        "Increased customer engagement and improved conversion rates.",
    },
  ];

  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CASE STUDIES</small>
          <h1>Real Solutions. Measurable Results.</h1>
          <p>
            Explore how JAI Technologies helps organizations transform
            operations using AI, cloud engineering, automation, and modern
            software solutions.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>SUCCESS STORIES</small>
            <h2>How We Deliver Business Value</h2>
            <p>
              Discover how organizations leverage AI, cloud engineering,
              automation, and data solutions to achieve measurable business
              outcomes.
            </p>
          </div>

          <div className="cards-grid">
            {studies.map((study) => (
              <div className="clean-card" key={study.title}>
                <small>{study.industry}</small>
                <h3>{study.title}</h3>

                <p>
                  <strong>Challenge:</strong> {study.challenge}
                </p>

                <p>
                  <strong>Solution:</strong> {study.solution}
                </p>

                <p>
                  <strong>Results:</strong> {study.result}
                </p>

                <span className="learn-more">Read Case Study →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}