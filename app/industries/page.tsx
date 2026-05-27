export default function IndustriesPage() {
  const industries = [
    "Banking & Finance",
    "Healthcare",
    "Retail & E-Commerce",
    "Logistics",
    "Education",
    "Enterprise IT",
  ];

  return (
    <main className="home-section">
      <div className="jai-container">
        <div className="section-title">
          <small>INDUSTRIES</small>
          <h2>Solutions Built for Every Industry</h2>
          <p>
            JAI Technologies delivers AI, cloud, and software solutions for
            businesses across multiple industries.
          </p>
        </div>

        <div className="cards-grid">
          {industries.map((item) => (
            <div className="clean-card" key={item}>
              <h3>{item}</h3>
              <p>
                Intelligent technology solutions designed to improve operations,
                automation, scalability, and customer experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}