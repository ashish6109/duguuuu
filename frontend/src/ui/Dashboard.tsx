import { useEffect, useState } from 'react';

type Signal = {
  id: string;
  symbol: string;
  direction: 'long'|'short';
  entry: number;
  stop: number;
  targets: number[];
  createdAt: string;
}

export function Dashboard() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/signals', {
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(async r => {
      if (!r.ok) throw new Error('Unauthorized');
      return r.json();
    })
    .then(d => setSignals(d.signals))
    .catch(() => setError('Please sign in to view signals.'));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Signals</h2>
          <p className="text-zinc-400">Real-time trade setups.</p>
        </div>
      </div>
      {error && <div className="mt-6 text-red-400">{error}</div>}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {signals.map(s => (
          <div key={s.id} className="glass rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{s.symbol}</div>
              <span className={`px-2 py-1 rounded text-xs ${s.direction === 'long' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>{s.direction.toUpperCase()}</span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3 text-sm">
              <div><div className="text-zinc-400">Entry</div><div className="font-medium">{s.entry}</div></div>
              <div><div className="text-zinc-400">Stop</div><div className="font-medium">{s.stop}</div></div>
              <div className="col-span-2"><div className="text-zinc-400">Targets</div><div className="font-medium">{s.targets.join(', ')}</div></div>
            </div>
            <div className="mt-3 text-xs text-zinc-500">{new Date(s.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

