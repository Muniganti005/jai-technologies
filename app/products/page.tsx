import { Bot, Sparkles, BarChart3 } from "lucide-react";

const products = [
  {
    title: "CogniStar",
    description:
      "AI-powered platform for intelligent greetings, automation, and predictive insights.",
    Icon: Sparkles,
  },
  {
    title: "JAI Chatbot",
    description:
      "Smart conversational AI assistant for customer support and business engagement.",
    Icon: Bot,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time business dashboards for reporting, insights, and decision-making.",
    Icon: BarChart3,
  },
];

export default function ProductsPage() {
  return (
    <main className="px-6 pt-36 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Products
          </p>
          <h1 className="mt-3 text-5xl font-bold">
            Innovative Products Built for Tomorrow
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map(({ title, description, Icon }) => (
            <div key={title} className="card p-8">
              <Icon className="mb-5 h-12 w-12 text-cyan-400" />
              <h2 className="mb-4 text-2xl font-bold">{title}</h2>
              <p className="text-slate-300">{description}</p>
              <button className="mt-6 text-cyan-400">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}