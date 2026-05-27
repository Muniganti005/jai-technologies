import {
  Brain,
  Bot,
  BarChart3,
  Workflow,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const products = [
  [
    "CogniStar AI",
    "AI-powered platform for automation, predictive insights, and intelligent workflows.",
    <Brain size={34} color="#2563eb" />,
  ],
  [
    "Enterprise AI Chatbot",
    "Conversational AI for customer support, operations, and engagement.",
    <Bot size={34} color="#2563eb" />,
  ],
  [
    "Analytics Dashboard",
    "Business intelligence dashboards with real-time insights and reporting.",
    <BarChart3 size={34} color="#2563eb" />,
  ],
  [
    "Workflow Automation",
    "Automate repetitive enterprise processes with smart orchestration.",
    <Workflow size={34} color="#2563eb" />,
  ],
  [
    "Cloud Management Suite",
    "Infrastructure monitoring, deployment automation, and cloud operations.",
    <Cloud size={34} color="#2563eb" />,
  ],
  [
    "Security & Monitoring",
    "Enterprise-grade monitoring, logging, alerts, and operational visibility.",
    <ShieldCheck size={34} color="#2563eb" />,
  ],
];

export default function ProductsPage() {
  return (
    <main>

      <section className="about-hero">
        <div className="jai-container">
          <small>OUR PRODUCTS</small>

          <h1>
            Intelligent Platforms Built for Modern Enterprises
          </h1>

          <p>
            AI-powered products and enterprise platforms designed to help
            organizations automate, analyze, and scale efficiently.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">

          <div className="cards-grid">
            {products.map(([title, text, icon]) => (
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