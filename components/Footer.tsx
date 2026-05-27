export default function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-slate-950 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">JAI Technologies</h2>
          <p className="mt-3 text-sm text-slate-400">
            AI-powered software and cloud solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <p className="mt-3 text-sm text-slate-400">AI Automation</p>
          <p className="text-sm text-slate-400">Cloud Solutions</p>
          <p className="text-sm text-slate-400">Software Development</p>
        </div>

        <div>
          <h4 className="font-semibold">Products</h4>
          <p className="mt-3 text-sm text-slate-400">CogniStar</p>
          <p className="text-sm text-slate-400">JAI Chatbot</p>
          <p className="text-sm text-slate-400">Analytics Dashboard</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-slate-400">info@jaitechnologies.com</p>
        </div>
      </div>
    </footer>
  );
}