import { Target, Eye, HeartHandshake, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="px-6 pt-36 pb-20">
      <section className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            About JAI Technologies
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Delivering Excellence Through{" "}
            <span className="gradient-text">Innovation</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            JAI Technologies is a modern IT solutions provider delivering
            intelligent software, cloud, automation, and AI-powered services
            that help organizations transform and scale.
          </p>
        </div>

        <div className="card p-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-950 p-12 text-center">
            <h2 className="text-4xl font-bold">JAI</h2>
            <p className="mt-3 text-slate-300">
              AI • Cloud • Software • Automation
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 md:grid-cols-4">
        <AboutCard
          Icon={Target}
          title="Our Mission"
          text="Deliver innovative and reliable technology solutions."
        />
        <AboutCard
          Icon={Eye}
          title="Our Vision"
          text="Become a global leader in AI and digital transformation."
        />
        <AboutCard
          Icon={HeartHandshake}
          title="Our Values"
          text="Integrity, innovation, excellence, and customer success."
        />
        <AboutCard
          Icon={Trophy}
          title="Our Commitment"
          text="Build long-term partnerships with measurable business impact."
        />
      </section>
    </main>
  );
}

function AboutCard({
  Icon,
  title,
  text,
}: {
  Icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="card p-6">
      <Icon className="mb-4 h-9 w-9 text-cyan-400" />
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}