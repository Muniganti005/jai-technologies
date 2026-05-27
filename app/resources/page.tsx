export default function ResourcesPage() {
  const resources = ["Blog", "Case Studies", "Whitepapers", "FAQs"];

  return (
    <main className="home-section">
      <div className="jai-container">
        <div className="section-title">
          <small>RESOURCES</small>
          <h2>Insights & Resources</h2>
          <p>
            Explore articles, guides, case studies, and resources from JAI
            Technologies.
          </p>
        </div>

        <div className="cards-grid">
          {resources.map((item) => (
            <div className="clean-card" key={item}>
              <h3>{item}</h3>
              <p>
                Helpful information about AI transformation, cloud solutions,
                automation, and enterprise software delivery.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}