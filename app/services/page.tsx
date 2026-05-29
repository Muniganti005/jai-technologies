import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    image: "/images/automation-flow.png",
    description:
      "Intelligent AI solutions, automation workflows, predictive analytics, and enterprise AI systems.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-devops",
    image: "/images/cloud-infra.png",
    description:
      "Cloud migration, AWS infrastructure, scalable deployments, and cloud-native modernization.",
    icon: <Cloud size={42} color="#2563eb" />,
  },
  {
    title: "Custom Software Development",
    href: "/services",
    image: "/images/ai-dashboard.png",
    description:
      "Secure and scalable enterprise applications tailored for modern business needs.",
    icon: <Code2 size={42} color="#2563eb" />,
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    image: "/images/analytics-ui.png",
    description:
      "ETL pipelines, big data processing, analytics platforms, and business intelligence solutions.",
    icon: <Database size={42} color="#2563eb" />,
  },
  {
    title: "DevOps & Infrastructure",
    href: "/services/cloud-devops",
    image: "/images/cloud-infra.png",
    description:
      "CI/CD automation, monitoring, Kubernetes, Docker, and infrastructure optimization.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "IT Consulting",
    href: "/services",
    image: "/images/ai-dashboard.png",
    description:
      "Enterprise technology consulting, architecture planning, and digital transformation strategy.",
    icon: <ShieldCheck size={42} color="#2563eb" />,
  },
];

export const metadata = {
  title: "Services | JAI Technologies",
  description:
    "AI Automation, Cloud Solutions, Data Engineering, DevOps, IT Consulting, and Custom Software Development services.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>SERVICES</small>
          <h1>Enterprise Solutions Built for the Future</h1>
          <p>
            JAI Technologies delivers AI-powered software, cloud, automation,
            and enterprise IT solutions that help businesses innovate and scale
            confidently.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR EXPERTISE</small>
            <h2>Technology Services That Drive Growth</h2>
            <p>
              From AI automation to cloud modernization, we provide end-to-end
              technology solutions for modern enterprises.
            </p>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <Link
                href={service.href}
                className="clean-card product-link-card"
                key={service.title}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                />
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="learn-more">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}