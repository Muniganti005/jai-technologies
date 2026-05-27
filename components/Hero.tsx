import Link from "next/link";
import {
  Brain,
  Cloud,
  ShieldCheck,
  Workflow,
  BarChart3,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="jai-hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="jai-container hero-grid">
        <div className="hero-left">
          <p className="hero-label">AI • CLOUD • SOFTWARE • AUTOMATION</p>

          <h1>
            Building Intelligent
            <span> Enterprise Solutions</span>
            for the Future
          </h1>

          <p className="hero-text">
            JAI Technologies helps businesses modernize operations with
            AI-powered automation, cloud engineering, enterprise software,
            DevOps, and digital transformation solutions.
          </p>

          <div className="hero-buttons">
            <Link href="/contact">Book Consultation</Link>
            <Link href="/services" className="outline">
              Explore Services
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>AI-First</strong>
              <span>Automation</span>
            </div>
            <div>
              <strong>Cloud Ready</strong>
              <span>AWS / Azure</span>
            </div>
            <div>
              <strong>Secure</strong>
              <span>Enterprise Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>JAI AI Control Center</p>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-card large">
                <div className="card-title">
                  <Brain size={24} />
                  <span>AI Automation</span>
                </div>

                <h3>86%</h3>
                <p>Workflow efficiency improvement</p>

                <div className="progress-line">
                  <div></div>
                </div>
              </div>

              <div className="dashboard-card">
                <Cloud size={28} />
                <h4>Cloud Scale</h4>
                <p>99.9% uptime-ready architecture</p>
              </div>

              <div className="dashboard-card">
                <ShieldCheck size={28} />
                <h4>Secure</h4>
                <p>Enterprise-grade protection</p>
              </div>

              <div className="dashboard-card wide">
                <BarChart3 size={28} />
                <div>
                  <h4>Live Analytics</h4>
                  <p>Real-time data insights and reporting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-chip chip-one">
            <Workflow size={18} />
            Smart Workflows
          </div>

          <div className="floating-chip chip-two">
            <Zap size={18} />
            AI Powered
          </div>
        </div>
      </div>

      <div className="stats-bar jai-container">
        <div>
          <strong>15+</strong>
          <span>Years of Excellence</span>
        </div>
        <div>
          <strong>250+</strong>
          <span>Projects Delivered</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Enterprise Clients</span>
        </div>
        <div>
          <strong>98%</strong>
          <span>Client Retention</span>
        </div>
      </div>
    </section>
  );
}