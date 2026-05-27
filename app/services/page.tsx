import ServiceCard from "../../components/ServiceCard";

import {
  Brain,
  Cloud,
  Code2,
  Database,
  Settings,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    description:
      "AI chatbots, workflow automation, smart document processing, and business automation.",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS cloud setup, migration, infrastructure, deployment, and monitoring.",
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    title: "Software Development",
    description:
      "Full-stack web apps, backend APIs, dashboards, portals, and enterprise systems.",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    title: "Data Engineering",
    description:
      "ETL pipelines, AWS Glue, Lambda, S3, PostgreSQL, reporting, and analytics.",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "DevOps",
    description:
      "GitHub Actions, CI/CD pipelines, Docker, Kubernetes, monitoring, and automation.",
    icon: <Settings className="h-8 w-8" />,
  },
  {
    title: "Application Support",
    description:
      "Production support, incident management, RCA, SLA tracking, and monitoring.",
    icon: <LifeBuoy className="h-8 w-8" />,
  },
];

export default function ServicesPage() {
  return (
    <main className="px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Services
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Complete Technology Services
          </h1>
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
    </main>
  );
}