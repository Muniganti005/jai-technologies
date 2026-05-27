"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "10%", left: "20%" },
  { top: "25%", left: "80%" },
  { top: "40%", left: "15%" },
  { top: "60%", left: "70%" },
  { top: "75%", left: "35%" },
  { top: "85%", left: "90%" },
  { top: "50%", left: "50%" },
  { top: "30%", left: "60%" },
  { top: "15%", left: "45%" },
  { top: "70%", left: "10%" },
];

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute right-20 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      {particles.map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i * 0.3,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-400/40"
          style={{
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}
    </div>
  );
}