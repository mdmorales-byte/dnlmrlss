import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-signal2">
            {profile.name}
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-paper md:text-6xl">
            Building clean, useful digital products.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-fog md:text-lg">
            I&apos;m a full-stack developer and IT student focused on practical, user-first software for web, mobile, and infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition hover:bg-signal/90">
              Featured projects
            </a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-signal hover:text-signal">
              Get in touch
            </a>
          </div>
        </div>

        <div className="glass-card rounded-2xl border border-line/70 p-5 fade-up">
          <div className="flex items-center gap-3 border-b border-line/50 pb-4">
            <div className="h-10 w-10 rounded-full bg-signal/20 text-center text-lg leading-10 text-signal">M</div>
            <div>
              <p className="text-sm font-medium text-paper">{profile.fullName}</p>
              <p className="text-xs text-fog">{profile.location}</p>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-sm text-fog">
            <div className="flex items-center justify-between border-b border-line/30 pb-2">
              <span>Role</span>
              <span className="text-paper">{profile.title}</span>
            </div>
            <div className="flex items-center justify-between border-b border-line/30 pb-2">
              <span>School</span>
              <span className="text-paper">{profile.school}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-signal2">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
