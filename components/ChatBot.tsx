"use client";

import { Bot, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-5">
              <div className="rounded-2xl bg-white/10 p-2">
                <Bot className="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  JAI AI Assistant
                </h3>

                <p className="text-xs text-cyan-100">
                  Online • AI Powered
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 p-5">
              
              {/* AI Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="mt-1 rounded-full bg-cyan-500/20 p-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>

                <div className="max-w-[250px] rounded-2xl rounded-tl-sm bg-slate-900 p-4 text-sm text-slate-200">
                  👋 Hi! I'm your JAI AI Assistant.
                  <br />
                  How can I help your business today?
                </div>
              </motion.div>

              {/* Input */}
              <div className="flex items-center gap-3 pt-4">
                <input
                  type="text"
                  placeholder="Ask about AI, cloud, software..."
                  className="flex-1 rounded-2xl border border-blue-500/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

                <button className="rounded-2xl bg-blue-600 p-3 transition hover:scale-105 hover:bg-blue-500">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/30"
      >
        <Bot className="h-8 w-8 text-white" />
      </motion.button>
    </>
  );
}