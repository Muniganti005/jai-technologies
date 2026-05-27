import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="jai-hero">
      <div className="jai-container hero-grid">
        <div className="hero-left">
          <p className="hero-label">AI-POWERED SOFTWARE & CLOUD SOLUTIONS</p>

          <h1>
            Building Intelligent
            <span> Solutions </span>
            for the Future
          </h1>

          <p className="hero-text">
            JAI Technologies empowers businesses with AI, cloud, and digital
            solutions to drive innovation, automate processes, and accelerate growth.
          </p>

          <div className="hero-buttons">
            <Link href="/contact">Book a Consultation</Link>
            <Link href="/services" className="outline">Explore Services</Link>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="/images/hero-ai-clean.png"
            alt="AI Technology"
            width={760}
            height={520}
            priority
            className="hero-img"
          />
        </div>
      </div>

      <div className="stats-bar jai-container">
        <div><strong>15+</strong><span>Years of Excellence</span></div>
        <div><strong>250+</strong><span>Projects Delivered</span></div>
        <div><strong>120+</strong><span>Happy Clients</span></div>
        <div><strong>98%</strong><span>Client Retention</span></div>
      </div>
    </section>
  );
}