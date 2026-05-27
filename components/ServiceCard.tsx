"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/80 p-8 backdrop-blur-xl transition"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 transition group-hover:scale-110 group-hover:bg-blue-500/20">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative leading-relaxed text-slate-300">
        {description}
      </p>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}