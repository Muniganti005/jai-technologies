import {
  Brain,
  Bot,
  BarChart3,
  Workflow,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const products = [
  {
    title: "CogniStar AI",
    description:
      "AI-powered intelligence platform for automation, predictive insights, and decision support.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "Enterprise AI Chatbot",
    description:
      "Conversational AI assistant for customer support, lead capture, and internal operations.",
    icon: <Bot size={42} color="#2563eb" />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time dashboards for business intelligence, reporting, and operational visibility.",
    icon: <BarChart3 size={42} color="#2563eb" />,
  },
  {
    title: "Workflow Automation Suite",
    description:
      "Smart automation platform for reducing manual tasks and improving process efficiency.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "Cloud Management Platform",
    description:
      "Cloud monitoring, deployment automation, infrastructure visibility, and governance tools.",
    icon: <Cloud size={42} color="#2563eb" />,
  },
  {
    title: "Security & Monitoring",
    description:
      "Enterprise monitoring, alerts, logs, compliance visibility, and operational security.",
    icon: <ShieldCheck size={42} color="#2563eb" />,
  },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>PRODUCTS</small>

          <h1>AI-Powered Products for Modern Enterprises</h1>

          <p>
            Explore intelligent platforms and digital products designed to help
            organizations automate, analyze, monitor, and scale faster.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR PRODUCTS</small>

            <h2>Innovative Platforms Built for Tomorrow</h2>

            <p>
              Our product ecosystem brings together AI, analytics, cloud
              management, automation, and security for enterprise growth.
            </p>
          </div>

          <div className="cards-grid">
            {products.map((product) => (
              <div className="clean-card" key={product.title}>
                {product.icon}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}