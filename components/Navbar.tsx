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

        {/* LOGO */}
        <Link
          href="/"
          className="nav-logo"
          onClick={() => setOpen(false)}
        >

          <Image
            src="/logo.png"
            alt="JAI Technologies"
            width={68}
            height={68}
            priority
            className="jai-logo"
          />

          <div className="logo-text">
            <strong>JAI</strong>
            <span>TECHNOLOGIES</span>
          </div>

        </Link>

        {/* NAVIGATION */}
        <nav className={`nav-menu ${open ? "active" : ""}`}>

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>

          <Link href="/industries" onClick={() => setOpen(false)}>
            Industries
          </Link>

          <Link href="/careers" onClick={() => setOpen(false)}>
            Careers
          </Link>

          <Link href="/resources" onClick={() => setOpen(false)}>
            Resources
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {/* MOBILE CONTACT BUTTON */}
          <Link
            href="/contact"
            className="nav-contact mobile-contact-btn"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>

        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          href="/contact"
          className="nav-contact desktop-contact"
        >
          Contact Us
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
}