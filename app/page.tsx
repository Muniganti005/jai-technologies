import Hero from "../components/Hero";

import {
  Brain,
  Cloud,
  Bot,
  Database,
  BarChart3,
  ShieldCheck,
  Workflow,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    description:
      "Intelligent automation, AI models, and machine learning solutions to optimize your business.",
    icon: <Brain size={34} color="#2563eb" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, migration, DevOps, and managed cloud services.",
    icon: <Cloud size={34} color="#2563eb" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Building secure, scalable, and high-performance custom applications.",
    icon: <Code2 size={34} color="#2563eb" />,
  },
  {
    title: "Data Engineering",
    description:
      "Big data, ETL pipelines, data lakes, and analytics solutions.",
    icon: <Database size={34} color="#2563eb" />,
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "CI/CD, monitoring, infrastructure automation, and cloud-native operations.",
    icon: <Workflow size={34} color="#2563eb" />,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make smarter business decisions.",
    icon: <ShieldCheck size={34} color="#2563eb" />,
  },
];

const products = [
  {
    title: "CogniStar",
    description:
      "AI-powered platform for intelligent automation and predictive insights.",
    icon: <Brain size={34} color="#2563eb" />,
  },
  {
    title: "JAI Chatbot",
    description:
      "Smart conversational AI for customer support and engagement.",
    icon: <Bot size={34} color="#2563eb" />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics and business intelligence for enterprises.",
    icon: <BarChart3 size={34} color="#2563eb" />,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR SERVICES</small>

            <h2>End-to-End Solutions for Your Business</h2>

            <p>
              From strategy to deployment, we deliver custom solutions that
              drive efficiency, innovation, and sustainable growth.
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

      {/* WHY CHOOSE US */}
<section className="why-choose-section">
  <div className="jai-container">
    <div className="section-title">
      <small>WHY CHOOSE US</small>
      <h2>Built for Enterprise Growth</h2>
      <p>
        We combine AI innovation, cloud-native engineering, secure software
        delivery, and strong execution to help businesses grow confidently.
      </p>
    </div>

    <div className="why-grid">
      <div className="why-item">
        <h3>AI-First Approach</h3>
        <p>
          We design solutions that use AI to improve speed, intelligence,
          automation, and decision-making.
        </p>
      </div>

      <div className="why-item">
        <h3>Cloud-Native Scale</h3>
        <p>
          Our solutions are designed for modern cloud platforms, scalability,
          performance, and reliability.
        </p>
      </div>

      <div className="why-item">
        <h3>Secure Enterprise Delivery</h3>
        <p>
          We focus on security, maintainability, performance, and business
          continuity from day one.
        </p>
      </div>

      <div className="why-item">
        <h3>End-to-End Support</h3>
        <p>
          From strategy to deployment and support, we help businesses across the
          full digital transformation journey.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* PRODUCTS */}
      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR PRODUCTS</small>

            <h2>Innovative Products Built for Tomorrow</h2>

            <p>
              Our AI-powered products are designed to solve real-world
              challenges and help businesses operate smarter and faster.
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

            {/* ABOUT PREVIEW */}
<section className="about-preview">
  <div className="jai-container about-grid">

    <div className="about-left">
      <small>ABOUT JAI TECHNOLOGIES</small>

      <h2>
        Delivering Excellence Through Innovation
      </h2>

      <p>
        JAI Technologies is a global IT solutions provider delivering
        intelligent software, cloud, and AI-powered solutions that help
        organizations transform and thrive in a digital-first world.
      </p>

      <div className="about-cards">
        <div className="mini-card">
          <h3>Our Mission</h3>
          <p>
            Deliver innovative and reliable technology solutions.
          </p>
        </div>

        <div className="mini-card">
          <h3>Our Vision</h3>
          <p>
            Empower businesses through AI and digital transformation.
          </p>
        </div>

        <div className="mini-card">
          <h3>Our Values</h3>
          <p>
            Innovation, integrity, excellence, and customer success.
          </p>
        </div>
      </div>
    </div>

    <div className="about-right">
  <img
    src="/images/company-building.jpg"
    alt="Company Building"
  />
</div>

  </div>
</section> 

      {/* CONTACT PREVIEW */}
      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>CONTACT US</small>

            <h2>Let's Build Something Great Together</h2>

            <p>
              Have a project in mind? Get in touch with us and let's turn your
              ideas into reality.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 12px 35px rgba(15,23,42,0.06)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
              }}
            >
              <div>
                <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
                  Contact Information
                </h3>

                <p>Email: info@jaitechnologies.com</p>

                <p>Phone: +1 (614) 220-4781</p>

                <p>Location: Columbus, Ohio, USA</p>
              </div>

              <div>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <input
                    placeholder="Your Name"
                    style={inputStyle}
                  />

                  <input
                    placeholder="Email Address"
                    style={inputStyle}
                  />

                  <input
                    placeholder="Company Name"
                    style={inputStyle}
                  />

                  <textarea
                    placeholder="Message"
                    rows={5}
                    style={inputStyle}
                  />

                  <button
                    style={{
                      background: "#155dfc",
                      color: "white",
                      border: "none",
                      padding: "16px",
                      borderRadius: "10px",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
};