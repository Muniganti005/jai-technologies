import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CONTACT US</small>

          <h1>Let’s Build Something Great Together</h1>

          <p>
            Have a project in mind? Contact JAI Technologies and let’s discuss
            how AI, cloud, and software can help your business.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="jai-container contact-grid">
          <div>
            <small className="blue-small">GET IN TOUCH</small>

            <h2 className="about-title">
              Start Your Digital Transformation Journey
            </h2>

            <p className="about-text">
              Share your business needs and our team will help identify the
              right AI, cloud, software, and automation solution.
            </p>

            <div className="contact-info">
              <p>
                <Mail size={20} color="#2563eb" />
                info@jaitechnologies.com
              </p>

              <p>
                <Phone size={20} color="#2563eb" />
                +1 (614) 220-4781
              </p>

              <p>
                <MapPin size={20} color="#2563eb" />
                Columbus, Ohio, USA
              </p>
            </div>
          </div>

          <form className="contact-form">
            <input placeholder="Your Name" />
            <input placeholder="Email Address" />
            <input placeholder="Company Name" />

            <select>
              <option>Select Service</option>
              <option>AI & Automation</option>
              <option>Cloud Solutions</option>
              <option>Custom Software Development</option>
              <option>Data Engineering</option>
              <option>DevOps & Infrastructure</option>
            </select>

            <textarea placeholder="Tell us about your project" rows={5} />

            <button type="button">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}