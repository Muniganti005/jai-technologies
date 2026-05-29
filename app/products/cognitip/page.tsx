export default function CogniTipPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>COGNITIP</small>
          <h1>AI-Powered Guidance & Recommendation Assistant</h1>
          <p>
            CogniTip helps users make faster decisions with intelligent tips,
            contextual suggestions, and AI-powered business guidance.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="cards-grid">
            <div className="clean-card">
              <h3>Smart Recommendations</h3>
              <p>Deliver helpful suggestions based on user context and business needs.</p>
            </div>

            <div className="clean-card">
              <h3>Workflow Guidance</h3>
              <p>Guide users through complex processes with AI-assisted tips.</p>
            </div>

            <div className="clean-card">
              <h3>Business Productivity</h3>
              <p>Improve decision-making, reduce confusion, and speed up daily operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}