import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  ShieldCheck,
  GraduationCap,
  Rocket,
} from "lucide-react";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Secure digital banking platforms, fraud detection, payment workflows, AI analytics, and cloud modernization for financial institutions.",
    icon: <Landmark size={42} color="#2563eb" />,
  },
  {
    title: "Healthcare",
    description:
      "AI-powered healthcare platforms, patient data systems, operational automation, analytics, and cloud-based healthcare solutions.",
    icon: <HeartPulse size={42} color="#2563eb" />,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Personalized shopping experiences, recommendation engines, inventory intelligence, customer engagement, and scalable commerce platforms.",
    icon: <ShoppingCart size={42} color="#2563eb" />,
  },
  {
    title: "Insurance",
    description:
      "Claims automation, policy workflow systems, risk analytics, AI assistants, and secure digital insurance platforms.",
    icon: <ShieldCheck size={42} color="#2563eb" />,
  },
  {
    title: "Education",
    description:
      "Digital learning platforms, AI tutoring tools, student engagement systems, automation, and cloud-based education solutions.",
    icon: <GraduationCap size={42} color="#2563eb" />,
  },
  {
    title: "Startups & SMBs",
    description:
      "Fast, scalable AI, cloud, web, and automation solutions for growing businesses that need enterprise-quality technology.",
    icon: <Rocket size={42} color="#2563eb" />,
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>INDUSTRIES</small>
          <h1>AI & Cloud Solutions for Modern Industries</h1>
          <p>
            JAI Technologies helps organizations transform operations, automate
            processes, modernize infrastructure, and accelerate growth through
            AI, cloud, automation, and data-driven innovation.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>INDUSTRIES WE SERVE</small>
            <h2>Technology Solutions Tailored For Every Industry</h2>
            <p>
              We deliver enterprise-grade AI, cloud, automation, analytics, and
              software solutions across multiple industries.
            </p>
          </div>

          <div className="cards-grid">
            {industries.map((industry) => (
              <div className="clean-card" key={industry.title}>
                {industry.icon}
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <span className="learn-more">Learn More →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}