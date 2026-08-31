import { profile } from '@/lib/data';

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-ink/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-content items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-4 transition-opacity hover:opacity-80">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line/50 bg-panel text-sm font-bold text-paper">
            MD
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-paper transition-colors group-hover:text-signal">
              Mick Daniel Q. Morales
            </p>
            <p className="text-xs text-fog">{profile.email}</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <button className="rounded-full border border-line/60 p-2 text-fog transition-colors hover:text-paper">
            ☀️
          </button>
          <a
            href="#contact"
            className="rounded-full border border-paper px-5 py-2 text-xs font-medium text-paper transition-all hover:bg-paper hover:text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
