import { FormEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    const r = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    if (!r.ok) {
      const msg = (await r.json()).error || 'Could not sign up';
      setError(msg);
      return;
    }
    const data = await r.json();
    localStorage.setItem('token', data.token);
    navigate('/dashboard');
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h2 className="text-3xl font-bold">Create your account</h2>
      <p className="text-zinc-400">Start your free trial</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2" />
      <button className="btn-primary w-full" type="submit">Create account</button>
      {error && <div className="text-red-400 text-sm">{error}</div>}
      </form>
      <div className="mt-4 text-sm text-zinc-400">Already have an account? <Link to="/signin" className="text-white">Sign in</Link></div>
    </div>
  );
}

