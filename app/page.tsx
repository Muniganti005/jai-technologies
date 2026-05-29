import Image from "next/image";
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
    title: "CogniTip",
    description:
      "AI-powered recommendation assistant that delivers smart tips, contextual suggestions, and business guidance.",
    icon: <Brain size={34} color="#2563eb" />,
  },
  {
    title: "CogniStar",
    description:
      "Enterprise AI platform for automation, predictive insights, workflow intelligence, and decision support.",
    icon: <Brain size={34} color="#2563eb" />,
  },
  {
    title: "CogniQuotes",
    description:
      "Smart quote and proposal automation platform for generating accurate estimates and customer-ready documents.",
    icon: <BarChart3 size={34} color="#2563eb" />,
  },
  {
    title: "CogniPoc",
    description:
      "Rapid AI proof-of-concept builder for validating ideas, demos, and automation use cases quickly.",
    icon: <Workflow size={34} color="#2563eb" />,
  },
  {
    title: "Enterprise AI Chatbot",
    description:
      "Secure conversational AI assistant for customer support, lead capture, employee helpdesk, and operations.",
    icon: <Bot size={34} color="#2563eb" />,
  },
  {
    title: "AI Automation Suite",
    description:
      "End-to-end automation platform for documents, workflows, reports, alerts, and operational efficiency.",
    icon: <Workflow size={34} color="#2563eb" />,
  },
];

export const metadata = {
  title: "JAI Technologies | AI, Cloud & Software Solutions",
  description:
    "JAI Technologies delivers AI automation, cloud transformation, software development, data engineering, DevOps, and enterprise technology solutions.",
};

export default function Home()
 {
  return (
    <>
      <Hero />

      {/* TECHNOLOGY SECTION */}
      <section className="tech-section">
        <div className="jai-container">
          <div className="section-title">
            <small>TECHNOLOGY EXPERTISE</small>
            <h2>Trusted Technologies & Platforms</h2>
            <p>
              We leverage modern cloud, AI, DevOps, and enterprise technologies
              to build scalable digital solutions.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">OpenAI</div>
            <div className="tech-card">AWS</div>
            <div className="tech-card">Azure</div>
            <div className="tech-card">Docker</div>
            <div className="tech-card">Kubernetes</div>
            <div className="tech-card">Next.js</div>
            <div className="tech-card">React</div>
            <div className="tech-card">Node.js</div>
            <div className="tech-card">TypeScript</div>
            <div className="tech-card">Python</div>
            <div className="tech-card">DevOps</div>
            <div className="tech-card">AI Automation</div>
          </div>
        </div>
      </section>

        {/* ENTERPRISE STATS */}
      <section className="stats-section">
        <div className="jai-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2>50+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat-card">
              <h2>10+</h2>
              <p>Enterprise Solutions</p>
            </div>

            <div className="stat-card">
              <h2>24/7</h2>
              <p>Support & Monitoring</p>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <p>Cloud Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      
            {/* ENTERPRISE SOLUTIONS */}
      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>ENTERPRISE SOLUTIONS</small>
            <h2>AI, Cloud & Data Platforms Built for Scale</h2>
            <p>
              Explore intelligent platforms and enterprise architectures that
              help organizations automate operations, modernize cloud
              environments, and unlock data-driven insights.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <Image
                src="/images/automation-flow.png"
                alt="AI Automation"
                width={500}
                height={300}
              />
              <h3>AI Automation</h3>
              <p>
                Intelligent workflow automation that reduces manual effort,
                improves productivity, and accelerates business operations.
              </p>
            </div>

            <div className="clean-card">
              <Image
                src="/images/cloud-infra.png"
                alt="Cloud Engineering"
                width={500}
                height={300}
              />
              <h3>Cloud Engineering</h3>
              <p>
                Secure, scalable cloud-native infrastructure built using modern
                DevOps and platform engineering practices.
              </p>
            </div>

            <div className="clean-card">
              <Image
                src="/images/ai-dashboard.png"
                alt="Data Engineering"
                width={500}
                height={300}
              />
              <h3>Data Engineering</h3>
              <p>
                Modern ETL pipelines, data platforms, and analytics architectures
                that transform raw data into business value.
              </p>
            </div>

            <div className="clean-card">
              <Image
                src="/images/analytics-ui.png"
                alt="Enterprise Analytics"
                width={500}
                height={300}
              />
              <h3>Enterprise Analytics</h3>
              <p>
                Executive dashboards, business intelligence, KPI monitoring, and
                real-time operational insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}



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

      {/* INDUSTRIES */}
<section className="home-section">
  <div className="jai-container">

    <div className="section-title">
      <small>INDUSTRIES WE SERVE</small>

      <h2>Transforming Industries with AI & Cloud</h2>

      <p>
        We deliver intelligent enterprise solutions across industries
        to improve operations, scalability, automation, and innovation.
      </p>
    </div>

    <div className="cards-grid">

      <div className="clean-card">
        <div className="service-icon-wrap">🏦</div>

        <h3>Banking & Financial Services</h3>

        <p>
          Secure digital banking platforms, payment systems,
          fraud detection, analytics, and cloud modernization.
        </p>
      </div>

      <div className="clean-card">
        <div className="service-icon-wrap">🏥</div>

        <h3>Healthcare</h3>

        <p>
          AI-powered healthcare solutions, analytics,
          secure patient platforms, and operational automation.
        </p>
      </div>

      <div className="clean-card">
        <div className="service-icon-wrap">🛒</div>

        <h3>Retail & E-Commerce</h3>

        <p>
          Intelligent customer engagement, recommendation systems,
          cloud commerce, and analytics platforms.
        </p>
      </div>

      <div className="clean-card">
        <div className="service-icon-wrap">🚚</div>

        <h3>Logistics & Supply Chain</h3>

        <p>
          Real-time tracking, workflow automation,
          predictive analytics, and operational intelligence.
        </p>
      </div>

      <div className="clean-card">
        <div className="service-icon-wrap">🏭</div>

        <h3>Manufacturing</h3>

        <p>
          Smart manufacturing, predictive maintenance,
          automation systems, and cloud infrastructure.
        </p>
      </div>

      <div className="clean-card">
        <div className="service-icon-wrap">🎓</div>

        <h3>Education</h3>

        <p>
          Digital learning platforms, AI-powered education tools,
          and scalable cloud-based systems.
        </p>
      </div>

    </div>

  </div>
</section>

            {/* CASE STUDIES */}
<section className="case-section">
  <div className="jai-container">
    <div className="section-title">
      <small>CASE STUDIES</small>
      <h2>Real Business Transformation Use Cases</h2>
      <p>
        Practical AI, cloud, and automation solutions designed to solve
        enterprise challenges and deliver measurable outcomes.
      </p>
    </div>

    <div className="case-grid">
      <div className="case-card">
        <span>Cloud Modernization</span>
        <h3>Enterprise Platform Migration</h3>
        <p>
          Migrated legacy applications to scalable cloud infrastructure with
          improved uptime, monitoring, and deployment speed.
        </p>
      </div>

      <div className="case-card">
        <span>AI Automation</span>
        <h3>Support Workflow Automation</h3>
        <p>
          Automated repetitive support workflows using AI assistants, reducing
          manual effort and improving response time.
        </p>
      </div>

      <div className="case-card">
        <span>Data Intelligence</span>
        <h3>Real-Time Analytics Dashboard</h3>
        <p>
          Built analytics dashboards for operational visibility, decision-making,
          reporting, and performance tracking.
        </p>
      </div>
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
              We combine AI innovation, cloud-native engineering, secure
              software delivery, and strong execution to help businesses grow
              confidently.
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
                Our solutions are designed for modern cloud platforms,
                scalability, performance, and reliability.
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
                From strategy to deployment and support, we help businesses
                across the full digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR PROCESS</small>
            <h2>How We Deliver Innovation</h2>
            <p>
              We follow a structured and scalable delivery model to transform
              ideas into intelligent enterprise solutions.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand business goals, challenges, infrastructure, and
                transformation opportunities.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Plan</h3>
              <p>
              Define the roadmap, architecture, AI strategy, cloud approach,
  and implementation plan for successful delivery.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
<h3>Build</h3>
              <p>
                Build secure, scalable, and high-performance enterprise
  solutions using modern technologies and best practices.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
<h3>Deploy</h3>
              <p>
                Deploy confidently with automation, monitoring,
  security, and cloud-native infrastructure.
              </p>
            </div>

            <div className="process-card">
  <span>05</span>
  <h3>Optimize</h3>
  <p>
    Continuously improve performance, automate workflows,
    analyze insights, and scale for future growth.
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
            <h2>Delivering Excellence Through Innovation</h2>
            <p>
              JAI Technologies is a global IT solutions provider delivering
              intelligent software, cloud, and AI-powered solutions that help
              organizations transform and thrive in a digital-first world.
            </p>

            <div className="about-cards">
              <div className="mini-card">
                <h3>Our Mission</h3>
                <p>Deliver innovative and reliable technology solutions.</p>
              </div>

              <div className="mini-card">
                <h3>Our Vision</h3>
                <p>Empower businesses through AI and digital transformation.</p>
              </div>

              <div className="mini-card">
                <h3>Our Values</h3>
                <p>Innovation, integrity, excellence, and customer success.</p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <img src="/images/company-building.jpg" alt="Company Building" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="jai-container">
          <div className="section-title">
            <small>CLIENT SUCCESS</small>
            <h2>Trusted by Growing Businesses</h2>
            <p>
              We help organizations accelerate innovation through AI, cloud
              transformation, and enterprise software solutions.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                “JAI Technologies helped modernize our cloud infrastructure and
                significantly improved operational efficiency.”
              </p>
              <h4>Michael Anderson</h4>
              <span>Cloud Operations Director</span>
            </div>

            <div className="testimonial-card">
              <p>
                “Their AI automation solutions transformed our internal
                workflows and reduced manual effort across teams.”
              </p>
              <h4>Sarah Mitchell</h4>
              <span>Enterprise Solutions Manager</span>
            </div>

            <div className="testimonial-card">
              <p>
                “Professional execution, strong technical expertise, and
                excellent support throughout the engagement.”
              </p>
              <h4>David Wilson</h4>
              <span>Technology Program Lead</span>
            </div>
          </div>
        </div>
      </section>

            {/* ENTERPRISE CTA */}
<section className="enterprise-cta">
  <div className="jai-container">

    <div className="enterprise-cta-box">

      <small>READY TO TRANSFORM YOUR BUSINESS?</small>

      <h2>
        Accelerate Innovation with
        AI, Cloud & Enterprise Solutions
      </h2>

      <p>
        Partner with JAI Technologies to modernize operations,
        automate workflows, scale infrastructure, and drive
        intelligent digital transformation.
      </p>

      <div className="enterprise-cta-buttons">
        <a href="/contact">Schedule Consultation</a>

        <a href="/services" className="outline">
          Explore Services
        </a>
      </div>

    </div>

  </div>
</section>

      {/* CONTACT PREVIEW */}
      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>CONTACT US</small>
            <h2>Let&apos;s Build Something Great Together</h2>
            <p>
              Have a project in mind? Get in touch with us and let&apos;s turn
              your ideas into reality.
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
                Contact Information
              </h3>
              <p>Email: info@jaitechnologies.com</p>
              <p>Phone: +1 (614) 220-4781</p>
              <p>Location: Columbus, Ohio, USA</p>
            </div>

            <form className="contact-form">
              <input placeholder="Your Name" />
              <input placeholder="Email Address" />
              <input placeholder="Company Name" />
              <textarea placeholder="Message" rows={5} />
              <button type="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}