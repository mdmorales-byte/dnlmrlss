import Image from 'next/image';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1280px] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-signal2">
            {profile.name}
          </p>
          <h1 className="max-w-[720px] text-[4.2rem] font-semibold leading-[0.88] tracking-[-0.075em] text-paper dark:text-paper light:text-gray-900 md:text-[7rem]">
            Building clean,
            <br />
            useful digital
            <br />
            products.
          </h1>
          <p className="mt-7 max-w-[660px] text-[1.05rem] leading-8 text-fog dark:text-fog light:text-gray-600 md:text-[1.26rem]">
            I&apos;m a full-stack developer and IT student focused on practical, user-first software for web, mobile, and infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="rounded-full bg-signal px-6 py-3 text-[14px] font-medium text-ink dark:text-ink light:text-gray-900 transition hover:bg-signal/90">
              Featured projects
            </a>
            <a href="#contact" className="rounded-full border border-line dark:border-line light:border-gray-300 px-6 py-3 text-[14px] font-medium text-paper dark:text-paper light:text-gray-900 transition hover:border-signal hover:text-signal">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-[28px] border border-line/60 dark:border-line/60 light:border-gray-300/60 bg-panel/60 dark:bg-panel/60 light:bg-gray-100/60 shadow-[0_20px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)] light:shadow-[0_20px_60px_rgba(0,0,0,0.1)] fade-up">
          <Image
            src="/images/Formal.jpg"
            alt="Mick Daniel Morales"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
