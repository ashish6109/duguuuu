import { useQuery } from '@tanstack/react-query';

export function Pricing() {
  const { data } = useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const r = await fetch('/api/plans');
      return r.json();
    }
  });

  const plans = data?.plans ?? [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-4xl font-bold">Pricing</h2>
      <p className="mt-2 text-zinc-300">Simple, transparent plans.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p: any) => (
          <div key={p.id} className="glass rounded-xl p-6 flex flex-col">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="mt-3 text-4xl font-black">${p.priceMonthly}<span className="text-base font-medium text-zinc-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
              {p.features.map((f: string) => <li key={f}>{f}</li>)}
            </ul>
            <button className="btn-primary mt-6">Choose {p.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

