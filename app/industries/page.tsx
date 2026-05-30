import Image from "next/image";
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
    image: "/images/banking.jpg",
    description:
      "Secure digital banking platforms, fraud detection, payment workflows, AI analytics, and cloud modernization.",
  },
  {
    title: "Healthcare",
    image: "/images/healthcare.jpg",
    description:
      "AI-powered healthcare platforms, patient data systems, analytics, and cloud-based healthcare solutions.",
  },
  {
    title: "Retail & E-Commerce",
    image: "/images/retail.jpg",
    description:
      "Personalized shopping experiences, recommendation engines, customer engagement, and scalable commerce platforms.",
  },
  {
    title: "Insurance",
    image: "/images/insurance.jpg",
    description:
      "Claims automation, policy workflow systems, risk analytics, and digital insurance solutions.",
  },
  {
    title: "Education",
    image: "/images/education.jpg",
    description:
      "Digital learning platforms, AI tutoring tools, student engagement systems, and cloud education solutions.",
  },
  {
    title: "Startups & SMBs",
    image: "/images/startups.jpg",
    description:
      "Fast, scalable AI, cloud, web, and automation solutions for growing businesses.",
  },
];

export const metadata = {
  title: "Industries | JAI Technologies",
  description:
    "Technology solutions for Banking, Healthcare, Retail, Insurance, Education, and Startups powered by AI and Cloud.",
};

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
      <Image
        src={industry.image}
        alt={industry.title}
        width={500}
        height={300}
      />

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