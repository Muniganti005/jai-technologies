const resources = [
  {
    title: "Blog",
    description:
      "Read practical articles on AI automation, cloud transformation, DevOps, enterprise software, and digital innovation trends.",
  },
  {
    title: "Case Studies",
    description:
      "Explore real-world examples of how businesses improve operations, reduce manual effort, and scale with modern technology.",
  },
  {
    title: "Whitepapers",
    description:
      "Download detailed guides covering AI strategy, cloud architecture, automation frameworks, and enterprise modernization.",
  },
  {
    title: "FAQs",
    description:
      "Find answers about our services, project delivery process, chatbot solutions, support model, pricing approach, and technologies.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>RESOURCES</small>

          <h1>Insights, Guides & Knowledge Hub</h1>

          <p>
            Learn how AI, cloud, automation, DevOps, and enterprise software can
            help organizations modernize operations and grow smarter.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>KNOWLEDGE CENTER</small>
            <h2>Explore Helpful Technology Resources</h2>
            <p>
              Browse articles, case studies, whitepapers, and FAQs created to
              help business and technology leaders make better decisions.
            </p>
          </div>

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