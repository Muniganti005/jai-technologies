import type { Metadata } from "next";
import "./globals.css";

import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

export const metadata: Metadata = {
  title: "JAI Technologies | AI, Cloud & Software Solutions",
  description:
    "JAI Technologies delivers AI-powered software, cloud, automation, and digital transformation solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Animated Background */}
        <BackgroundEffects />

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Floating AI Chatbot */}
        <ChatBot />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}