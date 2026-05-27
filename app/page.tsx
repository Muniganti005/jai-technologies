import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

import {
  Brain,
  Cloud,
  Code2,
  Database,
  Settings,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    description:
      "Automate business workflows using AI assistants and smart automation.",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Build scalable cloud applications using AWS and Azure.",
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Enterprise-grade web and backend applications.",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    title: "Data Engineering",
    description:
      "Data pipelines, dashboards, analytics, and reporting systems.",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "CI/CD pipelines, monitoring, deployment, and automation.",
    icon: <Settings className="h-8 w-8" />,
  },
  {
    title: "Enterprise Support",
    description:
      "Production support, incident management, and SLA support.",
    icon: <ShieldCheck className="h-8 w-8" />,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              End-to-End IT Solutions for Your Business
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}