"use client";

import { useState } from "react";
import Image from "next/image";

export default function CogniTipPage() {
  const [keyword, setKeyword] = useState("");
  const [tip, setTip] = useState("");

  const categories = [
    "Family",
    "Health",
    "Finance",
    "Education",
    "Career",
    "Relationship",
    "Custom Tip",
  ];

  const generateTip = () => {
  const text = keyword.toLowerCase().trim();

  if (!text) {
    setTip("Please enter a keyword first.");
    return;
  }

  if (text.includes("career")) {
    setTip(
      "Career Tip: Focus on mastering one high-value skill and apply it in a real project this month."
    );
  } else if (text.includes("health")) {
    setTip(
      "Health Tip: Prioritize consistent sleep and hydration before optimizing anything else."
    );
  } else if (text.includes("finance")) {
    setTip(
      "Finance Tip: Track expenses for 30 days before creating a budget plan."
    );
  } else if (text.includes("family")) {
    setTip(
      "Family Tip: Schedule uninterrupted quality time with loved ones every week."
    );
  } else if (text.includes("education")) {
    setTip(
      "Education Tip: Learn one topic deeply rather than many topics superficially."
    );
  } else if (text.includes("relationship")) {
    setTip(
      "Relationship Tip: Listen actively and communicate openly to strengthen trust."
    );
  } else {
    setTip(
      `AI Tip for ${keyword}: Focus on one meaningful improvement today and build consistency over time.`
    );
  }
};

  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>COGNITIP</small>
          <h1>Your AI-Powered Life & Business Guidance Assistant</h1>
          <p>
            CogniTip provides intelligent recommendations, practical guidance,
            and personalized suggestions to help users make smarter decisions
            in everyday life and business.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <Image
            src="/images/cognitip-hero.jpg"
            alt="CogniTip Platform"
            width={1200}
            height={520}
            style={{ width: "100%", height: "auto" }}
            className="service-hero-image"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>POPULAR CATEGORIES</small>
            <h2>Get AI Guidance Across Multiple Areas</h2>
            <p>
              Explore personalized tips for health, finance, career growth,
              education, relationships, and more.
            </p>
          </div>

          <div className="cards-grid">
            {categories.map((category) => (
              <div className="clean-card" key={category}>
                <h3>{category}</h3>
                <p>
                  Receive AI-generated insights, recommendations, and guidance
                  tailored to your goals.
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
            <h2 style={{ color: "#fff" }}>Custom Tip</h2>
            <p style={{ color: "#bdbdbd" }}>
              Enter a keyword to get a personalized AI-style tip.
            </p>

            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter a keyword..."
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

            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                minHeight: "70px",
                background: "#333",
                margin: "30px auto",
                borderRadius: "12px",
                padding: "18px",
                color: "#fff",
                textAlign: "left",
                lineHeight: "1.7",
              }}
            >
              {tip || "Your generated tip will appear here."}
            </div>

            <button
              type="button"
              onClick={generateTip}
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
              Generate AI Tip
            </button>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>KEY FEATURES</small>
            <h2>Why Choose CogniTip?</h2>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>Personalized Guidance</h3>
              <p>Receive context-aware recommendations tailored to your needs.</p>
            </div>

            <div className="clean-card">
              <h3>Multiple Categories</h3>
              <p>Access tips covering personal, educational, and professional topics.</p>
            </div>

            <div className="clean-card">
              <h3>AI-Powered Intelligence</h3>
              <p>Generate useful recommendations instantly using advanced AI.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}