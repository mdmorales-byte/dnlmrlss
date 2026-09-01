import Image from 'next/image';
import { profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="border-t border-line/70 dark:border-line/70 light:border-gray-300/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative h-[540px] overflow-hidden rounded-[28px] border border-line/60 dark:border-line/60 light:border-gray-300/60 bg-panel/60 dark:bg-panel/60 light:bg-gray-100/60 shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)] light:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/Fashion.jpg"
              alt="Mick Daniel Morales"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-signal2">About</p>
            <h2 className="max-w-[620px] text-4xl font-semibold tracking-[-0.055em] text-paper dark:text-paper light:text-gray-900 md:text-[4rem] md:leading-[0.95]">
              Problem-solver with a product mindset.
            </h2>
            <p className="mt-6 max-w-[660px] text-[1.03rem] leading-8 text-fog dark:text-fog light:text-gray-600 md:text-[1.15rem]">
              {profile.bio}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line/60 dark:border-line/60 light:border-gray-300/60 bg-[#0d1a29] dark:bg-[#0d1a29] light:bg-gray-100 p-4">
                <p className="font-mono text-xs text-signal2">Location</p>
                <p className="mt-2 text-[1.05rem] text-paper dark:text-paper light:text-gray-900">{profile.location}</p>
              </div>
              <div className="rounded-xl border border-line/60 dark:border-line/60 light:border-gray-300/60 bg-[#0d1a29] dark:bg-[#0d1a29] light:bg-gray-100 p-4">
                <p className="font-mono text-xs text-signal2">Education</p>
                <p className="mt-2 text-[1.05rem] text-paper dark:text-paper light:text-gray-900">{profile.school}</p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="inline-flex rounded-full bg-signal px-6 py-3 text-[15px] font-medium text-ink dark:text-ink light:text-gray-900 transition hover:bg-signal/90">
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
