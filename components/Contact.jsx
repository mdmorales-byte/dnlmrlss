import { profile } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line-light/70 dark:border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="rounded-3xl border border-line-light/60 dark:border-line/60 bg-white dark:from-panel dark:to-panel/70 p-8 md:p-12 shadow-card-light dark:shadow-none">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal2">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-paper-light dark:text-paper md:text-5xl">Let's build something useful.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-fog-light dark:text-fog">
            I’m available for product design, web development, mobile applications, and technical consulting work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm md:text-base">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-signal px-5 py-3 font-semibold text-ink transition hover:bg-signal/90">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line-light dark:border-line px-5 py-3 font-medium text-paper-light dark:text-paper transition hover:border-signal hover:text-signal">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line-light dark:border-line px-5 py-3 font-medium text-paper-light dark:text-paper transition hover:border-signal hover:text-signal">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
