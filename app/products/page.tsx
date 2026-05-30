import Image from "next/image";
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
    image: "/images/cognitip.png",
    description:
      "AI-powered guidance and recommendation assistant that helps users make faster decisions with smart tips and contextual suggestions.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniStar AI",
    href: "/products/cognistar",
    image: "/images/cognistar.png",
    description:
      "Enterprise AI intelligence platform for automation, predictive insights, workflow optimization, and decision support.",
    icon: <Brain size={42} color="#2563eb" />,
  },
  {
    title: "CogniQuotes",
    href: "/products/cogniquotes",
    image: "/images/cogniquotes.png",
    description:
      "Smart quote and proposal automation platform for generating accurate business quotes, estimates, and customer-ready documents faster.",
    icon: <BarChart3 size={42} color="#2563eb" />,
  },
  {
    title: "CogniPoc",
    href: "/products/cognipoc",
    image: "/images/cognipoc.png",
    description:
      "Rapid AI proof-of-concept builder that helps enterprises validate ideas, build demos, and test automation use cases quickly.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
  title: "Enterprise AI Chatbot",
  href: "/products/enterprise-chatbot",
    image: "/images/ai-dashboard.png",
    description:
      "Secure conversational AI assistant for customer support, lead capture, employee helpdesk, and internal business operations.",
    icon: <Bot size={42} color="#2563eb" />,
  },
  {
  title: "AI Automation Suite",
  href: "/products/ai-automation-suite",
    image: "/images/automation-flow.png",
    description:
      "End-to-end automation platform for document processing, workflow automation, reporting, alerts, and operational efficiency.",
    icon: <Workflow size={42} color="#2563eb" />,
  },
  {
  title: "Cloud Management Platform",
  href: "/products/cloud-management",
    image: "/images/cloud-infra.png",
    description:
      "Cloud monitoring, deployment automation, infrastructure visibility, cost governance, and enterprise cloud operations tools.",
    icon: <Cloud size={42} color="#2563eb" />,
  },
  {
  title: "Security & Monitoring",
  href: "/products/security-monitoring",
    image: "/images/analytics-ui.png",
    description:
      "Enterprise monitoring, alerts, logs, compliance visibility, vulnerability awareness, and operational security insights.",
    icon: <ShieldCheck size={42} color="#2563eb" />,
  },
];

export const metadata = {
  title: "Products | JAI Technologies",
  description:
    "Explore CogniTip, CogniStar AI, CogniQuotes, CogniPoc, and enterprise AI products built for modern businesses.",
};

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
      key={`${product.title}-${product.href}`}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={300}
      />

      {product.icon}

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <span className="learn-more">Learn More →</span>
    </Link>
  ))}
</div>
        </div>
      </section>

      <section className="home-section">
  <div className="jai-container">
    <div className="section-title">
      <small>WHY JAI PRODUCTS</small>

      <h2>Built for Real Business Impact</h2>

      <p>
        JAI Technologies products are designed to help organizations automate
        processes, improve decision-making, accelerate delivery, and scale with
        confidence.
      </p>
    </div>

    <div className="cards-grid">
      <div className="clean-card">
        <h3>AI-Powered Innovation</h3>
        <p>
          Use intelligent automation and AI-driven insights to solve practical
          business problems.
        </p>
      </div>

      <div className="clean-card">
        <h3>Enterprise Scalability</h3>
        <p>
          Built for growing businesses that need secure, reliable, and scalable
          digital platforms.
        </p>
      </div>

      <div className="clean-card">
        <h3>Rapid Deployment</h3>
        <p>
          Move faster from idea to implementation with reusable product
          frameworks and accelerators.
        </p>
      </div>

      <div className="clean-card">
        <h3>Secure Architecture</h3>
        <p>
          Designed with security, compliance awareness, and operational
          reliability in mind.
        </p>
      </div>

      <div className="clean-card">
        <h3>Cloud-Native Design</h3>
        <p>
          Ready for modern cloud environments, integrations, APIs, and scalable
          deployments.
        </p>
      </div>

      <div className="clean-card">
        <h3>Business Automation</h3>
        <p>
          Reduce manual work, improve team productivity, and create measurable
          operational value.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}