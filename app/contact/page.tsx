import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | JAI Technologies",
  description:
    "Contact JAI Technologies for AI automation, cloud transformation, software development, data engineering, DevOps, and enterprise technology solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>CONTACT US</small>

          <h1>Let’s Build Something Great Together</h1>

          <p>
            Connect with JAI Technologies to discuss AI automation, cloud
            transformation, enterprise software, DevOps, and digital solutions.
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
              Share your business goals and our team will help identify the
              right technology strategy, architecture, and delivery approach.
            </p>

            <div className="contact-info">
              <p>
                <Mail size={20} color="#2563eb" />
                Sales: sales@jaitechnologies.com
              </p>

              <p>
                <Mail size={20} color="#2563eb" />
                Support: support@jaitechnologies.com
              </p>

              <p>
                <Mail size={20} color="#2563eb" />
                General: info@jaitechnologies.com
              </p>

              <p>
                <Phone size={20} color="#2563eb" />
                Phone: +1 (614) 220-4781
              </p>

              <p>
                <MapPin size={20} color="#2563eb" />
                Location: Columbus, Ohio, USA
              </p>

              <p>
                <Clock size={20} color="#2563eb" />
                Business Hours: Mon–Fri | 9:00 AM – 6:00 PM EST
              </p>

              <p>
                LinkedIn: JAI Technologies
              </p>
            </div>
          </div>

          <form className="contact-form">
            <input placeholder="Your Name" />
            <input placeholder="Email Address" />
            <input placeholder="Company Name" />

            <select defaultValue="">
              <option value="" disabled>
                Select Service
              </option>
              <option>AI & Automation</option>
              <option>Cloud Solutions</option>
              <option>Custom Software Development</option>
              <option>Data Engineering</option>
              <option>DevOps & Infrastructure</option>
              <option>IT Consulting</option>
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