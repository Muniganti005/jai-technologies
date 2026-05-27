"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <nav className={`nav-menu ${open ? "active" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <Link href="/contact" className="nav-contact desktop-contact">
          Contact Us
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
}