"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-blue-500/20 bg-slate-950/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JAI Technologies Logo"
            width={44}
            height={44}
            className="rounded-lg"
          />

          <span className="text-2xl font-bold text-white">
            JAI{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            href="/services"
            className="transition hover:text-cyan-400"
          >
            Services
          </Link>

          <Link
            href="/products"
            className="transition hover:text-cyan-400"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/contact"
          className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
        >
          Contact Us
        </Link>
      </nav>
    </motion.header>
  );
}