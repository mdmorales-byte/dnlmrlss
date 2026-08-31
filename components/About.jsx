import Image from 'next/image';
import { profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="border-t border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-panel/60">
            <div className="relative h-[420px] w-full">
              <Image
                src="/images/mick-formal.svg"
                alt="Mick Daniel Morales"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-signal2">About</p>
            <h2 className="text-3xl font-semibold text-paper md:text-4xl">Problem-solver with a product mindset.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-fog">
              {profile.bio}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line/60 bg-panel/30 p-4">
                <p className="font-mono text-xs text-signal2">Location</p>
                <p className="mt-2 text-paper">{profile.location}</p>
              </div>
              <div className="rounded-xl border border-line/60 bg-panel/30 p-4">
                <p className="font-mono text-xs text-signal2">Education</p>
                <p className="mt-2 text-paper">{profile.school}</p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="inline-flex rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition hover:bg-signal/90">
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
