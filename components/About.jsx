import Image from 'next/image';
import { profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="border-t border-gray-300/70 dark:border-line/70 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative h-[540px] overflow-hidden rounded-[28px] border border-gray-300/60 dark:border-line/60 bg-gray-100/60 dark:bg-panel/60 shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
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
            <h2 className="max-w-[620px] text-4xl font-semibold tracking-[-0.055em] text-gray-900 dark:text-paper md:text-[4rem] md:leading-[0.95]">
              Problem-solver with a product mindset.
            </h2>
            <p className="mt-6 max-w-[660px] text-[1.03rem] leading-8 text-gray-600 dark:text-fog md:text-[1.15rem]">
              {profile.bio}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-300/60 dark:border-line/60 bg-gray-100 dark:bg-[#0d1a29] p-4">
                <p className="font-mono text-xs text-signal2">Location</p>
                <p className="mt-2 text-[1.05rem] text-gray-900 dark:text-paper">{profile.location}</p>
              </div>
              <div className="rounded-xl border border-gray-300/60 dark:border-line/60 bg-gray-100 dark:bg-[#0d1a29] p-4">
                <p className="font-mono text-xs text-signal2">Education</p>
                <p className="mt-2 text-[1.05rem] text-gray-900 dark:text-paper">{profile.school}</p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="inline-flex rounded-full bg-signal px-6 py-3 text-[15px] font-medium text-gray-900 dark:text-ink transition hover:bg-signal/90">
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
