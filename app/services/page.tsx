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
    description:
      "Intelligent AI solutions, automation workflows, predictive analytics, and enterprise AI systems.",
    icon: <Brain size={42} color="#2563eb" />,
  },

  {
    title: "Cloud Solutions",
    description:
      "Cloud migration, AWS infrastructure, scalable deployments, and cloud-native modernization.",
    icon: <Cloud size={42} color="#2563eb" />,
  },

  {
    title: "Custom Software Development",
    description:
      "Secure and scalable enterprise applications tailored for modern business needs.",
    icon: <Code2 size={42} color="#2563eb" />,
  },

  {
    title: "Data Engineering",
    description:
      "ETL pipelines, big data processing, analytics platforms, and business intelligence solutions.",
    icon: <Database size={42} color="#2563eb" />,
  },

  {
    title: "DevOps & Infrastructure",
    description:
      "CI/CD automation, monitoring, Kubernetes, Docker, and infrastructure optimization.",
    icon: <Workflow size={42} color="#2563eb" />,
  },

  {
    title: "IT Consulting",
    description:
      "Enterprise technology consulting, architecture planning, and digital transformation strategy.",
    icon: <ShieldCheck size={42} color="#2563eb" />,
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="about-hero">
        <div className="jai-container">

          <small>SERVICES</small>

          <h1>Enterprise Solutions Built for the Future</h1>

          <p>
            JAI Technologies delivers AI-powered software, cloud,
            automation, and enterprise IT solutions that help businesses
            innovate and scale confidently.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="home-section">
        <div className="jai-container">

          <div className="section-title">

            <small>OUR EXPERTISE</small>

            <h2>Technology Services That Drive Growth</h2>

            <p>
              From AI automation to cloud modernization, we provide
              end-to-end technology solutions for modern enterprises.
            </p>

          </div>

          <div className="cards-grid">

            {services.map((service) => (
              <div className="clean-card" key={service.title}>

                {service.icon}

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}