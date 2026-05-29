export default function CloudDevOpsPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CLOUD & DEVOPS</small>
          <h1>Cloud-Native Infrastructure & DevOps Services</h1>
          <p>
            We help organizations modernize infrastructure, automate deployments,
            improve reliability, and scale applications using cloud-native
            technologies and DevOps best practices.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR CAPABILITIES</small>
            <h2>Accelerate Delivery with Cloud & DevOps</h2>
            <p>
              Build, deploy, monitor, and scale applications faster with secure
              and automated cloud platforms.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>Cloud Migration</h3>
              <p>
                Move applications and workloads to AWS, Azure, and modern cloud
                environments.
              </p>
            </div>

            <div className="clean-card">
              <h3>CI/CD Automation</h3>
              <p>
                Automate builds, testing, deployments, and release pipelines.
              </p>
            </div>

            <div className="clean-card">
              <h3>Infrastructure as Code</h3>
              <p>
                Manage cloud infrastructure using repeatable and scalable
                automation practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}