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
    title: "CogniTip",
    description:
      "AI-powered guidance and recommendation assistant that helps users make faster decisions with smart tips and contextual suggestions.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniStar AI",
    description:
      "Enterprise AI intelligence platform for automation, predictive insights, workflow optimization, and decision support.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniQuotes",
    description:
      "Smart quote and proposal automation platform for generating accurate business quotes, estimates, and customer-ready documents faster.",
    icon: <BarChart3 size={42} color="#2563eb" />,
  },
  {
    title: "CogniPoc",
    description:
      "Rapid AI proof-of-concept builder that helps enterprises validate ideas, build demos, and test automation use cases quickly.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "Enterprise AI Chatbot",
    description:
      "Secure conversational AI assistant for customer support, lead capture, employee helpdesk, and internal business operations.",
    icon: <Bot size={42} color="#2563eb" />,
  },
  {
    title: "AI Automation Suite",
    description:
      "End-to-end automation platform for document processing, workflow automation, reporting, alerts, and operational efficiency.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "Cloud Management Platform",
    description:
      "Cloud monitoring, deployment automation, infrastructure visibility, cost governance, and enterprise cloud operations tools.",
    icon: <Cloud size={42} color="#2563eb" />,
  },
  {
    title: "Security & Monitoring",
    description:
      "Enterprise monitoring, alerts, logs, compliance visibility, vulnerability awareness, and operational security insights.",
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