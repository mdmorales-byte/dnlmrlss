import { featuredProjects } from '@/lib/data';
import Image from 'next/image';

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 15 15" fill="none" className="shrink-0">
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

export default function FeaturedProjects() {
  return (
    <section id="featured" className="border-t border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs text-signal2">Featured Work</p>
          <h2 className="text-2xl font-semibold text-paper md:text-4xl">Two selected projects</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-fog">
            Deep dives into full-stack development and cross-platform mobile experiences with real-world impact.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel/80 to-panel/40 transition-all duration-300 hover:border-signal2/70 hover:from-panel hover:to-panel/60"
            >
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden bg-panel md:h-56">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-8 pb-6 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-xs text-signal2">{String(idx + 1).padStart(2, '0')}</p>
                    <p className="mb-3 text-xs font-mono text-fog/70">{project.category}</p>
                    <h3 className="text-2xl font-semibold text-paper md:text-3xl">{project.name}</h3>
                  </div>
                  <div className="text-signal transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
                    <ArrowIcon />
                  </div>
                </div>
              </div>

              <div className="flex flex-grow flex-col px-8 pb-8 md:px-10">
                <p className="mb-5 leading-relaxed text-fog">{project.description}</p>

                <div className="mb-6 inline-block rounded-lg border border-signal/30 bg-signal/10 px-3 py-2">
                  <p className="font-mono text-xs text-signal">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-line/50 bg-panel/30 px-2.5 py-1 font-mono text-[11px] text-fog/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-signal to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-line/50 pt-12">
          <a href="#work" className="inline-flex items-center gap-2 font-medium text-paper transition-colors hover:text-signal group">
            View all projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
