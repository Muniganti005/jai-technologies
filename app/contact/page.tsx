import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="px-6 pt-36 pb-20">
      <section className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Let’s Build Something Great Together
          </h1>

          <p className="mt-6 text-slate-300">
            Have a project in mind? Contact JAI Technologies and let’s discuss
            how AI, cloud, and software can help your business.
          </p>

          <div className="mt-8 space-y-5">
            <p className="flex gap-3">
              <Mail className="text-cyan-400" /> info@jaitechnologies.com
            </p>
            <p className="flex gap-3">
              <Phone className="text-cyan-400" /> +1 (000) 000-0000
            </p>
            <p className="flex gap-3">
              <MapPin className="text-cyan-400" /> United States
            </p>
          </div>
        </div>

        <form className="card space-y-5 p-8">
          <input className="w-full rounded-lg bg-slate-900 p-4" placeholder="Your Name" />
          <input className="w-full rounded-lg bg-slate-900 p-4" placeholder="Email Address" />
          <input className="w-full rounded-lg bg-slate-900 p-4" placeholder="Company Name" />
          <textarea className="h-36 w-full rounded-lg bg-slate-900 p-4" placeholder="Message" />
          <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}