export const metadata = {
  title: "Terms of Service | JAI Technologies",
  description:
    "Terms of Service governing the use of JAI Technologies websites, products, services, and digital solutions.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>TERMS OF SERVICE</small>
          <h1>Terms of Service</h1>
          <p>
            These terms govern the use of JAI Technologies websites, products,
            services, and digital solutions.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container">
          <div className="clean-card">
            <h3>Acceptance of Terms</h3>
            <p>
              By accessing or using our website, services, or products, you agree
              to comply with these terms and applicable laws.
            </p>

            <h3>Use of Services</h3>
            <p>
              Users agree to use our services responsibly and not engage in
              unlawful, harmful, or unauthorized activities.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content, branding, software, graphics, and materials provided by
              JAI Technologies remain the property of JAI Technologies unless
              otherwise stated.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              JAI Technologies shall not be liable for indirect, incidental, or
              consequential damages arising from the use of our services or
              website.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We may update these terms periodically. Continued use of our
              services indicates acceptance of revised terms.
            </p>

            <h3>Contact Information</h3>
            <p>
              For questions regarding these terms, please contact JAI Technologies through our Contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}