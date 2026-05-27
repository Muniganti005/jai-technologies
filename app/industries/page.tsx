const resources = [
  {
    title: "Blog",
    description:
      "Latest insights on AI, cloud computing, DevOps, automation, and enterprise software trends.",
  },
  {
    title: "Case Studies",
    description:
      "Real-world transformation stories showcasing measurable business impact and innovation.",
  },
  {
    title: "Whitepapers",
    description:
      "Technical research, architecture guides, and enterprise modernization strategies.",
  },
  {
    title: "FAQs",
    description:
      "Answers to common questions about our services, technologies, support, and delivery model.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>RESOURCES</small>

          <h1>Insights & Resources</h1>

          <p>
            Explore expert content, practical guides, case studies, and
            technology resources from JAI Technologies.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="cards-grid">
            {resources.map((item) => (
              <div className="clean-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}