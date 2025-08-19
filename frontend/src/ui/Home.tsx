import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black tracking-tight">Trade with clarity, not noise.</h1>
            <p className="mt-4 text-lg text-zinc-300">Actionable crypto and forex signals, delivered in real time. No hype, just edge.</p>
            <div className="mt-8 flex gap-3">
              <Link to="/signup" className="btn-primary">Start free</Link>
              <Link to="/pricing" className="btn-muted">View pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
        {[{t:'Realtime alerts',d:'Latency-optimized delivery to web and email.'},{t:'Pro strategies',d:'Built by quants across crypto & FX.'},{t:'Risk-first',d:'Clear invalidations and targets.'}].map((f) => (
          <div key={f.t} className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold">{f.t}</h3>
            <p className="mt-2 text-zinc-300">{f.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

