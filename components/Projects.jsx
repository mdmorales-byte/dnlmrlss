import { projects } from '@/lib/data';
import Image from 'next/image';

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
      <path
        d="M3 12L12 3M12 3H5M12 3V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-2 font-mono text-xs text-signal2">All Projects</p>
            <h2 className="text-2xl font-semibold text-paper md:text-3xl">Complete project collection</h2>
          </div>
          <p className="font-mono text-xs text-fog">{projects.length} repositories</p>
        </div>
        <p className="mb-12 max-w-2xl text-fog">
          A comprehensive overview of all projects, from web applications to mobile platforms and real-time systems.
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((p, idx) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-line bg-panel/40 transition-all duration-300 hover:border-signal2/70 hover:bg-panel/80 hover:shadow-lg hover:shadow-signal/5"
            >
              <div className="grid h-full gap-0 md:grid-cols-3">
                {p.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-panel md:h-auto">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className={`${p.image ? 'md:col-span-2' : ''} flex flex-col justify-between p-7 md:p-8`}>
                  <div>
                    <div className="mb-3 flex items-baseline gap-4">
                      <p className="font-mono text-xs text-signal2">{p.path}</p>
                      <span className="text-[10px] font-mono text-fog/60">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-medium text-paper transition-colors group-hover:text-signal md:text-xl">
                      {p.name}
                    </h3>
                    <p className="mb-4 max-w-2xl text-sm leading-relaxed text-fog">{p.description}</p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <ul className="flex flex-wrap gap-2">
                      {p.tools.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-line/40 bg-panel/30 px-2 py-1 font-mono text-[10px] text-fog/70"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="shrink-0 text-fog transition-colors group-hover:text-signal">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
