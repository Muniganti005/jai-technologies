"use client";

import { useState } from "react";
import Image from "next/image";
export default function CogniStarPage() {
const capabilities = [
"AI Automation",
"Predictive Analytics",
"Business Intelligence",
"Workflow Optimization",
"Decision Support",
"Performance Monitoring",
];

const [companySize, setCompanySize] = useState("");
const [industry, setIndustry] = useState("");
const [automationLevel, setAutomationLevel] = useState("");
const [assessment, setAssessment] = useState("");

const generateAssessment = () => {
  if (!companySize || !industry || !automationLevel) {
    setAssessment(
      "Please enter Company Size, Industry, and Automation Level."
    );
    return;
  }

  let score = 65;

  if (Number(companySize) > 500) score += 10;
  if (automationLevel.toLowerCase().includes("high")) score += 15;
  if (automationLevel.toLowerCase().includes("medium")) score += 8;

  setAssessment(
    `AI Readiness Score: ${score}%\n\nIndustry: ${industry}\nCompany Size: ${companySize}\nAutomation Level: ${automationLevel}\n\nRecommended Solutions:\n• AI Automation\n• Business Intelligence\n• Predictive Analytics\n• Workflow Optimization`
  );
};

return ( <main> <section className="about-hero"> <div className="jai-container"> <small>COGNISTAR</small>


      <h1>Enterprise AI Intelligence Platform</h1>

      <p>
        CogniStar combines AI, automation, analytics, and operational
        intelligence to help organizations make smarter decisions and
        improve business performance.
      </p>
    </div>
  </section>

<section className="home-section">
  <div className="jai-container">
    <Image
      src="/images/cognistar-hero.jpg"
      alt="cognistar Platform"
      width={1200}
      height={520}
      className="service-hero-image"
    />
  </div>
</section>

  <section className="home-section">
    <div className="jai-container">
      <div className="section-title">
        <small>PLATFORM CAPABILITIES</small>

        <h2>Transform Data Into Business Intelligence</h2>

        <p>
          Leverage AI-powered insights, automation, and analytics to
          optimize operations and accelerate growth.
        </p>
      </div>

      <div className="cards-grid">
        {capabilities.map((item) => (
          <div className="clean-card" key={item}>
            <h3>{item}</h3>

            <p>
              Enterprise-grade AI capabilities designed to improve
              efficiency, visibility, and decision-making.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

<section className="home-section">
  <div className="jai-container">
    <div
      style={{
        background: "#050505",
        borderRadius: "24px",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#fff" }}>AI Readiness Assessment</h2>

      <p style={{ color: "#bdbdbd" }}>
        Evaluate your organization's readiness for AI transformation.
      </p>

      <input
        value={companySize}
        onChange={(e) => setCompanySize(e.target.value)}
        type="number"
        placeholder="Company Size (Employees)"
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "16px",
          marginTop: "20px",
          borderRadius: "12px",
          border: "none",
          background: "#333",
          color: "#fff",
        }}
      />

      <input
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder="Industry (Banking, Healthcare, Retail)"
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "16px",
          marginTop: "16px",
          borderRadius: "12px",
          border: "none",
          background: "#333",
          color: "#fff",
        }}
      />

      <input
        value={automationLevel}
        onChange={(e) => setAutomationLevel(e.target.value)}
        placeholder="Automation Level (Low, Medium, High)"
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "16px",
          marginTop: "16px",
          borderRadius: "12px",
          border: "none",
          background: "#333",
          color: "#fff",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          minHeight: "140px",
          background: "#333",
          margin: "30px auto",
          borderRadius: "12px",
          padding: "18px",
          color: "#fff",
          textAlign: "left",
          whiteSpace: "pre-line",
        }}
      >
        {assessment || "AI readiness assessment results will appear here."}
      </div>

      <button
        onClick={generateAssessment}
        style={{
          background: "#0ea5e9",
          color: "#fff",
          border: "none",
          padding: "16px 28px",
          borderRadius: "10px",
          fontWeight: "800",
          cursor: "pointer",
        }}
      >
        Generate Assessment
      </button>
    </div>
  </div>
</section>

  <section className="home-section">
    <div className="jai-container">
      <div className="section-title">
        <small>BUSINESS BENEFITS</small>

        <h2>Why Organizations Choose CogniStar</h2>
      </div>

      <div className="cards-grid">
        <div className="clean-card">
          <h3>Predictive Insights</h3>
          <p>
            Identify trends and opportunities before they impact business
            performance.
          </p>
        </div>

        <div className="clean-card">
          <h3>Operational Efficiency</h3>
          <p>
            Reduce manual effort through intelligent automation and workflow
            optimization.
          </p>
        </div>

        <div className="clean-card">
          <h3>Scalable Architecture</h3>
          <p>
            Built for enterprise environments with security, scalability,
            and reliability.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

);
}
