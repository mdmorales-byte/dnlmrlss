import Image from 'next/image';
import { profile } from '@/lib/data';

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-[#08131d]/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-4 transition-opacity hover:opacity-80">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-line/50 bg-[#1d2d3c]">
            <Image
              src="/images/Formal.jpg"
              alt="Mick Daniel Morales"
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col leading-none">
            <p className="text-[15px] font-medium text-paper transition-colors group-hover:text-signal">
              Mick Daniel Q. Morales
            </p>
            <p className="mt-1 text-[13px] text-fog">{profile.email}</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-full border border-paper/80 px-5 py-2 text-[14px] font-medium text-paper transition-all hover:bg-paper hover:text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
