import Image from "next/image";

export default function AIAutomationPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>AI AUTOMATION</small>

          <h1>AI Automation Solutions for Modern Businesses</h1>

          <p>
            JAI Technologies helps organizations automate workflows, reduce
            manual effort, improve accuracy, and scale operations using
            intelligent AI-powered systems.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <Image
            src="/images/service-ai.jpg"
            alt="AI Automation Services"
            width={1200}
            height={520}
            className="service-hero-image"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>WHAT WE DELIVER</small>

            <h2>Automation That Improves Business Efficiency</h2>

            <p>
              From document processing to workflow automation, we build AI
              solutions that save time and improve decision-making.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>Workflow Automation</h3>

              <p>
                Automate repetitive business processes and reduce manual work
                across departments.
              </p>
            </div>

            <div className="clean-card">
              <h3>Document Intelligence</h3>

              <p>
                Extract, classify, and process documents using AI-powered
                automation.
              </p>
            </div>

            <div className="clean-card">
              <h3>AI Assistants</h3>

              <p>
                Build intelligent assistants for support, operations, HR,
                sales, and customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}