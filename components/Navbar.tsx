"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="jai-navbar">
      <div className="jai-container nav-row">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
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

        <nav className={`nav-menu ${open ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-contact desktop-contact">
          Contact Us
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
}