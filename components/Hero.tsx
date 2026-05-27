"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1d4ed8,transparent_35%)] opacity-30" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            AI | Cloud | Software | Automation
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            AI-Powered Solutions. <br />

            <span className="gradient-text">
              Built for the Future.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            JAI Technologies combines modern software engineering,
            cloud platforms, automation, and AI to help businesses
            innovate, scale, and grow faster.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/services"
              className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-cyan-400 px-7 py-4 font-semibold text-cyan-300 transition hover:scale-105 hover:bg-cyan-500/10"
            >
              Talk to AI Assistant
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-slate-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">250+</h3>
              <p className="text-slate-400">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
              <p className="text-slate-400">Enterprise Support</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 rounded-[40px] bg-blue-500/20 blur-3xl" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
            <Image
              src="/images/ai-hero.png"
              alt="AI Hero"
              width={900}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}