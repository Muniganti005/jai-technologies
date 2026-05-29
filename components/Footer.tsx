import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="jai-container footer-top">
        <div className="footer-brand-block">
          <h2>JAI Technologies</h2>
          <p>
            AI-powered software, cloud transformation, automation, DevOps, and
            enterprise digital solutions for modern businesses.
          </p>

          <div className="footer-socials">
            <a href="#">IN</a>
            <a href="https://github.com/Muniganti005/jai-technologies">GH</a>
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/resources">Resources</Link>
        </div>

        <div>
          <h3>Services</h3>
          <Link href="/services">AI Automation</Link>
          <Link href="/services">Cloud & DevOps</Link>
          <Link href="/services">Data Engineering</Link>
          <Link href="/services">Custom Software</Link>
          <Link href="/services">IT Consulting</Link>
        </div>

        <div>
          <h3>Products</h3>
          <Link href="/products">CogniTip</Link>
          <Link href="/products">CogniStar</Link>
          <Link href="/products">CogniQuotes</Link>
          <Link href="/products">CogniPoc</Link>
          <Link href="/products">AI Automation Suite</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            <Mail size={16} />
            info@jaitechnologies.com
          </p>
          <p>
            <Phone size={16} />
            +1 (614) 220-4781
          </p>
          <p>
            <MapPin size={16} />
            Columbus, Ohio, USA
          </p>
        </div>
      </div>

      <div className="jai-container footer-cert-strip">
        <span>AI-First Solutions</span>
        <span>Cloud-Native Architecture</span>
        <span>Enterprise Security</span>
        <span>DevOps Delivery</span>
      </div>

      <div className="footer-bottom">
        <div className="jai-container footer-bottom-inner">
          <span>© 2026 JAI Technologies. All rights reserved.</span>

          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}