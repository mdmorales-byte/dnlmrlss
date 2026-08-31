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
          <h1 className="max-w-[720px] text-[4.2rem] font-semibold leading-[0.88] tracking-[-0.075em] text-paper md:text-[7rem]">
            Building clean,
            <br />
            useful digital
            <br />
            products.
          </h1>
          <p className="mt-7 max-w-[660px] text-[1.05rem] leading-8 text-fog md:text-[1.26rem]">
            I&apos;m a full-stack developer and IT student focused on practical, user-first software for web, mobile, and infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="rounded-full bg-signal px-6 py-3 text-[14px] font-medium text-ink transition hover:bg-signal/90">
              Featured projects
            </a>
            <a href="#contact" className="rounded-full border border-line px-6 py-3 text-[14px] font-medium text-paper transition hover:border-signal hover:text-signal">
              Get in touch
            </a>
          </div>
        </div>

        <div className="glass-card ml-auto w-full max-w-[430px] rounded-[22px] border border-line/70 p-5 fade-up">
          <div className="flex items-center gap-3 border-b border-line/50 pb-4">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-line/70 bg-signal/20">
              <Image
                src="/images/Fashion.jpg"
                alt="Mick Daniel Morales"
                fill
                sizes="44px"
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-[15px] font-medium text-paper">{profile.fullName}</p>
              <p className="text-[12px] text-fog">{profile.location}</p>
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
