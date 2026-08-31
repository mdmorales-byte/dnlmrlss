import { capabilities } from '@/lib/data';

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-signal2">Capabilities</p>
          <h2 className="text-3xl font-semibold text-paper md:text-4xl">What I build and how I work.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="rounded-2xl border border-line/60 bg-panel/40 p-7 transition-colors hover:border-signal2/70 hover:bg-panel/70"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs text-signal2">{capability.number}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-signal" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-paper">{capability.label}</h3>
              <p className="text-base leading-7 text-fog">{capability.detail}</p>

              <ul className="mt-6 space-y-3">
                {capability.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-fog">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-signal2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
