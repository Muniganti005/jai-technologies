import Link from "next/link";
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
    href: "/products/cognitip",
    description:
      "AI-powered guidance and recommendation assistant that helps users make faster decisions with smart tips and contextual suggestions.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniStar AI",
    href: "/products/cognistar",
    description:
      "Enterprise AI intelligence platform for automation, predictive insights, workflow optimization, and decision support.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniQuotes",
    href: "/products/cogniquotes",
    description:
      "Smart quote and proposal automation platform for generating accurate business quotes, estimates, and customer-ready documents faster.",
    icon: <BarChart3 size={42} color="#2563eb" />,
  },
  {
    title: "CogniPoc",
    href: "/products/cognipoc",
    description:
      "Rapid AI proof-of-concept builder that helps enterprises validate ideas, build demos, and test automation use cases quickly.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "Enterprise AI Chatbot",
    href: "/products",
    description:
      "Secure conversational AI assistant for customer support, lead capture, employee helpdesk, and internal business operations.",
    icon: <Bot size={42} color="#2563eb" />,
  },
  {
    title: "AI Automation Suite",
    href: "/products",
    description:
      "End-to-end automation platform for document processing, workflow automation, reporting, alerts, and operational efficiency.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
    title: "Cloud Management Platform",
    href: "/products",
    description:
      "Cloud monitoring, deployment automation, infrastructure visibility, cost governance, and enterprise cloud operations tools.",
    icon: <Cloud size={42} color="#2563eb" />,
  },
  {
    title: "Security & Monitoring",
    href: "/products",
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
              <Link
                href={product.href}
                className="clean-card product-link-card"
                key={product.title}
              >
                {product.icon}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="learn-more">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}