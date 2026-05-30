"use client";

import { useState } from "react";
import Image from "next/image";
export default function CogniPocPage() {
const capabilities = [
"Rapid Prototyping",
"AI Idea Validation",
"Pilot Programs",
"Technology Assessment",
"Business Feasibility",
"Production Readiness",
];

const [projectType, setProjectType] = useState("");
const [teamSize, setTeamSize] = useState("");
const [duration, setDuration] = useState("");
const [estimate, setEstimate] = useState("");

const generateEstimate = () => {
  const team = Number(teamSize);
  const weeks = Number(duration);

  if (!projectType || !team || !weeks) {
    setEstimate(
      "Please enter Project Type, Team Size, and Duration."
    );
    return;
  }

  const effort = team * weeks;

  setEstimate(
    `${projectType} POC Estimate:
    
Team Size: ${team}
Duration: ${weeks} weeks
Effort: ${effort} person-weeks

Recommendation: Start with an MVP and validate business value before scaling.`
  );
};

return ( <main> <section className="about-hero"> <div className="jai-container"> <small>COGNIPOC</small>


      <h1>Rapid AI Proof-of-Concept Platform</h1>

      <p>
        CogniPoc helps organizations validate AI initiatives quickly through
        prototypes, pilot programs, demonstrations, and proof-of-concept
        development before full-scale implementation.
      </p>
    </div>
  </section>

  <section className="home-section">
      <div className="jai-container">
        <Image
          src="/images/cognipoc-hero.jpg"
          alt="cognipoc Platform"
          width={1200}
          height={520}
          className="service-hero-image"
        />
      </div>
    </section>

  <section className="home-section">
    <div className="jai-container">
      <div className="section-title">
        <small>POC CAPABILITIES</small>

        <h2>Turn Ideas Into Working Solutions</h2>

        <p>
          Reduce risk, validate business value, and accelerate innovation
          through structured proof-of-concept development.
        </p>
      </div>

      <div className="cards-grid">
        {capabilities.map((item) => (
          <div className="clean-card" key={item}>
            <h3>{item}</h3>

            <p>
              Quickly evaluate technology opportunities and determine the
              best path toward implementation.
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
      <h2 style={{ color: "#fff" }}>POC Estimator</h2>

      <p style={{ color: "#bdbdbd" }}>
        Estimate project effort and proof-of-concept scope.
      </p>

      <input
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        placeholder="Project Type (AI Chatbot)"
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
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
        type="number"
        placeholder="Team Size"
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
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        type="number"
        placeholder="Duration (Weeks)"
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
          minHeight: "120px",
          background: "#333",
          margin: "30px auto",
          borderRadius: "12px",
          padding: "18px",
          color: "#fff",
          textAlign: "left",
          whiteSpace: "pre-line",
        }}
      >
        {estimate || "POC estimate will appear here."}
      </div>

      <button
        onClick={generateEstimate}
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
        Generate Estimate
      </button>
    </div>
  </div>
</section>


  <section className="home-section">
    <div className="jai-container">
      <div className="section-title">
        <small>WHY COGNIPOC</small>

        <h2>Accelerate Innovation With Confidence</h2>
      </div>

      <div className="cards-grid">
        <div className="clean-card">
          <h3>Reduce Project Risk</h3>
          <p>
            Validate technical feasibility before committing significant
            development resources.
          </p>
        </div>

        <div className="clean-card">
          <h3>Faster Innovation</h3>
          <p>
            Build working demonstrations quickly and gather stakeholder
            feedback early.
          </p>
        </div>

        <div className="clean-card">
          <h3>Enterprise Adoption</h3>
          <p>
            Prepare successful concepts for scalable production deployment
            across the organization.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

);
}
