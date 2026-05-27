import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="jai-container footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/logo.png" alt="JAI" width={48} height={48} />
            <div>
              <h2>JAI</h2>
              <span>TECHNOLOGIES</span>
            </div>
          </div>

          <p>
            AI-powered software and cloud solutions empowering businesses to
            innovate, automate, and grow.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Services</h3>
          <Link href="/services">AI & Automation</Link>
          <Link href="/services">Cloud Solutions</Link>
          <Link href="/services">Custom Development</Link>
          <Link href="/services">Data Engineering</Link>
          <Link href="/services">DevOps & Infrastructure</Link>
        </div>

        <div>
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter</p>

          <div className="newsletter">
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 JAI Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}