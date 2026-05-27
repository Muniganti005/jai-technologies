import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="jai-navbar">
      <div className="jai-container nav-row">
        <Link href="/" className="nav-logo">
          <Image src="/logo.png" alt="JAI Technologies" width={52} height={52} priority />
          <div>
            <h2>JAI</h2>
            <span>TECHNOLOGIES</span>
          </div>
        </Link>

        <nav className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/resources">Resources</Link>
        </nav>

        <Link href="/contact" className="nav-contact">
          Contact Us
        </Link>
      </div>
    </header>
  );
}