import { profile } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/70 dark:border-line/70 light:border-gray-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="rounded-3xl border border-line/60 dark:border-line/60 light:border-gray-300/60 bg-gradient-to-br from-panel to-panel/70 dark:from-panel dark:to-panel/70 light:from-gray-100 light:to-gray-50 p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal2">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-paper dark:text-paper light:text-gray-900 md:text-5xl">Let's build something useful.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-fog dark:text-fog light:text-gray-600">
            I’m available for product design, web development, mobile applications, and technical consulting work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm md:text-base">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-signal px-5 py-3 font-medium text-ink dark:text-ink light:text-gray-900 transition hover:bg-signal/90">
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line dark:border-line light:border-gray-300 px-5 py-3 font-medium text-paper dark:text-paper light:text-gray-900 transition hover:border-signal hover:text-signal">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line dark:border-line light:border-gray-300 px-5 py-3 font-medium text-paper dark:text-paper light:text-gray-900 transition hover:border-signal hover:text-signal">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
