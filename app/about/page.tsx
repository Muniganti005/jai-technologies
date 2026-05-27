import Image from "next/image";

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section className="about-hero">
        <div className="jai-container">
          <small>ABOUT JAI TECHNOLOGIES</small>

          <h1>
            Delivering Intelligent Solutions
            for the Digital Future
          </h1>

          <p>
            JAI Technologies is focused on AI-powered software solutions,
            cloud transformation, enterprise applications, automation,
            and digital innovation.
          </p>
        </div>
      </section>

      {/* COMPANY SECTION */}
      <section className="home-section">
        <div className="jai-container about-company-grid">

          <div>
            <Image
              src="/images/company-building.jpg"
              alt="Company Building"
              width={700}
              height={500}
              className="about-company-img"
            />
          </div>

          <div>
            <small className="blue-small">
              WHO WE ARE
            </small>

            <h2 className="about-title">
              Driving Innovation Through Technology
            </h2>

            <p className="about-text">
              We help businesses modernize operations using AI, cloud,
              automation, and enterprise-grade software engineering.
            </p>

            <div className="about-points">
              <div>
                <strong>AI Solutions</strong>
                <p>Smart automation and intelligent systems.</p>
              </div>

              <div>
                <strong>Cloud Transformation</strong>
                <p>Scalable infrastructure and DevOps delivery.</p>
              </div>

              <div>
                <strong>Enterprise Applications</strong>
                <p>Secure and scalable business platforms.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="jai-container stats-grid">

          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>250+</h2>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h2>120+</h2>
            <p>Clients Worldwide</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Global Support</p>
          </div>

        </div>
      </section>

    </main>
  );
}