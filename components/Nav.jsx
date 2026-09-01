'use client';

import Image from 'next/image';
import { profile } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-white/95 dark:bg-[#08131d]/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-center gap-4 transition-opacity hover:opacity-80">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gray-300/50 bg-gray-200 dark:border-line/50 dark:bg-[#1d2d3c]">
            <Image
              src="/images/Formal.jpg"
              alt="Mick Daniel Morales"
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col leading-none">
            <p className="text-[15px] font-medium text-gray-900 dark:text-paper transition-colors group-hover:text-signal">
              Mick Daniel Q. Morales
            </p>
            <p className="mt-1 text-[13px] text-gray-600 dark:text-fog">{profile.email}</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/60 bg-gray-100 dark:border-line/60 dark:bg-[#0d1b29] text-base text-gray-600 dark:text-fog transition-colors hover:text-gray-900 dark:hover:text-paper"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="rounded-full border border-gray-800/80 px-5 py-2 text-[14px] font-medium text-gray-900 dark:border-paper/80 dark:text-paper transition-all hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-paper dark:hover:text-ink"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
