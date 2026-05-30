"use client";

import { useState } from "react";
import Image from "next/image";

export default function CogniQuotesPage() {
  const [serviceName, setServiceName] = useState("");
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [quote, setQuote] = useState("");

  const features = [
    "Quote Generation",
    "Proposal Automation",
    "Pricing Intelligence",
    "Approval Workflows",
    "Sales Automation",
    "Customer Documentation",
  ];

  const generateQuote = () => {
    const parsedHours = Number(hours);
    const parsedRate = Number(rate);

    if (!serviceName || !parsedHours || !parsedRate) {
      setQuote("Please enter service name, hours, and hourly rate.");
      return;
    }

    const total = parsedHours * parsedRate;

    setQuote(
      `${serviceName} estimated quote: $${total.toLocaleString()} based on ${parsedHours} hours at $${parsedRate}/hour.`
    );
  };

  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>COGNIQUOTES</small>
          <h1>AI-Powered Quote & Proposal Automation Platform</h1>
          <p>
            CogniQuotes helps organizations create professional quotes,
            proposals, estimates, and sales documents faster using AI-powered
            automation and intelligent workflows.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <Image
            src="/images/cogniquotes-hero.jpg"
            alt="CogniQuotes Platform"
            width={1200}
            height={520}
            style={{ width: "100%", height: "auto" }}
            className="service-hero-image"
          />
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
            <h2 style={{ color: "#fff" }}>Quote Generator Demo</h2>
            <p style={{ color: "#bdbdbd" }}>
              Enter service details and generate an estimated quote instantly.
            </p>

            <input
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="Service name, e.g. Cloud Migration"
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
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Estimated hours, e.g. 100"
              type="number"
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
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Hourly rate, e.g. 75"
              type="number"
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
                minHeight: "80px",
                background: "#333",
                margin: "30px auto",
                borderRadius: "12px",
                padding: "18px",
                color: "#fff",
                textAlign: "left",
                lineHeight: "1.7",
              }}
            >
              {quote || "Your generated quote will appear here."}
            </div>

            <button
              type="button"
              onClick={generateQuote}
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
              Generate Quote
            </button>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>PLATFORM FEATURES</small>
            <h2>Accelerate Your Sales Process</h2>
            <p>
              Reduce manual effort, improve accuracy, and deliver
              customer-ready proposals in minutes.
            </p>
          </div>

          <div className="cards-grid">
            {features.map((feature) => (
              <div className="clean-card" key={feature}>
                <h3>{feature}</h3>
                <p>
                  Streamline quote creation and proposal management using
                  intelligent automation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}