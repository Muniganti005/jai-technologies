import type { Metadata } from "next";
import "./globals.css";

import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

export const viewport = {
  themeColor: "#031225",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaitechnologies.com"),

  title: "JAI Technologies | AI, Cloud & Enterprise Solutions",

  description:
    "JAI Technologies delivers AI-powered software, cloud transformation, automation, DevOps, and enterprise digital solutions for modern businesses.",

  keywords: [
    "AI Solutions",
    "Cloud Services",
    "Enterprise Software",
    "Automation",
    "DevOps",
    "AWS",
    "AI Chatbot",
    "Digital Transformation",
    "JAI Technologies",
  ],

  authors: [{ name: "JAI Technologies" }],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "JAI Technologies",

    description:
      "AI-powered software, cloud, automation, and enterprise solutions.",

    url: "https://www.jaitechnologies.com",

    siteName: "JAI Technologies",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JAI Technologies",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "JAI Technologies",

    description:
      "AI-powered software, cloud, automation, and enterprise solutions.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="jai-body">

        {/* Animated Background */}
        <BackgroundEffects />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Floating AI Chatbot */}
        <ChatBot />

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}