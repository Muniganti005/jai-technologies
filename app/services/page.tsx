import { Brain, Cloud, Code2, Database, Workflow, ShieldCheck } from "lucide-react";

const services = [
  ["AI & Automation", "AI models, workflow automation, smart assistants, and intelligent business systems.", <Brain size={34} color="#2563eb" />],
  ["Cloud Solutions", "AWS cloud infrastructure, migration, DevOps, monitoring, and scalable deployments.", <Cloud size={34} color="#2563eb" />],
  ["Custom Software Development", "Secure, scalable, and high-performance web, mobile, and enterprise applications.", <Code2 size={34} color="#2563eb" />],
  ["Data Engineering", "ETL pipelines, dashboards, analytics, reporting, and data platform solutions.", <Database size={34} color="#2563eb" />],
  ["DevOps & Infrastructure", "CI/CD, automation, monitoring, containerization, and cloud-native operations.", <Workflow size={34} color="#2563eb" />],
  ["IT Consulting", "Technology strategy, architecture guidance, modernization, and delivery support.", <ShieldCheck size={34} color="#2563eb" />],
];

export default function ServicesPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>OUR SERVICES</small>
          <h1>End-to-End Technology Solutions</h1>
          <p>
            AI, cloud, software, data, DevOps, and enterprise support services
            designed to help businesses innovate and scale.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="cards-grid">
            {services.map(([title, text, icon]) => (
              <div className="clean-card" key={title as string}>
                {icon}
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}