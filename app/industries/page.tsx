const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Secure digital banking platforms, fraud detection, payment workflows, AI analytics, and cloud modernization for financial institutions.",
  },
  {
    title: "Healthcare",
    description:
      "AI-powered healthcare platforms, secure patient data systems, operational automation, analytics, and cloud-based healthcare solutions.",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Personalized shopping experiences, recommendation engines, inventory intelligence, customer engagement, and scalable commerce platforms.",
  },
  {
    title: "Insurance",
    description:
      "Claims automation, policy workflow systems, risk analytics, AI assistants, and secure digital insurance platforms.",
  },
  {
    title: "Education",
    description:
      "Digital learning platforms, AI tutoring tools, student engagement systems, automation, and cloud-based education solutions.",
  },
  {
    title: "Startups & SMBs",
    description:
      "Fast, scalable AI, cloud, web, and automation solutions for growing businesses that need enterprise-quality technology.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="page">
      <section className="section hero-section">
        <p className="eyebrow">INDUSTRIES</p>
        <h1>AI & Cloud Solutions for Modern Industries</h1>
        <p className="section-subtitle">
          JAI Technologies helps businesses across industries modernize operations,
          automate workflows, improve customer experiences, and scale with secure
          AI-powered cloud platforms.
        </p>
      </section>

      <section className="section grid-section">
        {industries.map((industry) => (
          <div className="card" key={industry.title}>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}