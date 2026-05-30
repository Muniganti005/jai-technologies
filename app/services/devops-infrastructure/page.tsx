import Image from "next/image";

export const metadata = {
  title: "DevOps & Infrastructure Services | JAI Technologies",
  description:
    "CI/CD automation, Kubernetes, Docker, cloud infrastructure, monitoring, and DevOps engineering services.",
};

export default function DevOpsInfrastructurePage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>DEVOPS & INFRASTRUCTURE</small>

          <h1>Accelerate Software Delivery with DevOps Excellence</h1>

          <p>
            JAI Technologies helps organizations automate software delivery,
            improve reliability, reduce deployment risk, and scale modern
            infrastructure using DevOps best practices.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <Image
            src="/images/devops-infra.jpg"
            alt="DevOps Infrastructure Services"
            width={1200}
            height={520}
            className="service-hero-image"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>OUR DEVOPS CAPABILITIES</small>

            <h2>Build, Deploy & Scale Faster</h2>

            <p>
              We implement modern DevOps practices that improve deployment
              speed, system reliability, security, and operational efficiency.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>CI/CD Automation</h3>

              <p>
                Automate software builds, testing, deployments, and release
                management using modern CI/CD pipelines.
              </p>
            </div>

            <div className="clean-card">
              <h3>Containerization</h3>

              <p>
                Deploy scalable applications using Docker, Kubernetes, and
                cloud-native container platforms.
              </p>
            </div>

            <div className="clean-card">
              <h3>Infrastructure as Code</h3>

              <p>
                Provision and manage infrastructure consistently using
                Terraform, automation scripts, and DevOps tools.
              </p>
            </div>

            <div className="clean-card">
              <h3>Monitoring & Observability</h3>

              <p>
                Implement logging, monitoring, alerting, and observability
                solutions for proactive operations management.
              </p>
            </div>

            <div className="clean-card">
              <h3>Cloud Infrastructure</h3>

              <p>
                Design secure, scalable cloud environments across AWS, Azure,
                and hybrid cloud platforms.
              </p>
            </div>

            <div className="clean-card">
              <h3>Security & Compliance</h3>

              <p>
                Integrate security controls, vulnerability management, and
                compliance practices into DevOps workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}