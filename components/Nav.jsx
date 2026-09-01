'use client';

import Image from 'next/image';
import { profile } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-[#08131d]/95 backdrop-blur-sm dark:bg-[#08131d]/95 light:bg-white/95">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-4 transition-opacity hover:opacity-80">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-line/50 bg-[#1d2d3c] dark:bg-[#1d2d3c] light:bg-gray-200">
            <Image
              src="/images/Formal.jpg"
              alt="Mick Daniel Morales"
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col leading-none">
            <p className="text-[15px] font-medium text-paper dark:text-paper light:text-gray-900 transition-colors group-hover:text-signal">
              Mick Daniel Q. Morales
            </p>
            <p className="mt-1 text-[13px] text-fog dark:text-fog light:text-gray-600">{profile.email}</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-[#0d1b29] dark:bg-[#0d1b29] light:bg-gray-100 text-base text-fog dark:text-fog light:text-gray-600 transition-colors hover:text-paper dark:hover:text-paper light:hover:text-gray-900"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="rounded-full border border-paper/80 px-5 py-2 text-[14px] font-medium text-paper dark:text-paper light:text-gray-900 transition-all hover:bg-paper hover:text-ink dark:hover:bg-paper dark:hover:text-ink light:hover:bg-gray-200 light:hover:text-gray-900"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
