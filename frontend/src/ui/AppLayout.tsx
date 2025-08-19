import { Link, NavLink, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-white">
            <span className="h-2 w-2 bg-brand-400 rounded-full animate-pulse"></span>
            NovaTrade
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}>Home</NavLink>
            <NavLink to="/pricing" className={({isActive}) => isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}>Pricing</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-white' : 'text-zinc-300 hover:text-white'}>Dashboard</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/signin" className="btn-muted">Sign in</Link>
            <Link to="/signup" className="btn-primary">Get started</Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <span>© {new Date().getFullYear()} NovaTrade</span>
          <span className="opacity-75">Built for traders, not tourists.</span>
        </div>
      </footer>
    </div>
  );
}

